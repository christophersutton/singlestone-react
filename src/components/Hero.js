import hero2x from "../assets/photo-couch_2x.jpg";
import hero from "../assets/photo-couch.jpg";
import styled from "styled-components";

const Button = styled.a`
  background-color: #47e4c2;
  color: #2f3237;
  padding: 15px 40px;
  // offset container padding with
  // negative margins to make
  // full width on mobile
  margin: 0px -12px;
  font-weight: 400;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  transition: 0.3s;
  display: block;
  :hover {
    background-color: #38ffd4;
    color: #222529;
  }
  :active {
    background-color: #2f3237;
    color: #47e4c2;
  }
  @media screen and (min-width: 500px) {
    display: inline;
    padding: 8px 40px;
    border-radius: 20px;
    margin: 0;
  }
`;

const Section = styled.section`
  // make font sizes fluid by using vw for
  // container and ems for Info text items
  font-size: 2.5vw;
  background-image: url(${hero});
  background-size: 130% auto;
  background-position: 40% 0;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: #f2f1ef;
  min-height: fit-content;
  padding-top: 20%;
  padding-bottom: 5%;

  @media screen and (min-width: 500px) {
    font-size: 1.8vw;
  }
  @media screen and (min-width: 767px) {
    background-image: url(${hero2x});
    background-size: 100% auto;
    font-size: 1.7vw;
  }
  @media screen and (min-width: 960px) {
    font-size: 1rem;
    padding-top: 25%;
    padding-bottom: 10%;
  }
`;

const Info = styled.div`
  max-width: 650px;
  h1 {
    font-size: 3em;
    line-height: 1.2em;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 400;
    font-size: 1.5em;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.3em;
    line-height: 1.2em;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 500px) {
    p {
      max-width: 75%;
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <div className="container">
        <Info>
          <h2>New Games & Accessories</h2>
          <h1>
            Monthly packages. <br />
            Excitement delivered daily.
          </h1>
          <p>
            What's the best way to shop for the latest video games and
            peripherals? How about never shopping at all? <br />
            You'll get new stuff on your doorstep—every month.
          </p>
          <Button href="/">Get Started</Button>
        </Info>
      </div>
    </Section>
  );
};
export default Hero;
