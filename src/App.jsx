import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
`;

const AppContainer = styled.div`
  background-color: black;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
