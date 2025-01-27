import styled from "styled-components";
import question_background from "../assets/question_background.png";
import QuestionContent from "../components/QuestionPage/QuestionContent";
import ChoiceButtons from "../components/QuestionPage/ChoiceButtons";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

function QuestionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { questions, answers, currentQuestionIndex, selectedAnswers } = location.state || {};

  const currentQuestion = questions?.[currentQuestionIndex];
  const currentAnswers = answers?.filter((answer) => answer.question_id === currentQuestion?.id);

  const handleAnswerSelect = (answerId) => {
    const newSelectedAnswers = [...selectedAnswers, answerId];

    if (currentQuestionIndex < questions.length - 1) {
      navigate(`/question/${currentQuestionIndex + 2}`, {
        state: {
          questions,
          answers,
          currentQuestionIndex: currentQuestionIndex + 1,
          selectedAnswers: newSelectedAnswers,
        },
      });
    } else {
      navigate("/result", {
        state: { selectedAnswers: newSelectedAnswers },
      });
    }
  };

  if (!questions || !answers) {
    return <div>로딩 중...</div>;
  }

  const questionColumn = `question_${language === "한국어" ? "ko" : language === "English" ? "en" : "jp"}`;
  const answerColumn = `answer_${language === "한국어" ? "ko" : language === "English" ? "en" : "jp"}`;

  return (
    <QuestionLayout>
      <BackgroundImg src={question_background} alt="Background" />
      <QuestionContent
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        questionText={currentQuestion[questionColumn]}
      />
      <ChoiceButtonsContainer>
        {currentAnswers.map((answer) => (
          <ChoiceButtons
            key={answer.id}
            choiceText={answer[answerColumn]}
            onSelect={() => handleAnswerSelect(answer.id)}
          />
        ))}
      </ChoiceButtonsContainer>
    </QuestionLayout>
  );
}

export default QuestionPage;

const QuestionLayout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 4vh;
`;

const ChoiceButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 0 20px;
`;
