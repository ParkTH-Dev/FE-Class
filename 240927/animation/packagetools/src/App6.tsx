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
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 50vw;
  & > div:nth-child(1),
  div:nth-child(4) {
    grid-column: span 2;
  }
`;
const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxArr = ["1", "2", "3", "4"];

function App6() {
  // const [clicked, setClicked] = useState(false);
  const [id, setId] = useState(null);
  // const onClick = () => {
  //   setClicked((prev) => !prev);
  // };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Grid>
          {BoxArr.map((i) => (
            <Box onClick={() => setId(i)} key={i} layoutId={i} />
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Box layoutId={id} style={{ width: 400, height: 300 }} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App6;
