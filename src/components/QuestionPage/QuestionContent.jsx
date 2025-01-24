import styled from "styled-components";
import colors from "../../styles/color";

function QuestionContent({ question }){
    return (
        <StyledQuestion>
            <div> 1 / 5 </div>
            <div> 여행 중 발견한 오래된 지도에 신사로 가는 네 개의 경로가 표시되어 있다. 어떤 길을 선택할까? </div>
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