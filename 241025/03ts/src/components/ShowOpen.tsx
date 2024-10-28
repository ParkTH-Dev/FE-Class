import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

interface Props {
  show: boolean;
  onClick: () => void;
}

const ShowOpen = ({ onClick, show }: Props) => {
  return (
    <Wrapper>
      <Button
        label={!show ? "할 일 추가" : "닫기"}
        color={!show ? "#304ffe" : "red"}
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default ShowOpen;
