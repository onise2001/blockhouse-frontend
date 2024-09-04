"use client";

import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartPropts {
  data: CustomChartData;
}

const client: React.FC<LineChartPropts> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Line Chart",
        data: data.data,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"line">) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };
  return (
    <div className="flex justify-center">
      <Line
        data={chartData}
        options={options}
        className="max-w-[80rem] max-h-[50rem]"
      />
    </div>
  );
};

export default client;
