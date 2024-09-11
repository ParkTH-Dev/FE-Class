import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: #ccc;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  h1 {
    font-size: 40px;
    color: #fff;
  }
`;
const PostWritePage = () => {
  return (
    <Wrapper>
      <h1>PostWritePage</h1>
    </Wrapper>
  );
};

export default PostWritePage;
