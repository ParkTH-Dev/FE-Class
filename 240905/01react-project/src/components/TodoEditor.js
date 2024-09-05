import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const EditorWrap = styled.div``;

const TodoEditor = () => {
  return (
    <Wrapper>
      <h4>새로운 TODO 작성하기✏️</h4>
      <EditorWrap>
        <input type="text" placeholder="새로운 ToDo..." />
        <button>추가</button>
      </EditorWrap>
    </Wrapper>
  );
};

export default TodoEditor;
