import React, { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const EditorWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  input {
    flex: 1;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 15px;
    &:focus {
      outline: none;
      border: 1px solid #1f93ff;
    }
  }
  button {
    width: 80px;
    border: none;
    border-radius: 5px;
    background-color: #1f93ff;
    color: #fff;
    cursor: pointer;
  }
`;

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    // keyCode 13번 = 엔터키 넘버
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <Wrapper>
      <h4>새로운 TODO 작성하기✏️</h4>
      <EditorWrap>
        <input
          value={content}
          ref={inputRef}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          type="text"
          placeholder="새로운 ToDo..."
        />
        <button onClick={onSubmit}>추가</button>
      </EditorWrap>
    </Wrapper>
  );
};

export default TodoEditor;
