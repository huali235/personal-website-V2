import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IconLink, IconLinks } from "../styles/sharedStyles";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  background-color: #fff;
  color: black;

  @media (max-width: 425px) {
    margin-left: -12rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  align-items: center;
`;

const NavLink = styled.li`
  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink>
          <a href="#about">About</a>
        </NavLink>
        <NavLink>
          <a href="#skills">Skills</a>
        </NavLink>
        <NavLink>
          <a href="#projects">Projects</a>
        </NavLink>
      </NavLinks>
      <IconLinks>
        <IconLink
          href="https://github.com/huali235"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/huali235/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconLink>
      </IconLinks>
    </NavbarContainer>
  );
};

export default Navbar;
