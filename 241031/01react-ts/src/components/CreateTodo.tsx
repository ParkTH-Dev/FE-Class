import { useForm } from "react-hook-form";

import { toDoState } from "../atom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface IForm {
  toDo: string;
}
function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TODO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please Wirte a ToDo!",
        })}
        type="text"
        placeholder="Write a ToDo!"
      />
      <input type="submit" value={"ADD"} />
    </Form>
  );
}
export default CreateToDo;
