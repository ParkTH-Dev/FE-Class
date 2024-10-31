import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Header = styled.header`
  font-size: 20px;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;
const Btn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 400px;
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.bgColor};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
`;
const CoinList = styled.ul`
  width: 700px;
`;
const Coin = styled.li`
  width: 100%;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;

  align-items: center;
  cursor: pointer;
  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: inherit;
    transition: color 0.3s;
    margin: 0 4px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;
const Img = styled.img`
  width: 35px;
  height: auto;
  margin: 0 26px;
`;
export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
const Coins = () => {
  const [dark, setDark] = useRecoilState(isDarkAtom);
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <Container>
      <Helmet>
        <title>CoinList</title>
      </Helmet>
      <Header>
        <Title>Coin List</Title>
        <Btn onClick={() => setDark((e) => !e)}>toggle</Btn>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              Now Rank: {coin.rank}
              <Img
                src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
              />
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                {coin.name} Information ({coin.symbol}) &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};
export default Coins;
