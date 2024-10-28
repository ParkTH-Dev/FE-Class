import styled from "styled-components";
import { useContext, useState } from "react";
import Title from "./Title";
import TextInput from "./TextInput";
import Button from "./Button";
import { ToDoListContext } from "../\bcontexts/ToDoContext";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */
`;
const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Contents = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
  z-index: 2;
`;
const InputWrap = styled.div`
  display: flex;
  gap: 20px;
`;

interface Props {
  onClose: () => void;
}

const TodoInput = ({ onClose }: Props) => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setToDo] = useState("");
  const onAddTodo = () => {
    if (toDo === "") return;
    onAdd(toDo);
    setToDo("");
    onClose();
  };
  return (
    <Wrapper>
      <Bg />
      <Contents>
        <Title label={"할 일 추가"} />
        <InputWrap>
          <TextInput value={toDo} onChange={setToDo} />
          <Button label={"추가"} color="#304ffe" onClick={onAddTodo} />
        </InputWrap>
      </Contents>
    </Wrapper>
  );
};

export default TodoInput;
