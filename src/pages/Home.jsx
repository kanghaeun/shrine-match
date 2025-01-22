import styled from "styled-components";
import home_img from "../assets/home_main.png";
import home_pattern from "../assets/home_pattern.png";
import Button from "../components/common/Button";

function HomePage() {
  return (
    <Wrapper>
      <HomeImg src={home_img} />
      <Button height="65px">신사 추천받기</Button>
      <HomePattern src={home_pattern} />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  width: 100%;
`;

const HomeImg = styled.img`
  width: 100%;
  margin-bottom: 50px;
`;

const HomePattern = styled.img`
  margin-top: 50px;
  width: calc(100% + 40px);
  margin: 0 -20px;
`;
