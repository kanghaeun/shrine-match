import styled from "styled-components";
import colors from "../../styles/color";

<<<<<<< HEAD
function Button({ children, ...props }) {
  return(
    <StyledButton {...props}>{children}</StyledButton>
  );
=======
function Button({ children, className }) {
  return <StyledButton className={className}>{children}</StyledButton>;
>>>>>>> 479ba27 (feat: button 스타일링)
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
<<<<<<< HEAD
  font-size: 1rem;
`;
=======
`;
>>>>>>> 479ba27 (feat: button 스타일링)
