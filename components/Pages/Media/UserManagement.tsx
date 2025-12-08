export default function UserManagement() {
  return (
    <div className="bg-nt130 my-7.5 rounded-[20px]">
      <div className="grid grid-cols-12">
        <div className="col-span-5 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-cloud-arrow-up text-nt140 text-2xl p-5 rounded-full bg-[#1E4DB71F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>75gb</h4>
                <span className="text-nt150 text-xs">-9%</span>
              </div>
              <span className="text-sm text-nt160">Memories Uploaded</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-video-camera text-nt170 text-2xl p-5 rounded-full bg-[#FEC90F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>10,396</h4>
                <span className="text-nt180 text-xs">+23%</span>
              </div>
              <span className="text-sm text-nt160">Videos Uploaded</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-link text-[#39CB7F] text-2xl p-5 rounded-full bg-[#39CB7F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>23,396</h4>
                <span className="text-nt180 text-xs">+38%</span>
              </div>
              <span className="text-sm text-nt160">
                Media Link
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-eye text-[#FC4B6C] text-2xl p-5 rounded-full bg-[#FC4B6C1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>15</h4>
                <span className="text-nt150 text-xs">-12%</span>
              </div>
              <span className="text-sm text-nt160">Views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
