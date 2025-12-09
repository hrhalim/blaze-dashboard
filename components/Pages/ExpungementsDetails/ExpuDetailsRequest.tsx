import Link from "next/link";
import ItemListToggle from "@/components/ItemListToggle";
import DatePicker from "@/components/DatePicker";
import ExpungementRequest1 from "./ExpungementRequest1";

export default function ExpuDetailsRequest() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3 md:gap-5">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Link
                href="/"
                className="flex items-center gap-1 text-nt160 text-base lg:text-lg">
                Expungements{" "}
                <i className="ph ph-caret-right text-base lg:text-lg"></i>
              </Link>
              <span className="text-lg text-primary">Details</span>
            </div>
            <h1 className="text-[#BBBBBB] font-bold">
              July Expungement day for Freedom
            </h1>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 max-sm:flex-wrap">
            <div className="">
              <DatePicker />
            </div>
            <div className="">
              <ItemListToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Count Details Starts */}
      <div className="bg-nt130 my-7.5 rounded-[20px]">
        <div className="grid grid-cols-12">
          <div className="col-span-6 xl:col-span-3">
            <div className="flex sm:items-center max-sm:flex-wrap gap-3 sm:gap-4 p-4 sm:p-7.5 border-r border-[#1F1F1F]">
              <span className="p-4.5 rounded-full bg-[#FEC90F1F] d-center">
                <i className="ph ph-file text-nt170 text-2xl"></i>
              </span>
              <div className="">
                <h4 className="mb-0.5">1,589</h4>
                <span className="text-sm text-nt160">Registered</span>
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-3">
            <div className="flex sm:items-center max-sm:flex-wrap gap-3 sm:gap-4 p-4 sm:p-7.5 xl:border-r xl:border-[#1F1F1F]">
              <span className="p-4.5 rounded-full bg-[#7E49FF1F] d-center">
                <i className="ph ph-users text-primary text-2xl"></i>
              </span>
              <div className="">
                <h4 className="mb-0.5">1,424</h4>
                <span className="text-sm text-nt160">Attended</span>
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-3">
            <div className="flex sm:items-center max-sm:flex-wrap gap-3 sm:gap-4 p-4 sm:p-7.5 border-r border-[#1F1F1F]">
              <span className="p-4.5 rounded-full bg-[#39CB7F1F] d-center">
                <i className="ph ph-check-circle text-nt180 text-2xl"></i>
              </span>
              <div className="">
                <h4 className="mb-0.5">1,424</h4>
                <span className="text-sm text-nt160">Filed</span>
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-3">
            <div className="flex sm:items-center max-sm:flex-wrap gap-3 sm:gap-4 p-4 sm:p-7.5">
              <span className="p-4.5 rounded-full bg-[#FC4B6C1F] d-center">
                <i className="ph ph-x text-nt150 text-2xl"></i>
              </span>
              <div className="">
                <div className="flex items-end gap-1 ">
                  <h4 className="mb-0.5">135</h4>
                </div>
                <span className="text-sm text-nt160">Denied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Count Details Ends */}

      {/* Table Wrapper */}
      <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
          <div className="">
            <h4 className="text-nt18 mb-1">Expungement Request</h4>
            <span className="text-[13px] text-nt160">
              Total Expungement Request: 44
            </span>
          </div>
          <div className="flex items-center flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center gap-3">
              <Link href="/expungements" className="btngrdnt block">
                <span className="btngrdnt-child py-3.5 px-4 rounded-lg">
                  New Request
                </span>
              </Link>
              <Link href="/expungements-details-inqueue" className="d-center">
                <span className="py-3.5 px-4 rounded-lg border border-nt110">
                  In Queue
                </span>
              </Link>
            </div>
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
        <ExpungementRequest1 />
      </div>
    </div>
  );
}
