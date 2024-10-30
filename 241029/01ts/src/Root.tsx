import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  ul,li{
    list-style: none;
  }
  body{
    font-family: "Orbit", sans-serif;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

function Root() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </ThemeProvider>
    </>
  );
}

export default Root;
