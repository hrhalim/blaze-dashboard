"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const MostViewPageImpression2nd = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
   }>({
   series: [ {
      name: 'Expungements',
      data: [0, 200, 80, 150, 20, 100, 5]
    }],
    options: {
      chart: {
        type: 'area',
        toolbar: { show: false },
        background: 'transparent'
      },
      dataLabels: {
        enabled: false
      },
     stroke: {
      curve: 'smooth',
      width: 1,
      colors: ['#FF204A'] 
    },
     fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "vertical",
        // shadeIntensity: 1,
        gradientToColors: ['#FF204A'], 
        // inverseColors: false,
        opacityFrom: 1,  
        opacityTo: 0,
        stops: [10, 0]
      },
      colors: ['#FF204A']
    },
      yaxis: {
          show: false
      },
     xaxis: {
        axisBorder: { show: false },
          axisTicks: { show: false },
      labels: { show: false }
     },
    grid: {
        show: false
    },
      tooltip: {
        theme: 'dark',
        fillSeriesColor: false,
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
          
 });

  return (
    <div className="w-full bg-[#111111] rounded-[20px] p-6 relative">
      <div className="flex justify-between flex-wrap mb-7.5 pb-7.5">
          <span className="text-nt160 font-normal text-[13px] pb-1.5">
            Page Impressions
          </span>
          <h4 className="text-[24px] font-medium">456,120</h4>
      </div>
      <span className="text-[#FF204A] font-medium text-[16px]">+9%</span>
      <div className="absolute bottom-0 right-[24px] w-[100px]">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
        />
        </div> 
    </div>
  );
};

export default MostViewPageImpression2nd;