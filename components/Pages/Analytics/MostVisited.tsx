"use client";
import { useToggle } from "@/hooks/useToggle";
import NewExReTabs from "../Home/NewExReTabs";
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
export default function MostVisited() {
  const { open, toggle } = useToggle(false);

  const [state] = React.useState<{
      series: { name: string; data: number[] }[];
      options: ApexOptions;
    }>({
      series: [
        { name: "Certified", data: [50, 44, 60, 40, 50, 50] },
        { name: "Filed", data: [10, 32, 20, 33, 25, 20] },
      ],
      options: {
        chart: { type: "line", toolbar: { show: false } },
        colors: ["#1E4DB7", "#39CB7F"],
        stroke: { curve: "stepline", width: 3 },
        dataLabels: { enabled: false },
        legend: { show: false },
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
    <div className="bg-[#111111] rounded-[20px] p-6 md:p-6 relative mb-6 md:mb-0">
      <div className="flex items-center justify-between pb-6">
        <h4 className="text-nt18 mb-1">Most Visited</h4> 
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          <button onClick={toggle} className="bg-nt120 rounded-[8px] text-[#7E49FF] font-medium">
            <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
              March 2025 <i className="ph ph-caret-down"></i>
            </span>
          </button>
          <div
            className={`
          transition-transform duration-500 ease-in-out
          transform top-10 sm:top-30 right-7 absolute w-[260px]
          ${open ? "translate-y-0 opacity-100 z-30" : "translate-y-full opacity-0"}
        `}>
          <div className="p-5 bg-white shadow-lg rounded-xl">
            <NewExReTabs /> 
            </div>
          </div>
        </div>
      </div>
        <ReactApexChart
        series={state.series}
        options={state.options}
        type="line"
        height={230}
      />
      <div className="flex items-center justify-between gap-2 pt-6">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-[#39CB7F]"></span>
          <span className="font-medium text-[#39CB7F]">Certified</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-[#1E4DB7]"></span>
          <span className="font-medium text-[#1E4DB7]">Filed</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-[#FEC90F]"></span>
          <span className="font-medium text-[#FEC90F]">Success</span>
        </div>
      </div>
    </div>
  );
}