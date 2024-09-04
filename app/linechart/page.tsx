import dynamic from "next/dynamic";
import React from "react";

const LineChart = dynamic(() => import("./client"), { ssr: false });
export default async function page() {
  const response = await fetch("http://127.0.0.1:8000/api/line-chart-data/");
  let data;
  if (response.ok) {
    data = await response.json();
  } else {
    data = [];
  }
 

  return (
    <div>
      <LineChart data={data} />
    </div>
  );
}


