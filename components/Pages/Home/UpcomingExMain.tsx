"use client";
import { useToggle } from "@/hooks/useToggle";
import NewExungementReq from "@/components/Pages/Home/NewExungementReq";
import NewExReTabs from "./NewExReTabs";

export default function UpcomingExMain() {
  const { open, toggle } = useToggle(false);

  return (
    <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
        <div className="">
          <h4 className="text-nt18 mb-1">New Exungement Request</h4>
          <span className="text-[13px] text-nt160">Total Request: 44</span>
        </div>
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          <form action="">
            <div className="flex items-center gap-2 py-3.5 px-4 rounded-lg bg-nt120">
              <span className="d-center cursor-pointer">
                <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
              </span>
              <input
                className="bg-transparent placeholder:text-nt160 text-nt160 sm:min-w-[315px]"
                type="text"
                placeholder="Search..."
              />
            </div>
          </form>
          <button onClick={toggle} className="btngrdnt">
            <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
              March 2025 <i className="ph ph-caret-down"></i>
            </span>
          </button>
          <div
            className={`
          transition-transform duration-500 ease-in-out
          transform top-68 sm:top-40 right-7 absolute w-[260px]
          ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}>
            <div className="p-5 bg-white shadow-lg rounded-xl">
              <NewExReTabs />
            </div>
          </div>
        </div>
      </div>
      <NewExungementReq />
    </div>
  );
}
