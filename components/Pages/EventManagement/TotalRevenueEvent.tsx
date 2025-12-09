// import Image from "next/image";
// import eventmanagementbg from "@/public/images/eventmanagementbg.png";

export default function TotalRevenueEvent() {
  return (
    <div className="p-7.5 rounded-[20px] bg-nt130 revuenuebg">
      <div className="flex items-start justify-between flex-wrap gap-5">
        <div className="sm:order-last xl:order-first">
          <h4 className="mb-1">Total Revenue</h4>
          <span className="fs-three mb-6.5">$63,438.78</span>
          <button className="btngrdnt">
            <span className="btngrdnt-child py-2 px-4 font-medium">
              Withdraw
            </span>
          </button>
        </div>
        <span className="size-[60px] d-center rounded-full text-white bg-[#0A0A0A]">
          <i className="ph ph-currency-dollar text-2xl"></i>
        </span>
      </div>
    </div>
  );
}
