import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

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
  }
`;

const Desc = styled.div`
  margin: 10px 0;
  font-size: 20px;
  padding: 8px 14px;
  border-radius: 8px;
  background-color: crimson;
`;

const Home = () => {
  const constraintsRef = useRef(null);
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents ref={constraintsRef}>
        <Title>나에게 맞는 주인님은?</Title>
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
            src="/cat/ggompang.jpeg"
          />
        </LogoImg>
        <Desc>MBTI 테스트로 나랑 잘 맞는 고양이 찾기 🐈</Desc>
        <Link to="question">
          <Button>테스트 시작하기</Button>
        </Link>
      </Contents>
    </Wrapper>
  );
};

export default Home;
