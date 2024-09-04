"use client";

import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CandlestickController,
  CandlestickElement,
  TimeScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface CandleStickProps {
  data: TCandleStick;
}

interface ICandleStickData {
  x: string | number | Date;
  o: number;
  h: number;
  l: number;
  c: number;
}

interface ICandleStickDataset {
  label: string;
  data: ICandleStickData[];
  type: "candlestick"; // type should always be "candlestick"
  borderColor: string;
  color: {
    up: string;
    down: string;
    unchanged: string;
  };
  barThickness: number;
}

type TCandleStickDataSets = ICandleStickDataset[];

const CandleStickChart: React.FC<CandleStickProps> = ({ data }) => {
  const [chartData, setChartData] = useState({
    datasets: [] as ICandleStickDataset[],
  });

  useEffect(() => {
    if (data) {
      const formattedData: ICandleStickData[] = data.map((item) => ({
        x: new Date(item.x),
        o: Number(item.open),
        h: Number(item.high),
        l: Number(item.low),
        c: Number(item.close),
      }));

      const datasets: ICandleStickDataset[] = [
        {
          label: "Candlestick Data",
          data: formattedData,
          type: "candlestick",
          borderColor: "rgba(0,0,0,1)",
          color: {
            up: "rgba(0,255,0,1)",
            down: "rgba(255,0,0,1)",
            unchanged: "rgba(0,0,255,1)",
          },
          barThickness: 40,
        },
      ];

      setChartData({ datasets });
    }
  }, [data]);

  const options: ChartOptions<"candlestick"> = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        title: {
          display: false,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
      },
    },
  };

  return (
    <div className="w-full flex justify-center ">
      <Chart
        className="max-w-[80rem] max-h-[40rem]"
        type="candlestick"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default CandleStickChart;
