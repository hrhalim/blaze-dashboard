"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function TotalItemSummaryTshart() {
  const series = [44, 55, 32];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    colors: ["#1E4DB7", "#FEC90F", "#7E49FF"],
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (value, { seriesIndex }) {
          const names = ["Small", "Meduim", "Large"];
          return names[seriesIndex] + ": " + value;
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 172.48 },
          legend: { show: false },
        },
      },
    ],
  };

  return (
    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
      <div className="bg-nt130 rounded-[20px] px-7 py-7.5">
        <div className="mb-7.5">
          <h4 className="text-nt18 mb-1">Total Item Summary</h4>
          <span className="text-nt160 text-[13px]">Total Items: 1,200</span>
        </div>

        <div className="relative mb-7.5">
          <div className="flex justify-center">
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              width="200"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h3>03</h3>
            <span className="text-[13px] text-[#777E89]">Total Size</span>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-7.5">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="size-[9px] bg-nt10 rounded-full"></span>
            <span className="text-nt160">White: 440 pics</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="size-[9px] bg-nt30 border border-nt10 rounded-full"></span>
            <span className="text-nt160">Black:550 pics</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex gap-2">
            <div className="bg-[#0A0A0A] py-[5px] px-2 rounded-lg d-center">
              <i className="ph ph-tag text-nt170 text-3xl"></i>
            </div>
            <div className="">
              <span className="text-nt160 mb-0.5">Small</span>
              <span className="fs-six font-medium">358</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#0A0A0A] py-[5px] px-2 rounded-lg d-center">
              <i className="ph ph-tag text-primary text-3xl"></i>
            </div>
            <div className="">
              <span className="text-nt160 mb-0.5">Meduim</span>
              <span className="fs-six font-medium">358</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#0A0A0A] py-[5px] px-2 rounded-lg d-center">
              <i className="ph ph-tag text-[#1E4DB7] text-3xl"></i>
            </div>
            <div className="">
              <span className="text-nt160 mb-0.5">Large</span>
              <span className="fs-six font-medium">296</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
