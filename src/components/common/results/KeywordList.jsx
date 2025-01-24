import styled from "styled-components";
import Keyword from "./Keyword";

const KeywordList = ({ keywords }) => {
  return (
    <KeywordListContainer>
      {keywords.map((keyword, index) => (
        <Keyword key={index} text={keyword} />
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
