import styled from "styled-components";
import home_img from "../assets/home_main.png";
import home_pattern from "../assets/home_pattern.png";
import Dropdown from "../components/home/Dropdown";
import HomeButton from "../components/home/HomeButton";
import { useLanguage } from "../hooks/useLanguage";

function HomePage() {
  const { language } = useLanguage();

  const texts = {
    한국어: {
      title: "너의 신사는。",
      button: "나의 신사 찾기",
    },
    English: {
      title: "Spirited, a Way。",
      button: "Finding My Shrine",
    },
    日本語: {
      title: "君の神社は。",
      button: "私の神社を探す",
    },
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>{texts[language].title}</Title>
        <DropdownWrapper>
          <Dropdown />
        </DropdownWrapper>
        <HomeImg src={home_img} />
        <HomeButton language={language} text={texts[language].button} />
      </ContentWrapper>
      <HomePattern src={home_pattern} />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h1`
  position: relative;
  height: 0px;
  top: 22%;
  left: 51%;
  transform: translateX(-48%);
  z-index: 10;
  font-size: 2rem;
  font-family: "NanumMyeongjo", serif;
  font-weight: 700;
  color: black;
  text-align: center;
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const HomeImg = styled.img`
  width: 100%;
  margin-bottom: 50px;
`;

const HomePattern = styled.img`
  width: calc(100% + 40px);
  margin: 60px -20px -20px -20px;
`;

const ContentWrapper = styled.div`
  margin-top: 10px;
  justify-content: center;
`;
