"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const InflationBarChart = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
  }>({
    series: [
      {
        name: "Inflation",
        data: [22, 35, 28, 15],
        // 4 different bar colors
        color: undefined,
      },
    ],
    options: {
      chart: {
        height: 90,
        type: "bar",
        toolbar: { show: false },
      },
      legend: {
        show: false, // ← removes apexcharts-legend completely
      },
      colors: ["#1E4DB7", "#39CB7F", "#FEC90F", "#FC4B6C"], // 4 bar colors

      plotOptions: {
        bar: {
          columnWidth: "16px",
          borderRadius: 10,
          dataLabels: { position: "top" },
          distributed: true, // IMPORTANT for different colors
        },
      },

      dataLabels: {
        enabled: true,
        formatter: (val: number) => `${val}%`,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#1E4DB7", "#39CB7F", "#FEC90F", "#FC4B6C"],
        },
      },

      // 4 bottom labels under each bar
      xaxis: {
        categories: ["30-40", "30-40", "30-40", "30-40"],
        labels: {
          show: true,
          style: {
            fontSize: "14px",
            colors: ["#777e8968"],
          },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },

      yaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },

      grid: {
        yaxis: { lines: { show: false } },
      },

      tooltip: { enabled: false },
    },
  });

  return (
    <div className="w-full bg-nt130 rounded-[20px]">
      <div className="w-full">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={300}
        />
      </div>
      <span className="text-base lg:text-[21px] font-medium ps-10 pe-2 pb-5 text-nt18">
        Participant Age Groups
      </span>
    </div>
  );
};

export default InflationBarChart;
