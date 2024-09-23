import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import { DiaryDispatchContext } from "../App";
import Editor from "../components/Editor";
import { setPageTitle } from "../util";

const Wrapper = styled.div``;

const Edit = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

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
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };
  useEffect(() => {
    setPageTitle(`${id} Diary Edit`);
  }, []);

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
        <Editor initData={data} onSubmit={onSubmit} />
      </Wrapper>
    );
  }
};

export default Edit;
