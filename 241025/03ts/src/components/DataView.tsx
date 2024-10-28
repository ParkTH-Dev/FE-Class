import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

const Wrapper = styled.div`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 1.2em;
  color: #333;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #fff;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const DataView = () => {
  return (
    <Wrapper>
      <Title label="할 일 목록" />
      <TodoList />
    </Wrapper>
  );
};

export default DataView;
