"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function AnalysisItemSold() {
  const series = [20, 40, 30, 20];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 4,
      colors: ["#111111"],
    },

    series: [
      {
        data: [30, 60, 45],
      },
    ],

    colors: ["#FEC90F", "#1A9BFC", "#1E4DB7"],

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      custom: function ({ series, seriesIndex }) {
        const labels = ["+2.5%", "4k", "2.5k"];

        return `
          <div style="
            background:#111827;
            color:white;
            border-radius:6px;
            font-size:14px;">
            ${labels[seriesIndex]}: ${series[seriesIndex]}
          </div>
        `;
      },
    },
    labels: ["Latino", "White", "Asian", "Black"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 220 },
        },
      },
    ],
  };

  return (
    <div className="bg-[#111111] rounded-[20px] px-7 py-7.5">
      <div className="flex justify-between flex-wrap mb-6">
        <div>
          <span className="text-nt160 font-normal text-[13px] pb-1.5">
            Items Sold
          </span>
          <h4 className="text-nt18 mb-0.5 font-medium">260</h4>
        </div>

        <div className="size-12 rounded-full border border-[#212023] d-center">
          <i className="ph ph-currency-dollar text-[#ffffff]"></i>
        </div>
      </div>
      <div className="flex justify-center mb-5 relative">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={320}
        />
        <div className="text-xs text-nt160 font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-[#ffffff] font-medium text-[16px]">$8,260</span> <br /> March 2025
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-nt170"></span>
          <span className="font-medium text-nt170">+2.5%</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-nt180"></span>
          <span className="font-medium text-nt180">4k</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-[#1E4DB7]"></span>
          <span className="font-medium text-[#1E4DB7]">2.5k</span>
        </div>
      </div>
    </div>
  );
}
