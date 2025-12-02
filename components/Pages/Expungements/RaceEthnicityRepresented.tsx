"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function RaceEthnicityRepresented() {
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
        data: [30, 60, 45, 80],
      },
    ],

    colors: ["#FEC90F", "#1A9BFC", "#1E4DB7", "#39CB7F"],

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
        const labels = ["Latino", "White", "Asian", "Black"];

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
    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
      <div className="bg-nt130 rounded-[20px] px-7 py-7.5">
        <div className="flex justify-center mb-5 relative">
          <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={320}
          />
          <span className="text-xs text-nt160 font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            Race & <br /> Ethnicity <br /> Represented
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-nt170"></span>
            <span className="font-medium text-nt170">Latino</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-nt180"></span>
            <span className="font-medium text-nt180">Black</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-nt160"></span>
            <span className="font-medium text-nt160">Asian</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-nt10"></span>
            <span className="font-medium text-nt10">White</span>
          </div>
        </div>
      </div>
    </div>
  );
}
