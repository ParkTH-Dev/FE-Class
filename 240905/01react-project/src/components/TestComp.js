import React, { useReducer } from "react";
import styled from "styled-components";
const Wrapper = styled.div``;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
};

const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <Wrapper>
      <h3>Test Component</h3>
      <div>
        <b>{count}</b>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>0으로 최기화</button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </Wrapper>
  );
};

export default TestComp;
