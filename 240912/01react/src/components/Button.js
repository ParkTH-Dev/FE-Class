import React from "react";
import styled from "styled-components";

const BtnItem = styled.button`
  font-family: "Nanum Pen Script", cursive;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 30px;
  cursor: pointer;
  background: ${({ type }) =>
    type === "positive" ? "#64c964" : type === "negative" ? "#fd565f" : "#ccc"};
  color: ${({ type }) =>
    type === "positive" || type === "negative" ? "#fff" : "#000"};
`;

const Button = ({ text, type, onClick }) => {
  return (
    <BtnItem type={type} onClick={onClick}>
      {text || "button"}
    </BtnItem>
  );
};

export default Button;
