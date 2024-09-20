import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import { DiaryDispatchContext } from "../App";

const Wrapper = styled.div``;

const Edit = () => {
  const { onDelete } = useContext(DiaryDispatchContext);

  const { id } = useParams();
  const data = useDiary(id);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    if (
      window.confirm("일기를 정말 삭제하시겠습니까? 다시 복구되지 않습니다.")
    ) {
      onDelete(id);
      navigate("/");
    }
  };

  if (!data) {
    return (
      <Wrapper>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={"일기 수정 페이지"}
          rightChild={<Button />}
        />
        <div>일기를 불러오고 있습니다.</div>;
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
      </Wrapper>
    );
  }
};

export default Edit;
