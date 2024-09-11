import React, { useMemo, useState, useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

const Wrapper = styled.div`
  width: 100%;
  input {
    width: 100%;
    padding: 15px 0;
    border: none;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 20px;
    &:focus {
      outline: none;
      border-bottom: 1px solid #1f93ff;
    }
  }
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TodoList = () => {
  const { todo = [] } = useContext(TodoContext);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <Wrapper>
      <h4>TodoList 🐸</h4>
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>완료하지 못한 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <ListWrapper>
        {/* {todo.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))} */}
        {getSearchResult().map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
};

export default TodoList;
