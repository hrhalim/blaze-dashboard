"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function YearlyExpungementApprovals() {
  const series = [20, 40, 30];

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
        const labels = ["2024", "2026", "2.2026"];

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
    <div className="bg-[#111111] rounded-[20px] p-7 mb-6">
        <span className="text-nt160 font-normal text-[13px] pb-1">
          Yearly Expungement Approvals
        </span>
        <h4 className="text-nt18 mb-0.5 font-medium">1,358</h4>
        <div className="flex items-center gap-3.5 pt-4">
          <div>
            <div className="flex items-center gap-3.5 pb-2">
              <span className="text-[16px] font-medium text-[#39CB7F]">+9%</span>
                <span className="text-nt160 font-normal text-[12px]">Approval Rate</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-[#1E4DB7]"></span>
                <span className="font-medium text-[#1E4DB7]">2024</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-[#7E49FF]"></span>
                <span className="font-medium text-[#7E49FF]">2025</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="size-1.5 rounded-full bg-[#FEC90F]"></span>
                <span className="font-medium text-[#FEC90F]">2026</span>
              </div>
            </div>
          </div>
          <div>
            <ReactApexChart
              options={options}
              series={series}
              type="donut"
              width={90}
            />
          </div>
        </div>
    </div>
  );
}
