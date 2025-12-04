"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const EventsOrganized = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
   }>({
   series: [ {
      name: 'Events',
      data: [0, 200, 10, 150, 60, 70, 5]
    }],
    options: {
      chart: {
        type: 'area',
        toolbar: { show: false },  
      },
      dataLabels: {
        enabled: false
      },
     stroke: {
      curve: 'smooth',
      width: 1,
      colors: ['#3694EB'] 
    },
     fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: ['#151B2800'], 
        inverseColors: false,
        opacityFrom: 1,  
        opacityTo: 1,
        stops: [10, 0]
      },
      colors: ['#3694EB4D']
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
    <div className="w-full bg-nt130 rounded-[20px] p-6 relative"> 
        <div className="flex justify-between flex-wrap mb-5">
          <div>
            <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Events organized
            </span>
            <h4 className="text-[24px] font-medium">54</h4>
          </div>

          <div className="size-13 rounded-full bg-[#212023] d-center">
            <i className="ph ph-user-gear text-[#ffffff]"></i>
          </div>
        </div>
        <div>
          <span className="text-[#777E89] text-[12px]">Attendance Rate</span>
          <span className="text-[#39CB7F] font-medium text-[16px]">85%</span>
        </div>
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

export default EventsOrganized;