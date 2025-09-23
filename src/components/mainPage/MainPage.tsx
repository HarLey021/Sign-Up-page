import styled from "styled-components";
import Pricing from "../pricing/Pricing";
import InputBox from "../inputBox/InputBox";

const MainPage: React.FC = () => {
  return (
    <>
      <MainContainer>
        <TextWrapper>
          <Slogan>Learn to code by watching others</Slogan>
          <Description>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Description>
        </TextWrapper>
        <InputAndPricing>
          <Pricing />
          <InputBox />
        </InputAndPricing>
      </MainContainer>
    </>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 121px 165px;
  }
`;

const Slogan = styled.h1`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.292px;
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 1440px) {
    font-size: 50px;
    letter-spacing: -0.521px;
    text-align: left;
    margin-bottom: 11px;
  }
`;

const Description = styled.p`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 64px;

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 720px;
  @media (min-width: 1440px) {
    width: 525px;
    height: 560px;
    padding-top: 170px;
    margin-right: 45px;
  }
`;

const InputAndPricing = styled.div`
  width: 100%;
  max-width: 720px;
  @media (min-width: 1440px) {
    width: 540px;
    height: 560px;
  }
`;
