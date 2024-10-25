import styled from "styled-components";

interface WrapperProps {
  color: string;
}
const Wrapper = styled.button<WrapperProps>`
  border: none;
  background: ${({ color }) => color};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ color }) => color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  return (
    <Wrapper onClick={onClick} color={color}>
      {label}
    </Wrapper>
  );
};

export default Button;
