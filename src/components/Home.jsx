import styled from "styled-components";
import Nav from "./Nav";
import { svgDownArrow } from "../svgImages";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const Header = styled.div`
  padding-left: 2.5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-family: "Gelasio", serif;
  font-size: 3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Gelasio", serif;
  font-size: 3rem;
`;

const TextContainer = styled.div`
  text-align: left;
  padding-top: 2rem;
  margin-left: -10rem;
`;

const Text = styled.p`
  padding-bottom: 4rem;
`;

const DownArrow = styled.div`
  .arrow {
    position: relative;
    bottom: -2rem;
    left: 50%;
    margin-left: -20px;
    margin-top: 10rem;
    width: 40px;
    height: 40px;

    /**
   * Dark Arrow Down
   */
    background-image: url(${svgDownArrow});
    background-size: contain;
  }

  .bounce {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

function Home() {
  useEffect(() => {
    ScrollReveal().reveal(".text", {
      reset: false,
      duration: 900,
      easing: "cubic-bezier(.694,0,.335,1)",
      scale: 1,
      viewFactor: 0.3,
    });
  }, []);
  return (
    <>
      <Header className="header">
        <Title>HA</Title>
        <Nav />
      </Header>
      <Content>
        <TextContainer className="text">
          <Text>Hi!</Text>
          <p>My name is Hussain.</p>
          <p>Software Engineer from New York.</p>
        </TextContainer>
      </Content>
      <DownArrow>
        <div className="arrow bounce"></div>
      </DownArrow>
    </>
  );
}

export default Home;
