import React from "react";

const Viewer = ({ num }) => {
  return <div>{num % 2 === 0 ? "짝수" : "홀수"}</div>;
};

export default Viewer;
