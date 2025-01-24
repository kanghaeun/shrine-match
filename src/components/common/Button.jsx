import styled from "styled-components";
import colors from "../../styles/color";

<<<<<<< HEAD
<<<<<<< HEAD
function Button({ children, ...props }) {
  return(
    <StyledButton {...props}>{children}</StyledButton>
  );
=======
function Button({ children, className }) {
  return <StyledButton className={className}>{children}</StyledButton>;
>>>>>>> 479ba27 (feat: button 스타일링)
=======
function Button({ children, className, ...props }) {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
>>>>>>> 426f6db (feat: 가져온 데이터 상태에 저장 및 페이지 이동)
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
<<<<<<< HEAD
  font-size: 1rem;
=======
  cursor: pointer;

  :hover {
    background-color: ${colors.primary};
  }
>>>>>>> 426f6db (feat: 가져온 데이터 상태에 저장 및 페이지 이동)
`;
=======
`;
>>>>>>> 479ba27 (feat: button 스타일링)
