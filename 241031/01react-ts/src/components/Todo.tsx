import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atom";
const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;
const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

const ToDo = ({ id, text, category }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Container>
      <span>{text}</span>
      <ButtonGroup>
        {category !== Categories.TODO && (
          <Button name="TODO" onClick={onClick}>
            Todo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name="DOING" onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name="DONE" onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default ToDo;
