import React from "react";
import dynamic from "next/dynamic";
//import CandleStickChart from "./page";
const CandleStickChart = dynamic(() => import("./client"), { ssr: false });

export default async function fetchData() {
  const response = await fetch("http://127.0.0.1:8000/api/candlestick-data/");
  let data;
  if (response.ok) {
    data = await response.json();
  } else {
    data = [
      {
        x: "2023-01-01",
        open: 30,
        high: 40,
        low: 25,
        close: 35,
      },
    ];
  }

  return (
    <div>
      <CandleStickChart data={data} />
    </div>
  );
}
