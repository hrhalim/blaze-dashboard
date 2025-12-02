"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const StatesRepresented = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
  }>({
    series: [
      {
        name: "Inflation",
        data: [22, 35, 28, 15],
        color: undefined,
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: { show: false },
      },

      legend: {
        show: false,
      },

      colors: ["#39CB7F", "#FC4B6C", "#FEC90F", "#1A9BFC"],

      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
          distributed: true,
        },
      },

      // ❌ REMOVE TOP % VALUE
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ["Washington", "Delaware", "New Jersey", "Utah"],
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

      // ❌ HIDE HOVER TOOLTIP VALUE
      tooltip: { enabled: false },
    },
  });

  return (
    <div className="w-full bg-nt130 rounded-[20px]">
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={300}
        />
      </div>
      <span className="text-base lg:text-[21px] font-medium ps-10 pe-2 pb-5 text-nt18">
        States Represented
      </span>
    </div>
  );
};

export default StatesRepresented;
