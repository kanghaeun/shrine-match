import styled from "styled-components";
import colors from "../../styles/color";

function Button({ children, className, ...props }) {
  return (
    <StyledButton className={className} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  border: none;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  font-family: "NanumMyeongjo", serif;
  background-color: ${colors.button};
  color: white;
  line-height: 1.3;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;
