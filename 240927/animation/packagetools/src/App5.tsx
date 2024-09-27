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
    background: linear-gradient(135deg, #ffa1de, #ff7f7f);
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
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #00a5ff;
  border-radius: 50%;
  box-shadow: 5px 10px 13px rgba(0, 0, 0, 0.3);
`;

function App5() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper onClick={toggleClicked}>
        {/* <Box
          style={{
            justifyContent: clicked ? "center" : "flex-start",
            alignItems: clicked ? "center" : "start",
          }}
        >
          <Circle />
        </Box> */}
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
      </Wrapper>
    </>
  );
}

export default App5;
