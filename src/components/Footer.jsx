import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { IconLink, IconLinks } from "../styles/sharedStyles";

const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  padding-bottom: 1.5rem;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <IconContainer>
        <IconLinks>
          <IconLink
            href="https://github.com/huali235"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/hussain-ali-6ab559298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
        </IconLinks>
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
