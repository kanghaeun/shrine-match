import styled from "styled-components";
import Shrine from "../../src/assets/Shrine/Asakusa.png";
import Flower from "../assets/title_flower.png";
import Ebisu from "../assets/Kami/Ebisu.png";
import Divider from "../components/common/results/Divider";
import colors from "../styles/color";
import KeywordList from "../components/common/results/KeyWordList";
import KeywordDetail from "../components/common/results/KeywordDetail";

const ResultPage = () => {
  return (
    <ResultLayout>
      <ShrineImg src={Shrine} alt="Shrine" />
      <DottedLine />
      <Divider theme="light" />
      <FlowerContainer>
        <FlowerImg src={Flower} alt="Flower" />
        <FlowerText className="font-pretendard">아사쿠사 신사</FlowerText>
      </FlowerContainer>
      <Divider theme="dark" />
      <KamiImg src={Ebisu} alt="Kami" />
      <KamiName className="font-pretendard">에비스</KamiName>
      <Divider theme="light" />
      <KeywordList />
      <Divider theme="dark" />
      <KeywordDetail />
      <Divider theme="dark" />
    </ResultLayout>
  );
};

export default ResultPage;

const ResultLayout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior-y: contain;
  scroll-behavior: smooth;
  padding-bottom: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ShrineImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const FlowerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

const FlowerImg = styled.img`
  width: 10%;
  height: auto;
  object-fit: contain;
`;

const KamiImg = styled.img`
  width: 40%;
  height: auto;
  object-fit: contain;
  margin-top: 30px;
`;
const FlowerText = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.secondary};
`;

const KamiName = styled.div`
  margin: 15px 0 20px 0;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
`;

const DottedLine = styled.div`
  position: relative;
  left: -20px;
  width: calc(100% + 40px);
  height: 2px;
  background-image: linear-gradient(to right, black 50%, transparent 50%);
  background-position: top;
  background-size: 15px 1.2px;
  background-repeat: repeat-x;
  margin-top: 35px;
`;
