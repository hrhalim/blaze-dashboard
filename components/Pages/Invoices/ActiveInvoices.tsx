import Link from "next/link";
import ActiveInvoicesTable from "./ActiveInvoicesTable";

export default function ActiveInvoices() {
  return (
    <div>
      {/* Table Wrapper */}
      <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
          <div className="">
            <h4 className="text-nt18 mb-1">Active Invoices</h4>
            <span className="text-[13px] text-nt160">Active Invoices: 13</span>
          </div>
          <div className="flex items-center flex-wrap gap-2 sm:gap-4">
            <form action="">
              <div className="flex items-center gap-2 py-3.5 px-4 rounded-lg bg-nt120">
                <span className="d-center cursor-pointer">
                  <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
                </span>
                <input
                  className="bg-transparent placeholder:text-nt160 text-nt160 sm:min-w-[150px]"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </form>
            <div className="flex items-center gap-3">
              <Link href="/expungements-details-inqueue" className="d-center">
                <span className="py-3.5 px-4">In Queue</span>
              </Link>
              <Link href="/expungements" className="btngrdnt block">
                <span className="btngrdnt-child py-3 px-5 rounded-lg">
                  Active
                </span>
              </Link>
            </div>
          </div>
        </div>
        <ActiveInvoicesTable />
      </div>
    </div>
  );
}
