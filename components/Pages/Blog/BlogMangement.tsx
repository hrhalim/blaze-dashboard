export default function BlogMangement() {
  return (
    <div className="bg-nt130 my-7.5 rounded-[20px]">
      <div className="grid grid-cols-12">
        <div className="col-span-5 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-users text-nt140 text-2xl p-5 rounded-full bg-[#1E4DB71F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>24</h4>
                <span className="text-nt150 text-xs">-9%</span>
              </div>
              <span className="text-sm text-nt160">Active Post</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-cube text-nt170 text-2xl p-5 rounded-full bg-[#FEC90F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>4,396</h4>
                <span className="text-nt180 text-xs">+23%</span>
              </div>
              <span className="text-sm text-nt160">Audiences Reached</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-3">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F]">
            <span className="flex items-center mb-3">
              <i className="ph ph-chart-bar text-[#FC4B6C] text-2xl p-5 rounded-full bg-[#FC4B6C1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>423,396</h4>
                <span className="text-nt180 text-xs">+38%</span>
              </div>
              <span className="text-sm text-nt160">
                Average Clicks
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-5 xl:col-span-2">
          <div className="p-4 sm:p-7.5 border-r border-[#1F1F1F] max-xl:border-0">
            <span className="flex items-center mb-3">
              <i className="ph ph-arrows-counter-clockwise text-[#39CB7F] text-2xl p-5 rounded-full bg-[#39CB7F1F]"></i>
            </span>
            <div className="">
              <div className="flex items-end gap-1 mb-0.5">
                <h4>95%</h4>
                <span className="text-nt150 text-xs">95%</span>
              </div>
              <span className="text-sm text-nt160">Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
