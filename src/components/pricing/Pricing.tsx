import styled from "styled-components";

const Pricing: React.FC = () => {
  return (
    <>
      <PricingContainer>
        <PricingP>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </PricingP>
      </PricingContainer>
    </>
  );
};

export default Pricing;

const PricingContainer = styled.div`
  width: 100%;
  min-height: 88px;
  border-radius: 10px;
  background: #5e54a4;
  box-shadow: 0 8px 0 0 rgba(0, 0, 0, 0.15);
  padding: 18px 66px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    min-height: 60px;
  }
`;

const PricingP = styled.p`
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.268px;

  span {
    font-weight: 700;
  }
`;
