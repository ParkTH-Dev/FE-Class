import React, { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("even component unmount");
    };
  });
  return <div>현재 카운트는 짝수입니다!</div>;
};

export default Even;
