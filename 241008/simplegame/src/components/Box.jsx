import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const Result = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "drow") {
    result = result === "Win" ? "Lose" : "Win";
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Img src={item && item.img} alt={"title"} />
      <Result>{result}</Result>
    </Wrapper>
  );
};

export default Box;
