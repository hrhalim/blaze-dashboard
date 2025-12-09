"use client";

type Invoice = {
  id: string;
  client: string;
  company: string;
  status: string;
  amount: string;
  sentDate: string;
  dueDate: string;
};

const invoices: Invoice[] = [
  {
    id: "#in-1012",
    client: "Jerome Bell",
    company: "Bluewave Solutions",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
  {
    id: "#in-1012",
    client: "Sarah Mitchell",
    company: "NovaTech Corp",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
  {
    id: "#in-1012",
    client: "Alex Johnson",
    company: "BrightPath LLC",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
  {
    id: "#in-1012",
    client: "Emily Carter",
    company: "Skyline Media",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
  {
    id: "#in-1012",
    client: "Michael Green",
    company: "PixelPoint Studios",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
  {
    id: "#in-1012",
    client: "Olivia Brown",
    company: "NextGen Holdings",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
  {
    id: "#in-1012",
    client: "Daniel Roberts",
    company: "QuantumSoft",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
  {
    id: "#in-1012",
    client: "Sophia Wilson",
    company: "Apexline Ventures",
    status: "Pending",
    amount: "$1,200",
    sentDate: "Jul 24, 2025",
    dueDate: "Jul 24, 2025",
  },
];

export default function ActiveInvoicesTable() {
  return (
    <div className="w-full overflow-x-auto z-0 activeinvoices">
      <table className="w-full text-left min-w-[700px]">
        <thead className="bg-[#0A0A0A]">
          <tr className="my-4">
            <th className="text-primary font-medium py-4 ps-3.5">Invoice ID</th>
            <th className="text-primary font-medium py-4 ps-10">
              Client & Company
            </th>
            <th className="text-primary font-medium text-nowrap py-4 ps-10">
              Status
            </th>
            <th className="text-primary font-medium text-nowrap py-4 ps-10">
              Amount
            </th>
            <th className="text-primary font-medium py-4 ps-10">Sent Date</th>
            <th className="text-primary font-medium text-nowrap py-4 ps-10">
              Due Date
            </th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((item, index) => (
            <tr key={index} className="py-5 px-4">
              <td className="font-medium text-nowrap border-b border-[#1F1F1F] ps-3 py-4">
                {item.id}
              </td>

              <td className="border-b border-[#1F1F1F] py-4 ps-10">
                <span className="font-medium text-secondary1">
                  {item.client}
                </span>
                <span className="text-xs text-nt160 block">{item.company}</span>
              </td>

              <td className="border-b border-[#1F1F1F] text-nt170 font-medium py-4 ps-10">
                {item.status}
              </td>

              <td className="text-nowrap border-b border-[#1F1F1F] font-medium py-4 ps-10">
                {item.amount}
              </td>

              <td className="text-nowrap border-b border-[#1F1F1F] font-medium py-4 ps-10">
                {item.sentDate}
              </td>

              <td className="border-b border-[#1F1F1F] font-medium py-4 ps-10">
                {item.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
