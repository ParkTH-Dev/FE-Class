import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinsHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
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
  const { coinId } = useParams();
  // console.log(coinId);
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinsHistory(coinId),
    // refetchInterval: 10000,/
  });

  if (isLoading) {
    return <Wrapper>Loading Chart...</Wrapper>;
  }
  return (
    <Wrapper>
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
            mode: "dark",
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
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: ["blue"],
              stops: [0, 100],
            },
          },
          colors: ["yellow"],
          tooltip: {
            y: {
              formatter: (value) => `$ ${value.toFixed(3)}`,
            },
          },
        }}
      />
    </Wrapper>
  );
};
export default Chart;
