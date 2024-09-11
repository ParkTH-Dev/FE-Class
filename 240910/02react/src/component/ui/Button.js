import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  font-size: 20px;
  padding: 10px 30px;
  border: 1px solid #111;
  border-radius: 8px;
  cursor: pointer;
  /* background-color: #fff; */
  /* color: #fff; */
`;

const Button = ({ title, onClick }) => {
  return (
    <>
      <Btn onClick={onClick}>{title || "btuton"}</Btn>
    </>
  );
};

export default Button;
