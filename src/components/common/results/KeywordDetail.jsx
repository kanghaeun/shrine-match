import styled from "styled-components";

const KeywordDetail = ({ description }) => {
  return (
    <KeywordDetailLayout>
      <KeywordDetailText>{description}</KeywordDetailText>
    </KeywordDetailLayout>
  );
};

export default KeywordDetail;

const KeywordDetailLayout = styled.div`
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const KeywordDetailText = styled.div`
  font-size: 18px;
  word-wrap: break-word;
  word-break: break-all;
  line-height: 26px;
  width: 100%;
`;
