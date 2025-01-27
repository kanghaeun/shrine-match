import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import styled from "styled-components";
import Button from "../common/Button";

function HomeButton({ language, text }) {
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const questionColumn = `question_${language === "한국어" ? "ko" : language === "English" ? "en" : "jp"}`;
      const answerColumn = `answer_${language === "한국어" ? "ko" : language === "English" ? "en" : "jp"}`;

      const { data: fetchedQuestions, error: questionError } = await supabase
        .from("questions")
        .select(`id, ${questionColumn}`)
        .order("id");

      if (questionError) throw questionError;

      const { data: fetchedAnswers, error: answerError } = await supabase
        .from("answers")
        .select(`id, question_id, ${answerColumn}`)
        .order("id");

      if (answerError) throw answerError;

      navigate("/question/1", {
        state: {
          questions: fetchedQuestions,
          answers: fetchedAnswers,
          currentQuestionIndex: 0,
          selectedAnswers: [],
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return <CustomButton onClick={fetchData}>{text}</CustomButton>;
}

export default HomeButton;

const CustomButton = styled(Button)`
  font-size: 28px;
`;
