import styled from "styled-components";
import Circle from "./Circle";

const Wrapper = styled.div``;

const App = () => {
  return (
    <Wrapper>
      <Circle bgColor="teal" borderColor="red" />
      <Circle bgColor="tomato" text="안녕" />
    </Wrapper>
  );
};

export default App;
