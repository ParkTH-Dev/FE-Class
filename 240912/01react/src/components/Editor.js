import React, { useCallback, useEffect, useState } from "react";
import { getFormattedDate, emotionList } from "../util";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import EmotionItem from "./EmotionItem";

const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
    font-size: 22px;
  }
`;
const TextArea = styled.textarea`
  font-family: "Nanum Pen Script", cursive;
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 20px;
  font-size: 20px;
  width: 93%;
  min-height: 200px;
  resize: none;
`;

const Input = styled.input`
  font-family: "Nanum Pen Script", cursive;
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
`;
const Buttongroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2%;
`;

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        <div>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>
        <EmotionGroup>
          {emotionList.map((item, i) => (
            <EmotionItem
              key={i}
              {...item}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </EmotionGroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <div>
          <TextArea
            placeholder="오늘은 어땠나요"
            value={state.content}
            onChange={handleChangeContent}
          ></TextArea>
        </div>
      </EditorSection>
      <EditorSection>
        <Buttongroup>
          <Button text="취소하기" onClick={handleGoBack} />
          <Button text="작성완료" type={"positive"} onClick={handleSubmit} />
        </Buttongroup>
      </EditorSection>
    </div>
  );
};

export default Editor;
