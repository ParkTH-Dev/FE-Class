import styled from "styled-components";
import React, { useContext } from "react";
import { TodoContext } from "../App";

const Wrapper = styled.div`
  display: flex;
  align-items: ceter;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  .checkBox_col {
    width: 20px;
  }
  .title_col {
    flex: 1;
  }
  .date_col {
    font-size: 14px;
    color: gray;
  }
  .btn_col {
    button {
      font-size: 14px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;

const TodoItem = ({ id, isDone, content, createdDate }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <Wrapper>
      <div className="checkBox_col">
        <input type="checkBox" onChange={onChangeCheckBox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </Wrapper>
  );
};

export default React.memo(TodoItem);
