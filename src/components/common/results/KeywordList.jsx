import styled from "styled-components";
import Keyword from "./Keyword";

const KeywordList = () => {
  const keywords = Array(5).fill(null);

  return (
    <KeywordListContainer>
      {keywords.map((_, index) => (
        <Keyword key={index} />
      ))}
    </KeywordListContainer>
  );
};

export default KeywordList;

const KeywordListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: flex-start;
  padding: 25px 0 30px;
`;
