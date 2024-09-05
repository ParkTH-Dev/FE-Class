import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Viewer = ({ count }) => {
  return (
    <Wrapper>
      <div>현재 카운트 :</div>
      <h1>{count}</h1>
    </Wrapper>
  );
};

export default Viewer;
