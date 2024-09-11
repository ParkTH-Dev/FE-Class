import styled from "styled-components";

const Wrapper = styled.div``;
function App() {
  let count = 0;
  const plus = () => {
    count += 1;
    console.log(count);
  };
  const minus = () => {
    count -= 1;
    console.log(count);
  };
  return (
    <Wrapper>
      <div>
        <h2>{count}</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </Wrapper>
  );
}

export default App;
