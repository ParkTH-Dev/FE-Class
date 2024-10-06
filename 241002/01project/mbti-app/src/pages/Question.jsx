import { motion } from "framer-motion";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../assets/questiondata";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 30px;
  padding: 8px 16px;
  margin-bottom: 10px;
  background-color: crimson;
  border-radius: 8px;
  @media screen and (max-width: 780px) {
    font-size: 24px;
    margin: 20px;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  button {
    width: 400px;
    height: 200px;
    font-size: 26px;
  }
  @media screen and (max-width: 780px) {
    flex-direction: column;
    button {
      width: 300px;
      height: 150px;
      font-size: 20px;
    }
  }
  @media screen and (max-width: 360px) {
    flex-direction: column;
    button {
      width: 200px;
      height: 100px;
      font-size: 20px;
    }
  }
`;

const Question = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  // const handleClickBtnA = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObj = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObj);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObj = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObj);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObj = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObj);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObj = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObj);
  //   }
  //   setQuestionNum(questionNum + 1);
  // };
  // const handleClickBtnB = (num, type) => {
  //   if (type === "EI") {
  //     const addScore = totalScore[0].score + num;
  //     const newObj = { id: "EI", score: addScore };
  //     totalScore.splice(0, 1, newObj);
  //   } else if (type === "SN") {
  //     const addScore = totalScore[1].score + num;
  //     const newObj = { id: "SN", score: addScore };
  //     totalScore.splice(1, 1, newObj);
  //   } else if (type === "TF") {
  //     const addScore = totalScore[2].score + num;
  //     const newObj = { id: "TF", score: addScore };
  //     totalScore.splice(2, 1, newObj);
  //   } else {
  //     const addScore = totalScore[3].score + num;
  //     const newObj = { id: "JP", score: addScore };
  //     totalScore.splice(3, 1, newObj);
  //   }
  //   setQuestionNum(questionNum + 1);
  // };

  const handleClickBtn = (num, type) => {
    const newScore = totalScore.map((item) =>
      item.id === type ? { id: item.id, score: item.score + num } : item
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      console.log(mbti);
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  console.log(totalScore);
  return (
    <>
      <ProgressBar
        striped
        variant="danger"
        now={(questionNum / QuestionData.length) * 100}
      />
      <Wrapper>
        <Title>{QuestionData[questionNum].title}</Title>
        <ButtonGroup>
          <Button
            onClick={() =>
              // handleClickButtonA(1, QuestionData[questionNum].type)
              handleClickBtn(1, QuestionData[questionNum].type)
            }
          >
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            onClick={() =>
              // handleClickButtonB(0, QuestionData[questionNum].type)
              handleClickBtn(0, QuestionData[questionNum].type)
            }
          >
            {" "}
            {QuestionData[questionNum].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </>
  );
};

export default Question;
