import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function App1() {
  const [count, setCount] = useState(0);
  const plus = () => {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    setCount((count) => count + 1);
    setCount((count) => count + 2);
    setCount((count) => count + 3);
    console.log(count);
  };
  const minus = () => {
    setCount(count - 1);

    console.log(count);
  };
  return (
    <Wrapper>
      <div>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </Wrapper>
  );
}

export default App1;
