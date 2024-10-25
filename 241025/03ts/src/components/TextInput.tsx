import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 8px 20px;
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default TextInput;
