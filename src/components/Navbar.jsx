import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  background-color: #fff;
  color: black;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
`;

const NavLink = styled.li`
  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ffeb3b;
    }
  }
`;

const IconLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: black;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ffeb3b;
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
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
        <IconLink
          href="https://linkedin.com/in/yourusername"
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
