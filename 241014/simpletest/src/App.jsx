import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button {
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 20px;
    border: none;
  }
`;

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const minuse = () => {
    dispatch({ type: "MINUSE" });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "TEAHWAM", pw: "1234" } });
  };
  return (
    <Wrapper>
      <h1>{count}</h1>
      <Btns>
        <button onClick={increase}>증가</button>
        <button onClick={minuse}>감소</button>
      </Btns>
      <h1>
        {id}
        {pw}
      </h1>
      <button onClick={login}>Login</button>
    </Wrapper>
  );
}

export default App;
