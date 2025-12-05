"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function OverviewProfit() {
  const [state] = React.useState<{
    series: { name: string; data: number[] }[];
    options: ApexOptions;
  }>({
    series: [
      { name: "Certified", data: [50, 44, 60, 40, 50, 50] },
      { name: "Filed", data: [12, 32, 20, 33, 25, 20] },
    ],
    options: {
      chart: { type: "line", toolbar: { show: false } },
      colors: ["#1E4DB7", "#39CB7F"],
      stroke: { curve: "stepline", width: 3 },
      dataLabels: { enabled: false },
      legend: { labels: { colors: "#ffffff" } },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: { style: { colors: "#777E89" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: "#777E89" } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      tooltip: { theme: "dark", fillSeriesColor: false },
      grid: { show: false, borderColor: "#333" },
    },
  });

  return (
    <div className="bg-[#111111] rounded-[20px] px-7 py-8 my-6 md:my-0">
      <div className="flex justify-between flex-wrap mb-6">
        <div>
          <span className="text-nt160 font-normal text-[13px] pb-1.5">
            Expungement Analytics
          </span>
          <h4 className="text-nt18 mb-0.5 font-medium">Overview of Profit</h4>
        </div>

        <div className="w-12 h-12 rounded-full border border-[#212023] flex items-center justify-center">
          <i className="ph ph-currency-dollar text-[#ffffff]"></i>
        </div>
      </div>

      <ReactApexChart
        series={state.series}
        options={state.options}
        type="line"
        height={250}
      />
    </div>
  );
}
