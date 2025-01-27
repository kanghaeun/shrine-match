import styled from "styled-components";
import Button from "../common/Button";

function ChoiceButtons({ choiceText, onSelect }) {
  return <ChoiceButton onClick={onSelect}>{choiceText}</ChoiceButton>;
}

export default ChoiceButtons;

const ChoiceButton = styled(Button)`
  height: auto;
  font-size: 18px;
  width: 100%;
`;
