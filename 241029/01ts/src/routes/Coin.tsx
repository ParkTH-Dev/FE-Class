// import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Outlet,
  Link,
  useMatch,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";

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

const Overview = styled.div`
  color: ${({ theme }) => theme.bgColor};
  width: 600px;
`;
const OverviewItem = styled.div`
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
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 10px;
  line-height: 1.7;
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.accentColor};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  padding: 8px 0;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.accentColor};
  }
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

// interface InfoData {
//   id: string;
//   name: string;
//   symbol: string;
//   rank: number;
//   is_new: boolean;
//   is_active: boolean;
//   type: string;
// }

interface PriceData {
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

interface IsActive {
  isActive: boolean;
}

const Coin = () => {
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);

  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInterface>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinPrice(coinId),
    refetchInterval: 5000,
  });

  const loading = infoLoading || priceLoading;

  return (
    <Wrapper>
      <Helmet>
        <title>{infoData?.name}</title>
      </Helmet>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source : </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            🌈 Information of {infoData?.type} type : Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Eligendi soluta, nesciunt quasi
            iste molestiae consequuntur, sit possimus in voluptatem quam sed,
            ullam aperiam? Voluptatibus quasi recusandae beatae modi nam sequi!
            Sunt, dicta quasi harum magnam nemo ratione! Vel minus autem neque
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Wrapper>
  );
};

export default Coin;
