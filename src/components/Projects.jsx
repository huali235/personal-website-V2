import styled from "styled-components";
import { Heading, Container } from "../styles/sharedStyles";
import { BaseContainer } from "../styles/sharedStyles";

function Projects() {
  return (
    <BaseContainer>
      <Container>
        <Heading>Projects</Heading>
        <p>What I'm currently noodling on</p>
      </Container>
    </BaseContainer>
  );
}

export default Projects;
