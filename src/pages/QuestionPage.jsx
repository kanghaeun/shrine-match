import styled from "styled-components";
import question_background from "../assets/question_background.png";
import QuestionContent from "../components/QuestionPage/QuestionContent";
import ChoiceButtons from "../components/QuestionPage/ChoiceButtons";
import { useParams, useLocation } from "react-router-dom";

function QuestionPage({ state }) {
  const location = useLocation();
  const { questions, answers } = location.state || {};
  console.log("질문", questions);
  console.log("답변", answers);
  const { id } = useParams();

  return (
    <QuestionLayout>
      <BackgroundImg src={question_background} alt="Background" />

      <QuestionContent />
      <ChoiceButtons />
      <ChoiceButtons />
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
  margin-bottom: 8vh;
`;
