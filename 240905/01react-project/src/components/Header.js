import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    color: #1f93ff;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </Wrapper>
  );
};

export default React.memo(Header);
