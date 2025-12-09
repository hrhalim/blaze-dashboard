export default function EventAcCount() {
  return (
    <div className="bg-nt130 mb-7.5 rounded-[20px]">
      <div className="grid grid-cols-12">
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-calendar-blank text-nt140 text-2xl p-5 rounded-full bg-[#1E4DB71F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>354</h4>
                <span className="text-nt150 text-xs">-9%</span>
              </div>
              <span className="text-sm text-nt160">Total Events</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-ticket text-nt170 text-2xl p-5 rounded-full bg-[#FEC90F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>296</h4>
                <span className="text-nt180 text-xs">+23%</span>
              </div>
              <span className="text-sm text-nt160">Total Ticket Sales</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-money text-nt150 text-2xl p-5 rounded-full bg-[#FC4B6C1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>74%</h4>
                <span className="text-nt180 text-xs">+38%</span>
              </div>
              <span className="text-sm text-nt160">Attendances Rate</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5">
            <span className="flex items-center mb-3">
              <i className="ph ph-arrows-clockwise text-nt180 text-2xl p-5 rounded-full bg-[#39CB7F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>10</h4>
                <span className="text-nt150 text-xs">-12%</span>
              </div>
              <span className="text-sm text-nt160">Refunds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
