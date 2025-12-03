"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TotalEarnings = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
   }>({
series: [{
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  borderRadiusApplication: 'end',
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                  'United States', 'China', 'Germany'
                ],
              }
            },


          
 });


  return (
      <div className=" bg-nt130 rounded-[20px] py-6 px-4 h-full">
        <div className="flex justify-between flex-wrap mb-6">
          <div>
            <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Total Earnings
            </span>
            <h4 className="text-nt18 mb-0.5 font-medium">$78,298</h4>
          </div>

          <div className="size-12 rounded-full border border-[#212023] d-center">
            <i className="ph ph-currency-dollar text-[#ffffff]"></i>
          </div>
        </div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
        />
        
    </div>
  );
}
export default TotalEarnings;