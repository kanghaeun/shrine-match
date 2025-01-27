import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import styled from "styled-components";
import Button from "../common/Button";

function HomeButton({ language, text }) {
  const [questionsData, setQuestionsData] = useState([]);
  const [answersData, setAnswersData] = useState([]);
  const navigate = useNavigate();
  //navigate state를 사용하여 다음 페이지로 이동하고, state를 전달합니다.
  const fetchData = async () => {
    try {
      const questionColumn =
        language === "한국어"
          ? "question_ko"
          : language === "English"
          ? "question_en"
          : "question_jp";

      const answerColumn =
        language === "한국어"
          ? "answer_ko"
          : language === "English"
          ? "answer_en"
          : "answer_jp";

      const { data: fetchedQuestions, error: questionError } = await supabase
        .from("questions")
        .select(`id, ${questionColumn}`);

      if (questionError) throw questionError;

      const { data: fetchedAnswers, error: answerError } = await supabase
        .from("answers")
        .select(`id, question_id, ${answerColumn}`);

      if (answerError) throw answerError;

      setQuestionsData(fetchedQuestions);
      setAnswersData(fetchedAnswers);
      // console.log(fetchedQuestions);
      // console.log(fetchedAnswers);

      navigate(`/question/${questionId}`, {
        state: { questions: fetchedQuestions, answers: fetchedAnswers },
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return <CustomButton onClick={fetchData}>{text}</CustomButton>;
}

export default HomeButton;

const CustomButton = styled(Button)`
  height: 80px;
  font-size: 28px;
  width: 100%;
`;
