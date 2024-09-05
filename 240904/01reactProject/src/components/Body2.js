import styled from "styled-components";
import { React, useState } from "react";

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
    text-align: center;
    font-size: 14px;
    border: none;
    padding: 3px 20px;
    border-radius: 10px;
    transition: all 0.3s;
    &:hover {
      background-color: #111;
      color: #fff;
    }
  }
  select {
    font-size: 14px;
    border: none;
    padding: 3px 70px;
    border-radius: 10px;
  }
`;

const Body2 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };
  return (
    <Wrapper>
      <div>
        <input
          value={name}
          type="text"
          placeholder="이름"
          onChange={onChangeName}
        />
      </div>
      <div>
        <select onChange={onChangeGender} value={gender}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" onChange={onChangeBirth} value={birth} />
      </div>
      <div>
        <textarea onChange={onChangeBio} value={bio}></textarea>
      </div>
    </Wrapper>
  );
};

export default Body2;
