import React from "react";
import "../components/Body.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: #999;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const Body = ({ name, location, favorList }) => {
  //   const num = 19;
  return (
    <Wrapper>
      <h1>Body</h1>
      <h1>
        {name}은 {location}에 살고있습니다.
      </h1>
      <h1>{favorList.length}</h1>

      {/* <h2>
        {num}는 {num % 2 === 0 ? "짝수" : "홀수"}입니다.
      </h2> */}
    </Wrapper>
  );
};
Body.defaultProps = {
  favorList: [],
};
export default Body;
