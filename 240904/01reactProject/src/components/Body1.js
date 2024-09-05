import styled from "styled-components";
import { React, useState } from "react";

export const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: yellowgreen;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  button {
    font-size: 20px;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      background-color: #111;
      color: #fff;
    }
  }
`;

const Body1 = () => {
  //   const handleOnClick = (e) => {
  //     console.log(e.target.name);
  //     e.target.name === "A버튼"
  //       ? (e.target.innerText = "C버튼")
  //       : (e.target.innerText = "D버튼");
  //   };
  //   const [count, setCount] = useState(0);
  //   const onIcrease = () => {
  //     setCount(count + 1);
  //   };
  //   const onMinu = () => {
  //     count > 0 ? setCount(count - 1) : setCount(0);
  //   };
  //   const [value, setValue] = useState("");
  //   const handlOnChange = (e) => {
  //     setValue(e.target.value);
  //   };
  //   const [date, setDate] = useState("");
  //   const handlOnChange = (e) => {
  //     setDate(e.target.value);
  //   };
  //   const [option, setOption] = useState("");
  //   const handlOnChange = (e) => {
  //     console.log("변경된 값", e.target.value);
  //     setOption(e.target.value);
  //   };
  const [text, setText] = useState("");
  const handlOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Wrapper>
      <textarea value={text} onChange={handlOnChange}></textarea>
      <h3>{text}</h3>
      {/* <select value={option} onChange={handlOnChange}>
        <option key={"1번"}>
          1번
        </option>
        <option key={"2번"}>
          2번
        </option>
        <option key={"3번"}>
          3번
        </option>
      </select> */}
      {/* <input type="date" value={date} onChange={handlOnChange} />
      <h2>{date}</h2> */}
      {/* <input type="text" onKeyUp={handlOnChange} />
      <h2>여기에 값이 입력되어야 함 :</h2>
      <h2>{value}</h2> */}
      {/* <button onClick={onMinu}>-</button>
      <h2>{count}</h2>
      <button onClick={onIcrease}>+</button> */}
      {/* <button name="A버튼" onClick={handleOnClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B버튼
      </button> */}
    </Wrapper>
  );
};

export default Body1;
