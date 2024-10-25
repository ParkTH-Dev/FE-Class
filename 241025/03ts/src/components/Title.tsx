import styled from "styled-components";

const Wrapper = styled.div``;
const Label = styled.h1``;

interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Title;
