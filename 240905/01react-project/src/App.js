import styled from "styled-components";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "JavaScript 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "여행가기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  return (
    <Wrapper>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </Wrapper>
  );
}

export default App;
