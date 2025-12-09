"use client";
import { useTabs } from "@/hooks/useTabs";

const tabItems = ["By Date", "By Clinic"];

export default function NewExReTabs() {
  const { active, changeTab } = useTabs(0);

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* TAB BUTTONS */}
      <div className="flex items-center justify-center gap-10 mb-6 border-b border-[#E8E8E8] pb-2">
        {tabItems.map((tab, i) => (
          <button
            key={i}
            onClick={() => changeTab(i)}
            className={`
              text-base!
              transition-all duration-300 
              ${
                active === i
                  ? "text-primary border-b-2 border-primary forlineactive"
                  : "bg-gray-100 text-nt120"
              }
            `}>
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENTS */}
      <div className="relative min-h-[120px]">
        {tabItems.map((tab, i) => (
          <div
            key={i}
            className={`
              tab-content relative top-0 transition-all duration-500 ease-in-out
              ${
                active === i
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5 pointer-events-none absolute"
              }
            `}>
            {i === 0 && (
              <div className="absolute top-0 left-0 w-full">
                <ul>
                  <li className="py-2.5 cursor-pointer">
                    <span className="text-[#0E0D0D] font-medium text-base">
                      Today
                    </span>
                  </li>
                  <li className="py-2.5 cursor-pointer">
                    <span className="text-[#0E0D0D] font-medium text-base">
                      This Week
                    </span>
                  </li>
                  <li className="py-2.5 cursor-pointer">
                    <span className="text-[#0E0D0D] font-medium text-base">
                      This Month
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {i === 1 && (
              <div className="absolute top-0 left-0 w-full">
                <ul>
                  <li className="py-2.5 cursor-pointer">
                    <span className="text-[#0E0D0D] font-medium text-base">
                      Clinic name
                    </span>
                  </li>
                  <li className="py-2.5 cursor-pointer">
                    <span className="text-[#0E0D0D] font-medium text-base">
                      Clinic name
                    </span>
                  </li>
                  <li className="py-2.5 cursor-pointer">
                    <span className="text-[#0E0D0D] font-medium text-base">
                      Clinic name
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
