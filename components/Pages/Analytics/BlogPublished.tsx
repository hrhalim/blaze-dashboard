"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const BlogPublished = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
   }>({
  series: [{
    data: [10, 15, 20, 8, 6, 21, 3]
    }],
    options: {
    chart: { 
        type: 'bar',
        toolbar: {
        show: false 
      } 
    },
    colors: ['#FEC90F'], 
    plotOptions: {
    bar: {
    columnWidth: '75%',
    borderRadius: 12,
    borderRadiusApplication: 'around',

    colors: {
        ranges: [{
          from: 0,
          to: 999999,
          color: '#FEC90F'
        }],
        backgroundBarColors: ['#271E00'],
        backgroundBarOpacity: 1,
        backgroundBarRadius: 12
      }
    }
  },
 
  tooltip: {
    theme: 'dark',
    fillSeriesColor: false
  },
  dataLabels: {
      enabled: false
  },

  legend: {
      show: false
  },

  xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07'],
      labels: {
      style: {
          colors: "#888888",
          fontSize: '14px'
      }
      },
      axisBorder: {
        show: true,
        color: "#3A3A3A", 
        height: 1,
      },
      axisTicks: {
        show: true,
        color: "#3A3A3A"
      }
  },

  yaxis: {
      show: false
  },
  grid: {
      show: false
  }
  }
          
 });

  return (
    <div className="w-full bg-nt130 rounded-[20px] px-6 pt-6 pb-1">
        <div className="flex justify-between flex-wrap mb-2 ">
          <div>
            <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Blogs published
            </span>
            <h4 className="text-nt18 mb-0.5 font-medium">15</h4>
          </div>
          <div className="size-12 rounded-full border border-[#212023] d-center">
            <i className="ph ph-eye text-[#ffffff]"></i>
          </div>
        </div>
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
        />
      </div>
    </div>
  );
};

export default BlogPublished;
