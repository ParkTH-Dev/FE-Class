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
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 1);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
};

function App3() {
  const [showing, setShowing] = useState(false);

  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <AnimatePresence>
          {showing ? (
            <Box
              variants={boxVariants}
              initial="initial"
              animate="visible"
              exit="leaving"
            />
          ) : null}
        </AnimatePresence>
        <button onClick={toggleShowing} style={{ padding: 10 }}>
          Click
        </button>
      </Wrapper>
    </>
  );
}

export default App3;
