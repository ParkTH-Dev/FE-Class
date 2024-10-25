import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const Label = styled.div`
  font-size: 18px;
`;

interface Props {
  label: string;
  onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Button label={"삭제"} onClick={onDelete} />
    </Wrapper>
  );
};

export default TodoItem;
