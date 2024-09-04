import styled from "styled-components";
import { Heading } from "../styles/sharedStyles";

const Text = styled.p`
  font-size: 1rem;
  margin-top: 8rem;
`;

const AboutContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  padding-top: 8rem;
  padding-bottom: 12rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeadingDescription = styled.p`
  font-size: 2rem;
`;

function About() {
  return (
    <AboutContainer>
      <AboutGrid>
        <div>
        <Heading>About Me</Heading>
        <HeadingDescription>Driven by curiosity and fueled by persistence</HeadingDescription>
        </div>
      <Text>
        My name is Hussain Ali, and I'm an aspiring software engineer based in
        Long Island, NY. I'm a creative problem-solver who's passionate about
        designing and building beautiful, user-friendly websites that deliver
        seamless experiences. Although I don't have any professional experience
        yet, I have worked on several exemplary side projects that demonstrate
        my skills and dedication to the craft. My goal is to continue honing my
        skills, working on exciting projects, and making a positive impact in
        the world of web development. When I'm not coding, you can find me
        indulging in my hobbies of reading, playing basketball, or traveling and
        creating experiences with friends and family.
      </Text>
      </AboutGrid>
    </AboutContainer>
  );
}

export default About;
