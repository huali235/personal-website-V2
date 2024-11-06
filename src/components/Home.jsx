import styled, { keyframes } from "styled-components";
import { svgDownArrow } from "../svgImages";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { BaseContainer } from "../styles/sharedStyles";
import Navbar from "./Navbar";

// const Header = styled.div`
//   padding-left: 2.5rem;
//   padding-top: 1.25rem;
//   padding-bottom: 1.25rem;
//   display: flex;
//   justify-content: space-between;
// `;

const BaseContainerHome = styled(BaseContainer)`
  padding-top: 0;
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
  font-size: 1.5rem;
  padding-left: 2.5rem;
  max-width: 100%;

  @media (max-width: 768px) {
    padding-left: 8rem;
    font-size: 1.25rem;
  }

  @media (max-width: 425px) {
    padding-left: 10rem;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  padding-top: 2rem;
  margin-left: -10rem;

  @media (max-width: 425px) {
  }
`;

const fadeInZoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled component for the zoom-in text animation
const ZoomInText = styled.span`
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.5rem;
  color: #475569;
  font-size: 10rem;
  display: inline-block;
  margin-bottom: 3rem;
  opacity: 0; /* Start hidden */
  animation: ${fadeInZoomIn} 2s ease-out forwards; /* 2s animation duration */

  @media (max-width: 768px) {
    font-size: 7rem;
  }

  @media (max-width: 425px) {
    font-size: 4rem;
    letter-spacing: -0.3rem;
  }
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
    background-repeat: no-repeat;
    background-position: center;
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

const ParentContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align the navbar to the right */
  width: 100%;
  background-color: #fff;
  padding: 0;
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
    <BaseContainerHome>
      <Content>
        <ParentContainer>
          <Navbar />
        </ParentContainer>
        <TextContainer className="text">
          <p>Hi! I'm</p>
          <ZoomInText>Hussain Ali</ZoomInText>
          <p>
            An aspiring software engineer who loves creating things on the web.
          </p>
        </TextContainer>
      </Content>
      <DownArrow>
        <div className="arrow bounce"></div>
      </DownArrow>
    </BaseContainerHome>
  );
}

export default Home;
