import styled from "styled-components";
import Button from "../common/button";

function ChoiceButtons({ choice, onSelect }){
  return (
    <ChoiceButton onClick={() => {alert("선택지 클릭!")}}>
      울창한 대나무 숲길:
      바람이 대나무 사이를 스치며 편안한 소리를 냅니다.
    </ChoiceButton>
  );
}

export default ChoiceButtons;


const ChoiceButton = styled(Button)`
  height: auto;
  font-size: 18px;
  width: 100%;
`;