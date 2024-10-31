import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinsHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

const Wrapper = styled.div`
  margin: 20px 0;
`;

interface CoinHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface Example {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useParams();
  // console.log(coinId);
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinsHistory(coinId),
    // refetchInterval: 1000,
  });

  const chartData = Array.isArray(data) && data.length > 0 ? data : [];

  return (
    <Wrapper>
      {isLoading ? (
        "Loading Chart..."
      ) : chartData.length > 0 ? (
        <ReactApexChart
          width={700}
          type="line"
          series={[
            {
              name: "Price",
              data: Array.isArray(data) ? data.map((price) => price.close) : [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            chart: {
              background: "linear-gradient(to top, #5ee7fd 0%, #b490ca 100%)",
              toolbar: {
                show: false,
              },
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                },
                formatter: (value) => `${value.toFixed(2)}`,
              },
            },
            colors: ["yellow"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
            tooltip: {},
          }}
        />
      ) : (
        <Wrapper>No data</Wrapper>
      )}
    </Wrapper>
  );
};
export default Chart;
