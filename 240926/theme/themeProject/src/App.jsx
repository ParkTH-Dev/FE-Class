import { ThemeProvider, styled, createGlobalStyle } from "styled-components";
import { darkTheme, ligfhtTheme } from "./theme";
import Home from "./Home";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Btn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const Wrapper = styled.div``;

function App() {
  const [isDark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((current) => !current);
  };
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : ligfhtTheme}>
        <GlobalStyle />
        <Wrapper>
          <Btn onClick={toggleDark}>{isDark ? "라이트모드" : "다크모드"}</Btn>
          <Home />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
