import styled from "styled-components";
import { React, useRef, useState } from "react";

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: yellowgreen;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 15px;
  input {
    font-size: 14px;
    border: none;
    padding: 7px 35px;
    border-radius: 10px;
  }
  button {
    text-align: center;
    font-size: 14px;
    border: none;
    padding: 7px 35px;
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      background-color: #111;
      color: #fff;
    }
  }
`;

const Body5 = () => {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) textRef.current.focus();
    else {
      alert(text);
      textRef.current.value = "";
    }
  };

  return (
    <Wrapper>
      <input ref={textRef} value={text} type="text" onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </Wrapper>
  );
};

export default Body5;
