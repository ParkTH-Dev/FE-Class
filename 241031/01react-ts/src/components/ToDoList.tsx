import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, categoryState, Categories } from "../atom";
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
  width: 400px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  text-align: center;
`;

const ToDoList = () => {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategoey] = useRecoilState(categoryState);
  const onInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoey(e.currentTarget.value as any);
  };
  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </Container>
  );
};
export default ToDoList;
