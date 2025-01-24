import { useState } from "react";
import styled from "styled-components";
import home_img from "../assets/home_main.png";
import home_pattern from "../assets/home_pattern.png";
import Button from "../components/common/Button";
import Dropdown from "../components/Dropdown";

function HomePage() {
  const [language, setLanguage] = useState("한국어");

  const texts = {
    한국어: {
      title: "너의 신사는。",
      button: "나의 신사 찾기",
    },
    English: {
      title: "Spirited, Away。",
      button: "Finding My Shrine",
    },
    日本語: {
      title: "君の神社は。",
      button: "私の神社を探す",
    },
  };

  return (
    <Wrapper>
      <Title>{texts[language].title}</Title>
      <DropdownWrapper>
        <Dropdown language={language} setLanguage={setLanguage} />
      </DropdownWrapper>
      <HomeImg src={home_img} />
      <CustomButton>{texts[language].button}</CustomButton>
      <HomePattern src={home_pattern} />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  position: absolute;
  top: 200px;
  left: 51%;
  transform: translateX(-50%);
  z-index: 100;
  font-size: 36px;
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

const CustomButton = styled(Button)`
  height: 80px;
  font-size: 28px;
  width: 100%;
`;

const HomePattern = styled.img`
  width: calc(100% + 40px);
  margin: auto -20px -20px;
`;
