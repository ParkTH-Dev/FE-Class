import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ToDoListContext } from "../\bcontexts/ToDoContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TodoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);
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
