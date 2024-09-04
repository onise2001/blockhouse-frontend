import dynamic from "next/dynamic";
import React from "react";

const PieChart = dynamic(() => import("./client"), { ssr: false });

export default async function page() {
  const response = await fetch("http://127.0.0.1:8000/api/pie-chart-data/");
  let data;
  if (response.ok) {
    data = await response.json();
  } else {
    data = [];
  }
  return (
    <div>
      <PieChart data={data} />
    </div>
  );
}
