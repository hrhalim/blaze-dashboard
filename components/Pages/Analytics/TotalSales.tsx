"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TotalSales = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
   }>({
  series: [{
    data: [10, 15, 20, 8, 6, 21, 10]
}],
options: {
    chart: { 
        type: 'bar',
        toolbar: {
            show: false 
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '75%',
            borderRadius: 12,
            borderRadiusApplication: 'around',
            distributed: true
        }
    },
    colors: ['#FEC90F', '#39CB7F', '#3B82F6', '#F87171', '#39CB7F', '#FBBF24', '#10B981'], // one color per bar
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
        categories: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        labels: {
            style: {
                colors: "#888888",
                fontSize: '14px'
            }
        },
        axisBorder: {
            show: false    
        },
        axisTicks: {
            show: false
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
    <div className="w-full bg-nt130 rounded-[20px] p-6">
        <div className="flex justify-between flex-wrap">
          <div>
            <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Yearly Revenue
            </span>
            <h4 className="text-nt18 mb-0.5 font-medium">Total Sales</h4>
          </div>

          <div className="size-12 rounded-full border border-[#212023] d-center">
            <i className="ph ph-eye text-[#ffffff]"></i>
          </div>
        </div> 
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar" 
        /> 
        <div className="flex justify-between">
          {/* Item  */}
          <div className="flex items-center gap-4">
            <div className="size-9 rounded-full border border-[#212023] d-center">
              <i className="ph ph-eye text-[#FEC90F]"></i>
            </div>
            <div>
              <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Products
              </span>
              <h4 className="text-[#ffffff] text-[14px] font-medium">$36,358</h4>
            </div> 
          </div>
           {/* Item  */}
          <div className="flex items-center gap-4">
            <div className="size-9 rounded-full border border-[#212023] d-center">
              <i className="ph ph-file text-[#7E49FF]"></i>
            </div>
            <div>
              <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Invoice
              </span>
              <h4 className="text-[#ffffff] text-[14px] font-medium">358</h4>
            </div> 
          </div>
           {/* Item  */}
          <div className="flex items-center gap-4">
            <div className="size-9 rounded-full border border-[#212023] d-center">
              <i className="ph ph-hourglass-simple-medium text-[#1E4DB7]"></i>
            </div>
            <div>
              <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Events
              </span>
              <h4 className="text-[#ffffff] text-[14px] font-medium">296</h4>
            </div> 
          </div>
        </div> 
    </div>
  );
};

export default TotalSales;
