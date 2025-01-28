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

const answerCombinationToResult = {
  "1,3,8": 1,
  "1,3,9": 9,
  "1,3,10": 3,
  "1,3,11": 7,
  "1,4,8": 15,
  "1,4,9": 13,
  "1,4,10": 4,
  "1,4,11": 8,
  "2,3,8": 2,
  "2,3,9": 20,
  "2,3,10": 14,
  "2,3,11": 17,
  "2,4,8": 19,
  "2,4,9": 21,
  "2,4,10": 18,
  "2,4,11": 16,
};

const IGNORED_ANSWER_IDS = [5, 6, 7];

const ResultPage = () => {
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useLanguage();
  const location = useLocation();
  const { selectedAnswers } = location.state || {};

  const calculateResultId = (answers) => {
    if (!answers || answers.length === 0) return 1;
    const filteredAnswers = answers.filter((id) => !IGNORED_ANSWER_IDS.includes(id));
    const key = [...filteredAnswers].sort((a, b) => a - b).join(",");
    return answerCombinationToResult[key] || 1;
  };

  useEffect(() => {
    const fetchResultData = async () => {
      try {
        const resultId = calculateResultId(selectedAnswers);

        const { data, error } = await supabase.from("results").select("*").eq("id", resultId).single();

        if (error) throw error;
        setResultData(data);
      } catch (error) {
        setError("결과 데이터를 가져오는 데 실패했습니다.");
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchResultData();
  }, [selectedAnswers]);

  if (isLoading) {
    return (
      <LoadingOverlay>
        <LoadingImage src={new URL("../assets/loading.png", import.meta.url).href} alt="Loading" />
        <LoadingText>성향과 상황에 맞는 신사를 추천해주고 있어요</LoadingText>
      </LoadingOverlay>
    );
  }

  if (error) return <div>{error}</div>;

  const shrineImageUrl = resultData.shrine_image_name
    ? new URL(`../assets/Shrine/${resultData.shrine_image_name}.png`, import.meta.url).href
    : null;

  const kamiImageUrl = resultData.kami_image_name
    ? new URL(`../assets/Kami/${resultData.kami_image_name}.png`, import.meta.url).href
    : null;

  console.log("shrineImageUrl:", shrineImageUrl);

  const langSuffix = language === "한국어" ? "ko" : language === "English" ? "en" : "ja";

  const hashtags = resultData[`hashtag_${langSuffix}`]?.split(",") || [];
  const description = resultData[`description_${langSuffix}`];
  const resultName = resultData[`result_name_${langSuffix}`];
  const kamiName = resultData[`kami_name_${langSuffix}`];

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

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LoadingImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

const LoadingText = styled.div`
  color: white;
  font-size: 18px;
  font-family: "Pretendard", sans-serif;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    display: inline-block;
    animation: dotAnimation 1.5s infinite;
    margin-left: 4px;
  }

  @keyframes dotAnimation {
    0% {
      content: "";
    }
    25% {
      content: ".";
    }
    50% {
      content: ". .";
    }
    75% {
      content: ". . .";
    }
    100% {
      content: "";
    }
  }
`;
