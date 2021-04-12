import StepView from "./StepView";
import styled from "styled-components";

const Background = styled.div`
  text-align:center;
  padding:20px 0 40px 0;
  h2 {
      font-size:2rem;
      font-weight:400;
      letter-spacing: 2px;
      margin:20px 0;
  }
`;
const StepContainer = styled.section`
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 720px) {
    flex-direction:column;
    flex-wrap:none;
    align-items:center;
  }
`;

const HowItWorksView = (props) => {
  const { steps } = props;
  return (
    <Background>
      <div className="container">
        <h2>How It Works</h2>
        <StepContainer>
          {steps.map((step) => (
            <StepView step={step} key={step.step} />
          ))}
        </StepContainer>
      </div>
    </Background>
  );
};
export default HowItWorksView;
