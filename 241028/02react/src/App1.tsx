import { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  a{
    text-decoration: cadetblue;
    color: none;
  }
  li,ul{
    list-style: none;
  }

`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;

const Title = styled.h1`
  font-size: 40px;
`;
const Form = styled.form``;
const Input = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
`;

const App1 = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Hello World!</Title>
        <Form>
          <Input
            onChange={onChange}
            value={value}
            type="text"
            placeholder="UserName"
          />
        </Form>
      </Wrapper>
    </>
  );
};

export default App1;
