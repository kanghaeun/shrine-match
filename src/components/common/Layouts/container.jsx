import styled from "styled-components";
import colors from "../../../styles/color";

function Container({ children }) {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
}

export default Container;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;

const Inner = styled.div`
  height: 100vh;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 0;
  padding: 20px;
  background-color: white;
`;
