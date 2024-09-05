import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body5 from "./components/Body5";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Body5></Body5>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
