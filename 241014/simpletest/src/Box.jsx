import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div``;
const Box = () => {
  let count = useSelector((state) => state.count);

  return <Wrapper>hi{count}</Wrapper>;
};

export default Box;
