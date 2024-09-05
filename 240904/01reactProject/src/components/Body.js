import React from "react";
import "../components/Body.css";
import styled from "styled-components";

export const Wrapper = styled.div`
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

const Body = ({ children }) => {
  console.log(children);
  return <Wrapper>{children}</Wrapper>;
};
Body.defaultProps = {
  favorList: [],
};
export default Body;
