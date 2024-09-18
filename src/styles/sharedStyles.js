import styled from "styled-components";

export const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  font-size: 1.2rem;
  color: #0284c7;
`;

// export const Container = styled.div`
// font-family: "Montserrat", sans-serif;
//   padding-right: 2.5rem;
//   padding-left: 2.5rem;
//   padding-top: 8rem;
//   padding-bottom: 12rem;
// `;

export const BaseContainer = styled.div`
  background-color: #fff;
  color: black;
  font-family: "Montserrat", sans-serif;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  padding-top: 8rem;
  padding-bottom: 5rem;
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconLinks = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 1rem;
`;

export const IconLink = styled.a`
  color: black;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #0284c7;
  }
`;
