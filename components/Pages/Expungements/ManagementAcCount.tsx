export default function ManagementAcCount() {
  return (
    <div className="bg-nt130 my-7.5 rounded-[20px]">
      <div className="grid grid-cols-10">
        <div className="col-span-5 xl:col-span-2">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-file-text text-nt140 text-2xl p-5 rounded-full bg-[#1E4DB71F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>24</h4>
                <span className="text-nt150 text-xs">-9%</span>
              </div>
              <span className="text-sm text-nt160">Total Clinics Hosted</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-users text-nt170 text-2xl p-5 rounded-full bg-[#FEC90F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>4,396</h4>
                <span className="text-nt180 text-xs">+23%</span>
              </div>
              <span className="text-sm text-nt160">Total Registrants</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-currency-dollar-simple text-nt180 text-2xl p-5 rounded-full bg-[#39CB7F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>2,396</h4>
                <span className="text-nt180 text-xs">+23%</span>
              </div>
              <span className="text-sm text-nt160">
                Eligible for Expungement
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-paperclip text-nt150 text-2xl p-5 rounded-full bg-[#FC4B6C1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>835</h4>
                <span className="text-nt150 text-xs">-12%</span>
              </div>
              <span className="text-sm text-nt160">Expungements Filed</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-check-circle text-nt170 text-2xl p-5 rounded-full bg-[#FEC90F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>835</h4>
                <span className="text-nt150 text-xs">-12%</span>
              </div>
              <span className="text-sm text-nt160">Expungements Granted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
