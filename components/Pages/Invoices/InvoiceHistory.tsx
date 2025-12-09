"use client";
import { useToggle } from "@/hooks/useToggle";
import NewExReTabs from "../Home/NewExReTabs";

type Invoice = {
  id: string;
  client: string;
  company: string;
  amount: string;
  status: "Paid" | "Cancelled" | "Past Due";
  sentDate: string;
  dueDate: string;
  payment: string;
};

const invoices: Invoice[] = [
  {
    id: "#in-1012",
    client: "Wade Warren",
    company: "Company name",
    amount: "$1,200",
    status: "Paid",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
  {
    id: "#in-1012",
    client: "Darlene Robertson",
    company: "Company name",
    amount: "$1,200",
    status: "Paid",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
  {
    id: "#in-1012",
    client: "Kathryn Murphy",
    company: "Company name",
    amount: "$1,200",
    status: "Cancelled",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
  {
    id: "#in-1012",
    client: "Guy Hawkins",
    company: "Company name",
    amount: "$1,200",
    status: "Paid",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
  {
    id: "#in-1012",
    client: "Jane Cooper",
    company: "Company name",
    amount: "$1,200",
    status: "Paid",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
  {
    id: "#in-1012",
    client: "Annette Black",
    company: "Company name",
    amount: "$1,200",
    status: "Past Due",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
  {
    id: "#in-1012",
    client: "Darrell Steward",
    company: "Company name",
    amount: "$1,200",
    status: "Paid",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
  {
    id: "#in-1012",
    client: "Kristin Watson",
    company: "Company name",
    amount: "$1,200",
    status: "Paid",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
    payment: "Credit Card",
  },
];

const statusColor: Record<string, string> = {
  Paid: "text-[#39CB7F]",
  Cancelled: "text-nt150",
  "Past Due": "text-primary",
};

export default function InvoiceHistory() {
  const { open, toggle } = useToggle(false);

  return (
    <div>
      {/* Table Wrapper */}
      <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
          <div className="">
            <h4 className="text-nt18 mb-1">Invoice History</h4>
            <span className="text-[13px] text-nt160">
              Total Transactions: {invoices.length}
            </span>
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

            <button onClick={toggle} className="btngrdnt">
              <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
                March 2025 <i className="ph ph-caret-down"></i>
              </span>
            </button>

            {open && (
              <div className="absolute top-68 sm:top-40 right-7 w-[260px] transition-all">
                <div className="p-5 bg-white shadow-lg rounded-xl">
                  <NewExReTabs />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto z-0 activeinvoices">
          <table className="w-full text-left min-w-[850px]">
            <thead className="bg-[#0A0A0A]">
              <tr>
                <th className="text-primary font-medium py-4 ps-7.5">
                  Invoice ID
                </th>
                <th className="text-primary font-medium py-4 ps-10">
                  Client & Company
                </th>
                <th className="text-primary font-medium py-4 ps-10">Amount</th>
                <th className="text-primary font-medium py-4 ps-10">Status</th>
                <th className="text-primary font-medium py-4 ps-10">
                  Sent Date
                </th>
                <th className="text-primary font-medium py-4 ps-10">
                  Due Date
                </th>
                <th className="text-primary font-medium py-4 ps-10">
                  Payment Method
                </th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((item, index) => {
                const isLast = index === invoices.length - 1;
                const borderClass = isLast ? "" : "border-b border-[#1F1F1F]";

                return (
                  <tr key={index} className="py-5 px-4">
                    <td
                      className={`font-medium text-nowrap ps-7.5 py-4 ${borderClass}`}>
                      {item.id}
                    </td>

                    <td className={`${borderClass} py-4 ps-10`}>
                      <span className="font-medium text-secondary1">
                        {item.client}
                      </span>
                      <span className="text-xs text-nt160 block">
                        {item.company}
                      </span>
                    </td>

                    <td
                      className={`${borderClass} text-nt170 font-medium py-4 ps-10`}>
                      {item.amount}
                    </td>

                    <td
                      className={`text-nowrap font-medium py-4 ps-10 ${
                        statusColor[item.status]
                      } ${borderClass}`}>
                      {item.status}
                    </td>

                    <td
                      className={`text-nowrap font-medium py-4 ps-10 ${borderClass}`}>
                      {item.sentDate}
                    </td>

                    <td className={`font-medium py-4 ps-10 ${borderClass}`}>
                      {item.dueDate}
                    </td>

                    <td className={`font-medium py-4 ps-14 ${borderClass}`}>
                      {item.payment}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
