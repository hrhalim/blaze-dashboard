"use client";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MostVisitedAnalysisRevenue() {
  const series = [20, 40, 30, 20];

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
        const labels = ["+2.5%", "4k", "2.5k"];

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
    labels: ["Latino", "White", "Asian", "Black"],
  };

  return (
    <div className="bg-[#111111] rounded-[20px] px-7 py-7 mt-6 md:mt:0">
      <div className="flex justify-between flex-wrap mb-7 pb-3">
        <div>
          <span className="text-nt160 font-normal text-[13px] pb-1.5">
            Total Revenue
          </span>
          <h4 className="text-nt18 mb-0.5 font-medium">$44,260</h4>
        </div>

        <div className="size-12 rounded-full border border-[#212023] d-center">
          <i className="ph ph-currency-dollar text-[#ffffff]"></i>
        </div>
      </div>
      <div className="flex justify-center mb-5 relative">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={210}
        />
        <div className="text-xs text-nt160 font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-[#ffffff] font-medium text-[16px]">$8,260</span> March 2025
        </div>
      </div>
      <div className="flex justify-between">
          {/* Item  */}
          <div className="flex items-center gap-4">
            <div className="size-9 rounded-full border border-[#212023] d-center">
              <i className="ph ph-pencil-simple text-[#FEC90F]"></i>
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
        </div> 
    </div>
  );
}
