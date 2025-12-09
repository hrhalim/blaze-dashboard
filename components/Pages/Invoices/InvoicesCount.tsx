export default function InvoicesCount() {
  return (
    <div className="bg-nt130 mb-7.5 rounded-[20px]">
      <div className="grid grid-cols-12">
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-money text-nt140 text-2xl p-5 rounded-full bg-[#1E4DB71F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>$24,374</h4>
                <span className="text-nt150 text-xs">-9%</span>
              </div>
              <span className="text-sm text-nt160">Revenue Generated</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-file-text text-nt170 text-2xl p-5 rounded-full bg-[#FEC90F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>30</h4>
                <span className="text-nt180 text-xs">+23%</span>
              </div>
              <span className="text-sm text-nt160">Total Invoices Created</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-file text-nt150 text-2xl p-5 rounded-full bg-[#FC4B6C1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>25</h4>
                <span className="text-nt180 text-xs">+38%</span>
              </div>
              <span className="text-sm text-nt160">Total Invoices Paid</span>
            </div>
          </div>
        </div>
        <div className="col-span-6 xl:col-span-3">
          <div className="p-4 sm:p-7.5">
            <span className="flex items-center mb-3">
              <i className="ph ph-trend-up text-nt180 text-2xl p-5 rounded-full bg-[#39CB7F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>20</h4>
                <span className="text-nt150 text-xs">-12%</span>
              </div>
              <span className="text-sm text-nt160">Invoices Outstanding</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
