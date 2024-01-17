import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";

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
  background-color: #ebf8ff;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Home />
      </AppContainer>
    </>
  );
}

export default App;
