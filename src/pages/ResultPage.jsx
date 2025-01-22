import Shrine from "../../src/assets/Shrine/Asakusa.png";
import styled from "styled-components";

const ResultPage = () => {
  return (
    <ResultLayout>
      <ShrineImg src={Shrine} alt="Shrine" />
      <DottedLine />
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

const DottedLine = styled.div`
  width: calc(100% + 40px);
  margin: 0 -20px;
  height: 2px;
  background-image: linear-gradient(to right, black 50%, transparent 50%);
  background-position: top;
  background-size: 15px 1.2px;
  background-repeat: repeat-x;
  margin-top: 35px;
`;
