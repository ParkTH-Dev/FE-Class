import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Btns = styled.div`
  position: absolute;
  bottom: 300px;
  display: flex;
  gap: 20px;
`;
const Button = styled(motion.button)`
  font-size: 24px;
  border: none;
  padding: 10px 20px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
`;

const boxVariants = {
  initial: (prev: boolean) => ({
    opacity: 0,
    x: prev ? -500 : 500,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exits: (prev: boolean) => ({
    opacity: 0,
    x: prev ? 500 : -500,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App4() {
  const [visible, setVisible] = useState(1);
  const [prev, setPrev] = useState(false);
  const prevPlease = () => {
    setPrev(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  };
  const nextPlease = () => {
    setPrev(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AnimatePresence mode="wait" custom={prev}>
          {boxArray.map((i) =>
            i === visible ? (
              <Box
                drag
                custom={prev}
                variants={boxVariants}
                initial="initial"
                animate="visible"
                exit="exits"
                key={visible}
              >
                {visible}
              </Box>
            ) : null
          )}
        </AnimatePresence>
        <Btns>
          <Button onClick={prevPlease}>prev</Button>
          <Button onClick={nextPlease}>next</Button>
        </Btns>
      </Wrapper>
    </>
  );
}

export default App4;
