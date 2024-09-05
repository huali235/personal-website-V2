import styled from "styled-components";
import { Heading, Container } from "../styles/sharedStyles";
import { BaseContainer } from "../styles/sharedStyles";

const SkillsContainer = styled(BaseContainer)`
  margin-top: -8rem;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 1rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ListTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

function Skills() {
  return (
    <SkillsContainer>
      <Container>
        <Heading>Skills</Heading>
        <p>A few technologies I've been working with recently</p>
        <ListContainer>
          <List>
            <ListTitle>Languages</ListTitle>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6)</li>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
          </List>

          <List>
            <ListTitle>Frameworks/Libraries</ListTitle>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </List>

          <List>
            <ListTitle>Tools</ListTitle>
            <ul>
              <li>Parcel</li>
              <li>Bash</li>
              <li>Git/Github</li>
              <li>Chrome Dev Tools</li>
            </ul>
          </List>
        </ListContainer>
      </Container>
    </SkillsContainer>
  );
}

export default Skills;
