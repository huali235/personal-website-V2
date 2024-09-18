import styled from "styled-components";
import { BaseContainer, Heading } from "../styles/sharedStyles";

const ContactContainer = styled(BaseContainer)`
  background-color: #e0f2fe;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
const ContactBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadingContact = styled(Heading)`
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
`;

const Email = styled.a`
  text-decoration: none;
  color: inherit;
  border-left: 2px solid #0284c7;
  background: linear-gradient(to left, #e0f2fe 50%, #0284c7 50%) right;
  background-size: 200%;
  transition: 0.3s ease-in-out;

  &:hover {
    background-position: left;
    color: #e0f2fe;
  }
`;

const LinkedIn = styled.a`
  text-decoration: none;
  color: #0284c7;
`;

function Contact() {
  return (
    <ContactContainer>
      <HeadingContact>Contact Me!</HeadingContact>
      <ContactBody>
        <p>I'm always interested in working on cool, exciting projects.</p>
        <p>
          Email me at{" "}
          <Email href="mailto:huali235@gmail.com">huali235@gmail.com</Email> or
          drop me a message on{" "}
          <LinkedIn href="https://www.linkedin.com/in/hussain-ali-6ab559298/">
            LinkedIn
          </LinkedIn>
        </p>
      </ContactBody>
    </ContactContainer>
  );
}

export default Contact;
