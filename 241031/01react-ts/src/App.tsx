import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul,li{
    list-style: none;
  }
  body{
    font-family: "Source Sans 3", sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
};

export default App;
