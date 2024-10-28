import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
`;

// const Input = styled.input.attrs({ required: true })``;

// const Box = styled.div`
//   background-color: ${({ bgColor }) => bgColor};
//   width: 200px;
//   height: 200px;
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Btn = styled.button`
//   background-color: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
// `;

const rotationAnimation = keyframes`
from{
  transform: rotate(0deg);
  border-radius: 40px;
}to{
  transform: rotate(360deg);
  border-radius: 100px;
}
`;
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: crimson;
  animation: ${rotationAnimation} 1s linear infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
  }
  &:hover span {
    font-size: 100px;
  }
  &:active span {
    opacity: 0;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World</Title>
      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}
      {/* <Btn>Login</Btn>
      <Btn as="a" href="#">
        LogOut
      </Btn> */}
      {/* <Input required="true"></Input> */}
      <Box>
        <Emoji>🐸</Emoji>
      </Box>
      <Emoji>🐈</Emoji>
    </Wrapper>
  );
}

export default App;
