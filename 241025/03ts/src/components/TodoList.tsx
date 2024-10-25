import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface Props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}
const TodoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Wrapper>
      {toDoList.map((todo, index) => (
        <TodoItem
          key={index}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo);
          }}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;
