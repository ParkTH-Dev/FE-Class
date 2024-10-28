import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  color: #fff;
  background-color: ${({ bgColor }) => bgColor};
  border: 3px solid ${({ borderColor }) => borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({ bgColor, borderColor, text = "뿡뿡" }: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("JS");
  return (
    <Wrapper bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text} {counter}
    </Wrapper>
  );
};

export default Circle;
