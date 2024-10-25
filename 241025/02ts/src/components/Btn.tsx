import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #fff;
  transition: all 0.3s;
  &:hover {
    background-color: #757575;
    color: #fff;
    scale: 1.4;
    border: none;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  onClick: () => void;
}

const Btn = ({ onClick, label }: Props) => {
  return <Wrapper onClick={onClick}>{label}</Wrapper>;
};

export default Btn;
