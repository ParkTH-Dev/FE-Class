import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState } from "../atom";
import CreateToDo from "./CreateTodo";
import Todo from "./Todo";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;
const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategoey] = useRecoilState(categoryState);
  const onInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoey(e.currentTarget.value);
  };
  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onInput={onInput}>
        <option value="TODO">TODO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Container>
  );
};
export default ToDoList;
