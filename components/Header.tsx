import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex justify-center w-full p-[1.5rem] pt-[4rem] background mb-[7rem]">
      <div className="flex gap-[3rem] text-[1.5rem]">
        <Link href={"/candlestick"}>
          <p className="cursor-pointer">Candle Stick</p>
        </Link>

        <Link href={"/linechart"}>
          <p className="cursor-pointer">Line Chart</p>
        </Link>

        <Link href={"/barchart"}>
          <p className="cursor-pointer">Bar Chart</p>
        </Link>

        <Link href={"/piechart"}>
          <p className="cursor-pointer">Pie Chart</p>
        </Link>
      </div>
    </nav>
  );
}
