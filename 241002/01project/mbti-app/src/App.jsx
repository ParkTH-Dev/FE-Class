import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:"SimKyungha" ;
  src: url("/fonts/SimKyungha.ttf") format("truetype")
}
${reset}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li,ul{
  list-style: none;
}
a{
  color: inherit;
  text-decoration: none;
}
body{
  font-family: "SimKyungha";
  background: url("https://images.pexels.com/photos/15511199/pexels-photo-15511199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const Wrapper = styled.div``;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Wrapper></Wrapper>
    </>
  );
}

export default App;
