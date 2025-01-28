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
  position: absolute;
  height: 0px;
  text-align: center;
  max-width: 80%;
  width: auto;
  top: 17%;
  z-index: 10;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: "NanumMyeongjo", serif;
  line-height: 1.3;
  word-break: keep-all;
  color: ${colors.secondary};

  & > div {
    margin-bottom: 1.5rem;
  }
`;
