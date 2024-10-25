import { useState } from "react";
import styled from "styled-components";
import Btn from "./components/Btn";
import Label from "./components/Label";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

function App() {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Wrapper>
      <Title>Counter App</Title>
      <Contents>
        <Btn onClick={sub} label="Minus" />
        <Label data={counter} />
        <Btn onClick={add} label="Plus" />
      </Contents>
    </Wrapper>
  );
}

export default App;
