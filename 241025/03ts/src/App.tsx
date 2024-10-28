import styled from "styled-components";
import DataView from "./components/DataView";
import InputWrap from "./components/InputWrap";
import { ToDoListContextProvider } from "./\bcontexts/ToDoContext";

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

// const mockData = ["typescript 복습", "react예습", "nextjs 공부"];

function App() {
  // const [toDo, setToDo] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [toDoList, setToDoList] = useState(mockData);
  // const onDelete = (todo: string) => {
  //   setToDoList(toDoList.filter((item) => item !== todo));
  // };
  // const onAdd = (toDo: string) => {
  //   if (toDo === "") return;
  //   setToDoList([...toDoList, toDo]);
  //   setIsOpen(false);
  //   setToDo("");
  // };

  return (
    <Wrapper>
      <ToDoListContextProvider>
        <DataView />
        <InputWrap />
      </ToDoListContextProvider>
    </Wrapper>
  );
}

export default App;
