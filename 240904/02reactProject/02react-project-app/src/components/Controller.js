import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;

  align-items: center;
`;
const Controller = ({ handleSetCount }) => {
  return (
    <Wrapper>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </Wrapper>
  );
};

export default Controller;
