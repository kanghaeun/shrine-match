import styled from "styled-components";
import Shrine from "../../src/assets/Shrine/Asakusa.png";
import Flower from "../assets/title_flower.png";
import Ebisu from "../assets/Kami/Ebisu.png";
import styled from "styled-components";
import Divider from "../components/common/result/Divider";
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
      <KeywordDetail />
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
`;

const ShrineImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const FlowerContainer = styled.div`
  display: flex;
  align-items: center; /* 세로로 가운데 정렬 */
  justify-content: center; /* 가로로 가운데 정렬 */
  gap: 10px; /* 이미지와 텍스트 사이 간격 */
  margin: 20px 0; /* 상하 간격 */
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
