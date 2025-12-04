"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AnalysisItemSold = () => {
  const [state] = React.useState<{
    sold: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
   }>({
  sold: [{
      data: [50, 100, 150, 80]
  }],
  
options: {
  chart: {
    type: 'bar',
    stacked: true, // important!
    toolbar: { show: false }
  },

  plotOptions: {
    bar: {
      columnWidth: '100%',
      borderRadius: 0
    }
  },

  fill: {
    type: 'gradient',
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#39CB7F33"],
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    },
    colors: ["#39CB7F00"]
  },

  tooltip: { theme: 'dark' },
  dataLabels: { enabled: false },
  legend: { show: false },

  xaxis: {
    categories: ['Wk-1', 'Wk-2', 'Wk-3', 'Wk-4'],
    labels: { style: { colors: "#888888", fontSize: '14px' } },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },

  yaxis: { show: false },
  grid: { show: false }
}

          
 });

  return (
    <div className="w-full bg-[#111111] rounded-[20px] px-6 pt-6 pb-1">
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
        <ReactApexChart
          options={state.options}
          series={state.sold}
          type="bar"
        /> 
    </div>
  );
};

export default AnalysisItemSold;
