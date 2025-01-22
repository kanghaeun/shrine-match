import styled from "styled-components";
import tagLuck from "../../../assets/tag_luck.png";

const Keyword = () => {
  return (
    <KeywordLayout>
      <TagLuckImg src={tagLuck} alt="tag_luck" />
      <VerticalText class="font-pretendard">오마쿠지100엔</VerticalText>{" "}
    </KeywordLayout>
  );
};

export default Keyword;

const KeywordLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TagLuckImg = styled.img`
  width: 100%;
  height: auto;
`;

const VerticalText = styled.div`
  font-weight: 600;
  color: #3b97de;
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-top: 10px;
  letter-spacing: 5px;
  font-size: 18px;
`;
