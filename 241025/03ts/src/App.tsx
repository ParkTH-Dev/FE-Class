import styled from "styled-components";
import DataView from "./components/DataView";
import { useState } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eee;
  gap: 16px;
`;

const mockData = ["typescript 복습", "react예습", "nextjs 공부"];

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState(mockData);
  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };
  const onAdd = () => {
    if (toDo === "") return;
    setToDoList([...toDoList, toDo]);
    setToDo("");
  };
  return (
    <Wrapper>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={toDo} onChange={setToDo} />
      <Button label={"추가"} color="#304ffe" onClick={onAdd} />
    </Wrapper>
  );
}

export default App;
