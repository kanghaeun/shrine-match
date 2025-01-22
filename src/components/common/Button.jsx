import styled from "styled-components";
import colors from "../../styles/color";

function Button({ children }) {
  return(
    <StyledButton>{children}</StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  border: none;
  border-radius: 15px;
  width: 95%;
  padding: 10px;
  font-family: "NanumMyeongjo", serif;
  background-color: ${colors.button};
  color: white;
  margin: 5px auto;
  font-weight: bold;
`;