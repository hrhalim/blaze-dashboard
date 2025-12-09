import Link from "next/link";
import ExpungementHistoryFull from "./ExpungementHistoryFull";

export default function ExpungementHistoryDetails() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <Link
            href="/"
            className="flex items-center gap-1 text-nt160 text-base lg:text-lg">
            Expungements <i className="ph ph-caret-right text-lg"></i>
          </Link>
          <span className="text-base lg:text-lg text-primary">Details</span>
        </div>
        <h1 className="text-[#BBBBBB] font-bold">
          July Expungement day for Freedom
        </h1>
      </div>
      {/* Table Wrapper */}
      <ExpungementHistoryFull />
    </div>
  );
}
