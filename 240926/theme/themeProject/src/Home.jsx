import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
`;

const ItemBox = styled.div`
  font-size: 22px;
  border: 2px solid ${({ theme }) => theme.accentColor};
  border-radius: 8px;
  padding: 10px 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      <ItemBox>Home</ItemBox>
    </Wrapper>
  );
};

export default Home;
