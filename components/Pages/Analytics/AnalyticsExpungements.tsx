"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AnalyticsExpungements = () => {
  const [state] = React.useState<{
    series: ApexAxisChartSeries;
    options: ApexCharts.ApexOptions;
   }>({
   series: [ {
              name: 'series',
              data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
              chart: {
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },

          
 });

  return (
    <div className="w-full bg-nt130 rounded-[20px] px-6 pt-6 pb-1">
           <div className="rounded-[20px] py-6 px-4 h-full">
        <div className="flex justify-between flex-wrap mb-6">
          <div>
            <span className="text-nt160 font-normal text-[13px] pb-1.5">
              Expungements
            </span>
            <h4 className="text-[24px] font-medium">45</h4>
          </div>

          <div className="size-12 rounded-full border border-[#212023] d-center">
            <i className="ph ph-file-text text-[#ffffff]"></i>
          </div>
        </div>
            <div className="mb-6 flex items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
            
                <div>
                  <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="area"
                  /> 
                </div>
              </div>
     
      </div>
    </div>
        
        
    </div>
  );
};

export default AnalyticsExpungements;