import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

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

const TodoList = ({ todo }) => {
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
  return (
    <Wrapper>
      <h4>TodoList 🐸</h4>
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
