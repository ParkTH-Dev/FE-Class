import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";

const Wrapper = styled.div``;

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/");
  };

  useEffect(() => {
    setPageTitle("New Diary");
  }, []);
  return (
    <Wrapper>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
        rightChild={<Button text={"🏠 Home"} onClick={goHome} />}
      />
      <Editor onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default New;
