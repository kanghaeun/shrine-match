import styled from "styled-components";
import tagLuck from "../../../assets/tag_luck.png";
import colors from "../../../styles/color";

const Keyword = ({ text }) => {
  return (
    <KeywordLayout>
      <TagLuckImg src={tagLuck} alt="tag_luck" />
      <VerticalText className="font-pretendard">{text}</VerticalText>
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
  color: ${colors.keyword};
  writing-mode: vertical-rl;
  text-orientation: upright;
  margin-top: 10px;
  letter-spacing: 1px;
  font-size: 22px;
`;
