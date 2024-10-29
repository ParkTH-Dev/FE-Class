import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { theme } from "../theme";
import Chart from "./Chart";
import Price from "./Price";

const Wrapper = styled.main`
  width: 100%;
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
const Loader = styled.span``;

const OverView = styled.div`
  color: ${({ theme }) => theme.bgColor};
  width: 600px;
`;
const OverViewItem = styled.div`
  background: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 0;
  span:first-child {
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.accentColor};
  }
  span:last-child {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.div`
  width: 600px;
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textColor};
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

interface IRouterParams {
  coinId: string;
}

interface ILocationState {
  state: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();
  const { state } = useLocation() as ILocationState;
  const { coinId } = useParams<IRouterParams | any>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>{state ? state : loading ? "loading..." : info?.name}</Title>
      </Header>
      {loading ? (
        <Loader>loading...</Loader>
      ) : (
        <>
          <OverView>
            <OverViewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Symbol:</span>
              <span>{info?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Open Source :</span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverViewItem>
          </OverView>
          <Description>
            🐸 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            accusamus quas laudantium perspiciatis dicta reiciendis ad dolor
            modi, nam omnis deleniti assumenda debitis hic, et facere eius.
            Adipisci, ad minima. Nemo obcaecati magni dolorum, debitis ipsam
            voluptatum numquam qui laborum voluptatibus! Doloribus accusantium
            adipisci vero velit ex ipsam. Ut id nulla eum dicta alias voluptates
            cum saepe et ipsam repellat!
          </Description>
          <OverView>
            <OverViewItem>
              <span>Total Supply :</span>
              <span>{priceInfo?.total_supply}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Max Supply :</span>
              <span>{priceInfo?.max_supply}</span>
            </OverViewItem>
          </OverView>
        </>
      )}
    </Wrapper>
  );
};

export default Coin;
