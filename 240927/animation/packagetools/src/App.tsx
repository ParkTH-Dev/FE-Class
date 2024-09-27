import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  *{
    margin: 0;
padding: 0;
box-sizing: border-box;
  }
  body{
    font-family: "Source Sans 3", sans-serif;
  background: linear-gradient(135deg, #e09, #d0e);
  }

  ul,li{
    list-style: none;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  font-size: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;
const BiggerBox = styled.div`
  border: 1px solid #ddd;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariants = {
  hover: { scale: 1.5 },
  click: { borderRadius: "100px", scale: 1 },
  // drag: {
  //   opacity: 0.2,
  //   transition: {
  //     duration: 1,
  //   },
  // },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={2}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover="hover"
            whileTap="click"
            // whileDrag="drag"
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
}

export default App;
