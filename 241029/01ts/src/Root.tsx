import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

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
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default Root;
