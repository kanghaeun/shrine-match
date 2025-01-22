import styled from "styled-components";
import home_img from "../assets/home_main.png";
import home_pattern from "../assets/home_pattern.png";
import Button from "../components/common/Button";
import Dropdown from "../components/Dropdown";

function HomePage() {
  return (
    <Wrapper>
      <DropdownWrapper>
        <Dropdown />
      </DropdownWrapper>
      <HomeImg src={home_img} />
      <Button>신사 추천받기</Button>
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

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

const HomeImg = styled.img`
  width: 100%;
  margin-bottom: 50px;
`;

const HomePattern = styled.img`
  width: calc(100% + 40px);
  margin: auto -20px -20px;
`;
