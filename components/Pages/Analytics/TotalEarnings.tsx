
export default function TotalEarnings() {
  return (
      <div className=" bg-nt130 rounded-[20px] px-6 py-6 pb-5 px-4 h-full">
        <div className="flex justify-between flex-wrap mb-7">
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
        {/* Item  */}
        <div className="mb-7">
          <span className="text-nt160 font-normal text-[16px] pb-1.5">Invoices</span>
           <div className="relative bg-[#1E2122] h-[16px]">
               <div className="w-[140px] bg-[#39CB7F] h-full rounded-l-2xl absolute left-0">
                 <span className="bg-[#01A24E] h-[22px] w-[2px] absolute right-0 top-[-3px]"></span>
               </div>
               <button className="bg-[#FFFFFF14] px-3 py-2 rounded-[4px] absolute right-0 shadow-[20px] top-[-12px]">$12,298</button>
           </div>
        </div>
        {/* Item  */}
        <div className="mb-7">
          <span className="text-nt160 font-normal text-[16px] pb-1.5">Events</span>
           <div className="relative bg-[#1E2122] h-[16px]">
               <div className="w-[210px] bg-[#39CB7F] h-full rounded-l-2xl absolute left-0">
                 <span className="bg-[#5D5D5D] h-[22px] w-[2px] absolute right-0 top-[-3px]"></span>
               </div>
               <button className="bg-[#FFFFFF14] px-3 py-2 rounded-[4px] absolute right-0 shadow-[20px] top-[-12px]">$20,298</button>
           </div>
        </div>
        {/* Item  */}
        <div className="">
          <span className="text-nt160 font-normal text-[16px] pb-1.5">Products</span>
           <div className="relative bg-[#1E2122] h-[16px]">
               <div className="w-[240px] bg-[#39CB7F] h-full rounded-l-2xl absolute left-0">
                 <span className="bg-[#5D5D5D] h-[22px] w-[2px] absolute right-0 top-[-3px]"></span>
               </div>
               <button className="bg-[#FFFFFF14] px-3 py-2 rounded-[4px] absolute right-0 shadow-[20px] top-[-12px]">$44,298</button>
           </div>
        </div>
    </div>
  );
}