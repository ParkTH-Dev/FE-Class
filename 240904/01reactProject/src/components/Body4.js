import styled from "styled-components";
import { React, useState } from "react";
import Viewer from "./Viewer";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: yellowgreen;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 15px;
  & > div {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section {
    display: flex;
    gap: 10px;
    button {
      text-align: center;
      font-size: 20px;
      border: none;
      padding: 7px 35px;
      border-radius: 10px;
      transition: all 0.3s;
      &:hover {
        background-color: #111;
        color: #fff;
      }
    }
  }
`;

// const Viewer = ({ num }) => {
//   return <div>{num % 2 === 0 ? "짝수" : "홀수"}</div>;
// };

const Body4 = () => {
  const [num, setNum] = useState(0);
  const onDecrease = () => {
    setNum(num - 1);
  };
  const onIncrease = () => {
    setNum(num + 1);
  };
  return (
    <Wrapper>
      <div>
        <h1>{num}</h1>
        <Viewer num={num} />
      </div>
      <section>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </section>
    </Wrapper>
  );
};

export default Body4;
