import styled from "styled-components";
import colors from "../../styles/color";

function QuestionContent({ questionNumber, totalQuestions, questionText }) {
  return (
    <StyledQuestion>
      <div>
        {questionNumber} / {totalQuestions}
      </div>
      <div>{questionText}</div>
    </StyledQuestion>
  );
}

export default QuestionContent;

const StyledQuestion = styled.div`
  position: relative;
  height: 0px;
  text-align: center;
  max-width: 350px;
  width: auto;
  bottom: 415px;
  z-index: 10;
  font-size: 20px;
  font-weight: bold;
  font-family: "NanumMyeongjo", serif;
  line-height: 1.3;
  word-break: keep-all;
  color: ${colors.secondary};

  & > div {
    margin-bottom: 1.5rem;
  }
`;
