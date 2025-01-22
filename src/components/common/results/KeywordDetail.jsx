import styled from "styled-components";

const KeywordDetail = () => {
  return (
    <KeywordDetailLayout>
      <KeywordDetailText>
        아사쿠사 신사는 도쿄에 위치해 있으며 규모가 큰 신사이다.아사쿠사 신사는
        도쿄에 위치해 있으며 규모가 큰 신사이다.아사쿠사 신사는 도쿄에 위치해
        있으며 규모가 큰 신사이다.
      </KeywordDetailText>
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
