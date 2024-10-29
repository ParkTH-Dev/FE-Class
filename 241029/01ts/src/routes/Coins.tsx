import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.accentColor};
`;

const CoinList = styled.ul`
  width: 500px;
`;

const Coin = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 60px;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  font-size: 20px;
  margin-bottom: 12px;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    padding: 30px 50px;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Loader = styled.div`
  color: ${({ theme }) => theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 34px;
`;

const CoinRank = styled.div`
  position: absolute;
  left: 20px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
      );
      const json = await response.json();
      setCoins(json.slice(0, 101));
      setIsLoading(false);
    })();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((item) => (
            <Link key={item.id} to={`/${item.id}`} state={item.name}>
              <Coin>
                <CoinRank>{item.rank}</CoinRank>
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${item.symbol.toLocaleLowerCase()}`}
                />
                {item.name} ({item.symbol})
              </Coin>
            </Link>
          ))}
        </CoinList>
      )}
    </Wrapper>
  );
};

export default Coins;
