import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import styled from "styled-components";
import ShrineImage from "../../src/assets/Shrine/Asakusa.png";
import Flower from "../assets/title_flower.png";
import KamiImage from "../assets/Kami/Ebisu.png";
import Divider from "../components/common/results/Divider";
import KeywordList from "../components/common/results/KeywordList";
import KeywordDetail from "../components/common/results/KeywordDetail";
import colors from "../styles/color";

const ResultPage = () => {
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    const fetchResultData = async () => {
      try {
        const { data, error } = await supabase
          .from("results")
          .select("*")
          .eq("id", 1) // 필요한 ID로 수정 가능
          .single();

        if (error) throw error;

        setResultData(data);
      } catch (error) {
        console.error("결과 데이터를 가져오는 중 오류가 발생했습니다:", error.message);
      }
    };

    fetchResultData();
  }, []);

  if (!resultData) return <div>로딩 중...</div>;

  return (
    <ResultLayout>
      <ShrineImg src={resultData.shrine_image_url || ShrineImage} alt="Shrine" />
      <DottedLine />
      <Divider theme="light" />
      <FlowerContainer>
        <FlowerImg src={Flower} alt="Flower" />
        <FlowerText className="font-pretendard">{resultData.result_name_ko}</FlowerText>
      </FlowerContainer>
      <Divider theme="dark" />
      <KamiImg src={resultData.kami_image_url || KamiImage} alt="Kami" />
      <KamiName className="font-pretendard">{resultData.kami_name_ko}</KamiName>
      <Divider theme="light" />
      <KeywordList hashtags={resultData.hashtag_ko.split(",")} />
      <Divider theme="dark" />
      <KeywordDetail description={resultData.description_ko} />
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
