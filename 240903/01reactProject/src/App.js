import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function App() {
  // const name = "Taehwan";
  const BodyProps = {
    name: "TaeHwan",
    location: "서울시",
    // favorList: ["파스타", "피자", "삼겹살"],
  };
  return (
    <>
      <Wrapper>
        <Header />
        {/* <Body name={name} location={"서울시"} /> */}
        <Body {...BodyProps} />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
