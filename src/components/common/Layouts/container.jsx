import styled from "styled-components";
<<<<<<< HEAD
=======
import colors from "../../../styles/color";
>>>>>>> e0277cd5677614c533aa02b5f6e39fd0dbc0d20d

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
<<<<<<< HEAD
`;

const Inner = styled.div`
  min-height: 100vh;
  max-width: 380px;
=======
  background-color: ${colors.background};
`;

const Inner = styled.div`
  max-width: 500px;
  width: 100%;
  height: 972px;
>>>>>>> e0277cd5677614c533aa02b5f6e39fd0dbc0d20d
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 0;
  padding: 20px;
<<<<<<< HEAD
  background-color: #bbbbbb;
=======
  background-color: white;
>>>>>>> e0277cd5677614c533aa02b5f6e39fd0dbc0d20d
`;
