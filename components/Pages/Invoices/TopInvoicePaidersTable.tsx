import Image from "next/image";

import topcientsinvoice1 from "@/public/images/topcientsinvoice1.png";
import topcientsinvoice3 from "@/public/images/topcientsinvoice3.png";
import topcientsinvoice4 from "@/public/images/topcientsinvoice4.png";
import topcientsinvoice5 from "@/public/images/topcientsinvoice5.png";
import topcientsinvoice6 from "@/public/images/topcientsinvoice6.png";
import topcientsinvoice7 from "@/public/images/topcientsinvoice7.png";
import topcientsinvoice8 from "@/public/images/topcientsinvoice8.png";
import topcientsinvoice9 from "@/public/images/topcientsinvoice9.png";

const topPaiders = [
  {
    image: topcientsinvoice1,
    name: "Courtney Henry",
    company: "Company name",
    invoices: 44,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice4,
    name: "Kristin Watson",
    company: "Company name",
    invoices: 42,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice3,
    name: "Bessie Cooper",
    company: "Company name",
    invoices: 40,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice4,
    name: "Cody Fisher",
    company: "Company name",
    invoices: 38,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice5,
    name: "Robert Fox",
    company: "Company name",
    invoices: 36,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice6,
    name: "Arlene McCoy",
    company: "Company name",
    invoices: 34,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice7,
    name: "Jerome Bell",
    company: "Company name",
    invoices: 32,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice8,
    name: "Darrell Steward",
    company: "Company name",
    invoices: 30,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
  {
    image: topcientsinvoice9,
    name: "Annette Black",
    company: "Company name",
    invoices: 24,
    lastPaidDate: "November 25, 2025",
    lastPaidTime: "08:30 am",
    email: "john@email.com",
    totalRevenue: "$9,576",
    status: "Active",
  },
];

export default function TopInvoicePaidersTable() {
  return (
    <div className="w-full overflow-x-auto newexreqtwo z-0">
      <table className="w-full text-left min-w-[991px]">
        <thead className="bg-[#0A0A0A]">
          <tr className="my-4 mx-7.5">
            <th className="text-primary font-medium py-5 ps-7.5">
              Name & Company
            </th>
            <th className="text-primary font-medium py-5 ps-5">
              Invoices sent
            </th>
            <th className="text-primary font-medium text-nowrap py-5 ps-5">
              Last Paid
            </th>
            <th className="text-primary font-medium text-nowrap py-5 ps-5">
              Contact
            </th>
            <th className="text-primary font-medium py-5 ps-6">
              Total Revenue
            </th>
            <th className="text-primary font-medium py-5 ps-10"> Status </th>
          </tr>
        </thead>

        <tbody>
          {topPaiders.map((item, index) => (
            <tr key={index} className="py-5 px-4">
              <td
                className={`font-medium text-nowrap tbneeds ${
                  index !== topPaiders.length - 1
                    ? "border-b border-[#1F1F1F]"
                    : ""
                }`}>
                <div className="flex items-center gap-3">
                  <Image src={item.image} alt="table image" />

                  <div>
                    <span className="0.5 lg:text-base text-nt18">
                      {item.name}
                    </span>
                    <span className="text-xs text-nt160">{item.company}</span>
                  </div>
                </div>
              </td>

              <td
                className={`text-nowrap tbneeds font-medium ${
                  index !== topPaiders.length - 1
                    ? "border-b border-[#1F1F1F]"
                    : ""
                }`}>
                {item.invoices}
              </td>

              <td
                className={`tbneeds ${
                  index !== topPaiders.length - 1
                    ? "border-b border-[#1F1F1F]"
                    : ""
                }`}>
                <span className="text-[12px]! font-medium">
                  {item.lastPaidDate}
                </span>
                <span className="text-[12px]! font-medium">
                  {item.lastPaidTime}
                </span>
              </td>

              <td
                className={`text-nowrap font-medium tbneeds ${
                  index !== topPaiders.length - 1
                    ? "border-b border-[#1F1F1F]"
                    : ""
                }`}>
                <span className="text-blue-400">{item.email}</span>
              </td>

              <td
                className={`text-[12px]! tbneeds ${
                  index !== topPaiders.length - 1
                    ? "border-b border-[#1F1F1F]"
                    : ""
                }`}>
                {item.totalRevenue}
              </td>

              <td
                className={`text-nowrap tbneeds ${
                  index !== topPaiders.length - 1
                    ? "border-b border-[#1F1F1F]"
                    : ""
                }`}>
                <span className="text-nt180 font-medium bg-[#2F4B393D] px-1.5 py-1.5 rounded-full text-center">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
