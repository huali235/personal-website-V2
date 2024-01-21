import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #eeeeee;
`;

const Title = styled.h1`
  font-family: "Gelasio", serif;
  font-size: 3rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
`;

function About() {
  return (
    <AboutContainer>
      <Title>About</Title>
    </AboutContainer>
  );
}

export default About;
