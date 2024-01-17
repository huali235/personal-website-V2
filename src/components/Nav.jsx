import styled from "styled-components";

const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 0.75rem;
  padding-right: 1.25rem;
  font-size: 0.875rem;
  list-style-type: none;
`;

function Nav() {
  return (
    <div>
      <NavContainer>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </NavContainer>
    </div>
  );
}

export default Nav;
