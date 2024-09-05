import styled from "styled-components";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <TodoEditor />
      <div>TodoList</div>
    </Wrapper>
  );
}

export default App;
