import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/ResultData";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
`;
const Header = styled.div`
  font-size: 40px;
`;
const Contents = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 20px 0 10px;
`;
const LogoImg = styled(motion.div)`
  img {
    border: 4px solid #fff;
    width: 350px;
    height: 350px;
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 22px;
`;

const Result = () => {
  const [resultData, setResultData] = useState({});
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const navigate = useNavigate();
  const constraintsRef = useRef(null);
  const handleClickBtn = () => {
    navigate("/");
  };
  useEffect(() => {
    const result = ResultData.find((obj) => obj.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents ref={constraintsRef}>
        <Title>{resultData.best}</Title>
        <LogoImg
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            drag
            dragConstraints={constraintsRef}
            className="rounded-circle"
            src={resultData.image}
          />
        </LogoImg>
        <Desc>예비집사님과 찰떡인 고양이는? '{resultData.name}'입니다! 😻</Desc>
        <Desc>{resultData.desc} 😻</Desc>
        <Button onClick={handleClickBtn}>테스트 다시 시작하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;
