import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  font-size: 20px;
`;

interface Icounter {
  data: number;
}

const Label = ({ data }: Icounter) => {
  return <Wrapper>{data}</Wrapper>;
};

export default Label;
