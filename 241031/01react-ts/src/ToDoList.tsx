import styled from "styled-components";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;
interface Form {
  todo: string;
}

const toDoState = atom({
  key: "toDo",
  default: [],
});

const TodoList = () => {
  const [todo, setTodo] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<Form>();

  const handleValid = () => {
    setValue("todo", "");
  };

  return (
    <Container>
      <Title>TODO LIST</Title>
      <Form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", {
            required: "Please Write a todo", // 필수 필드 에러 메시지
          })}
          type="text"
          placeholder="Write a todo"
        />
        <input type="submit" value={"ADD"} />
      </Form>
      <ul></ul>
    </Container>
  );
};
export default TodoList;
