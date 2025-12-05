"use client";
import { useToggle } from "@/hooks/useToggle";
import NewExReTabs from "../Home/NewExReTabs"; 
import AnalysisRevenue from "./AnalysisRevenue";
import AnalysisRevenueFirst from "./AnalysisRevenueFirst";
import AnalysisItemSold from "./AnalysisItemSold";

export default function TotalAnalysis() {
  const { open, toggle } = useToggle(false);

  return (
    <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
        <div className="">
          <h4 className="text-nt18 mb-1">Total Analysis</h4> 
        </div>
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          <button onClick={toggle} className="bg-nt120 rounded-[8px] text-[#7E49FF] font-medium">
            <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
              March 2025 <i className="ph ph-caret-down"></i>
            </span>
          </button>
          <div
            className={`
          transition-transform duration-500 ease-in-out
          transform top-68 sm:top-40 right-7 absolute w-[260px]
          ${open ? "translate-y-0 opacity-100 z-20" : "translate-y-full opacity-0"}
        `}>
            <div className="p-5 bg-white shadow-lg rounded-xl">
              <NewExReTabs /> 
            </div>
          </div>
        </div>
      </div>
      {/* <BlogUpdateTable /> */}
      <div className="grid lg:grid-cols-[1fr_1fr_270px] gap-6">
          <AnalysisRevenueFirst/>
          <AnalysisItemSold/>
          <AnalysisRevenue/>
      </div>


    </div>
  );
}
