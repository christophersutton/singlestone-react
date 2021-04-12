import styled from "styled-components";

const Step = styled.div`
  width: 225px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-bottom:1rem;
  h5 {
    text-transform: uppercase;
    font-weight:600;
    font-size: .9rem;
    margin-bottom:1rem;
  }
  p {
      font-weight:300;
      font-size:.9rem;
      line-height:1.2rem;
  }
`;
const Number = styled.div`
  border-bottom: 4px solid #47e4c2;
  max-width: max-content;
  margin-bottom:1.1rem;
  h4 {
    font-weight: 400;
    font-size: 4rem;
    line-height: 1rem;
    margin: 2.5rem 0;
  }
  h4::before {
    content: "0";
  }
`;

const StepView = (props) => {
  const { step, title, body } = props.step;
  return (
    <Step>
      <Number>
        <h4>{step}</h4>
      </Number>
      <h5>{title}</h5>
      <p>{body}</p>
    </Step>
  );
};

export default StepView;
