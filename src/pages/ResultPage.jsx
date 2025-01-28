import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import styled from "styled-components";
import Flower from "../assets/title_flower.png";
import Divider from "../components/common/results/Divider";
import KeywordList from "../components/common/results/KeywordList";
import KeywordDetail from "../components/common/results/KeywordDetail";
import colors from "../styles/color";
import { useLanguage } from "../hooks/useLanguage";
import { useLocation } from "react-router-dom";
import ShrineMap from "../components/common/results/ShrineMap";

const ResultPage = () => {
  const [resultData, setResultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();
  const location = useLocation();
  const { selectedAnswers } = location.state || {};

  useEffect(() => {    
    const fetchResultData = async () => {
      try {
        const resultId = 1; // 임시로 1로 설정, 실제로는 답변에 따라 계산되어야 함

        const { data, error } = await supabase.from("results").select("*").eq("id", resultId).single();
        if (error) throw error;
        setResultData(data);
      } catch (error) {
        setError("결과 데이터를 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchResultData();
  }, [selectedAnswers]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  const shrineImageUrl = resultData.shrine_image_name
    ? new URL(`../assets/Shrine/${resultData.shrine_image_name}.png`, import.meta.url).href
    : null;

  const kamiImageUrl = resultData.kami_image_name
    ? new URL(`../assets/Kami/${resultData.kami_image_name}.png`, import.meta.url).href
    : null;

  const langSuffix = language === "한국어" ? "ko" : language === "English" ? "en" : "ja";

  const hashtags = resultData[`hashtag_${langSuffix}`]?.split(",") || [];
  const description = resultData[`description_${langSuffix}`];
  const resultName = resultData[`result_name_${langSuffix}`];
  const kamiName = resultData[`kami_name_${langSuffix}`];
  const shrineLocation = resultData[`result_name_${langSuffix}`];

  return (
    <ResultLayout>
      <ShrineImg src={shrineImageUrl} alt="Shrine" />
      <DottedLine />
      <Divider theme="light" />
      <FlowerContainer>
        <FlowerImg src={Flower} alt="Flower" />
        <FlowerText className="font-pretendard">{resultName}</FlowerText>
      </FlowerContainer>
      <Divider theme="dark" />
      <KamiImg src={kamiImageUrl} alt="Kami" />
      <KamiName className="font-pretendard">{kamiName}</KamiName>
      <Divider theme="light" />
      <KeywordList keywords={hashtags} />
      <Divider theme="dark" />
      <KeywordDetail description={description} />
      <Divider theme="dark" />
      <ShrineMap location={shrineLocation}/>
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
