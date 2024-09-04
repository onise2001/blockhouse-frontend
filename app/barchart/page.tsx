import dynamic from "next/dynamic";
import React from "react";

const BarChart = dynamic(() => import("./client"), { ssr: false });

export default async function page() {
  const response = await fetch("http://127.0.0.1:8000/api/bar-chart-data/");
  let data;
  if (response.ok) {
    data = await response.json();
  } else {
    data = [];
  }
  return <div>
    <BarChart data={data}/>
  </div>;
}
