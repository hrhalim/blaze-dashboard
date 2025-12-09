import NewExungementReq from "@/components/Pages/Home/NewExungementReq";

export default function ExpungementRequests() {
  return (
    <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
        <div className="">
          <h4 className="text-nt18 mb-1">Exungement Request</h4>
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
        </div>
      </div>
      <NewExungementReq />
    </div>
  );
}
