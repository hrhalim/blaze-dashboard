"use client";
import Image, { StaticImageData } from "next/image";
import ticket1 from "@/public/images/ticketpurchasesimg1.png";
import ticket2 from "@/public/images/ticketpurchasesimg2.png";
import ticket3 from "@/public/images/ticketpurchasesimg3.png";
import ticket4 from "@/public/images/ticketpurchasesimg4.png";

type Purchase = {
  img: StaticImageData;
  title: string;
  price: string;
  tickets: string;
  buyer: string;
  date: string;
  contact: string;
  revenue: string;
  status: string;
};

const purchases: Purchase[] = [
  {
    img: ticket1,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "03",
    buyer: "Ralph Edwards",
    date: "November 25, 2025 08:30 am",
    contact: "john@email.com",
    revenue: "$450",
    status: "Pending",
  },
  {
    img: ticket2,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "03",
    buyer: "Ralph Edwards",
    date: "November 25, 2025 08:30 am",
    contact: "john@email.com",
    revenue: "$450",
    status: "Pending",
  },
  {
    img: ticket3,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "03",
    buyer: "Ralph Edwards",
    date: "November 25, 2025 08:30 am",
    contact: "john@email.com",
    revenue: "$450",
    status: "Pending",
  },
  {
    img: ticket4,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "03",
    buyer: "Ralph Edwards",
    date: "November 25, 2025 08:30 am",
    contact: "john@email.com",
    revenue: "$450",
    status: "Pending",
  },
];

export default function TicketHistory() {
  return (
    <div className="bg-nt130 p-7.5 mb-7.5 rounded-[20px]">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
        <div className="">
          <h4 className="text-nt18 mb-1">Expungement History</h4>
          <span className="text-[13px] text-nt160">Total Clients: 1000</span>
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
          <button className="btngrdnt">
            <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
              All <i className="ph ph-caret-down"></i>
            </span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto eventnotify">
        <table className="w-full text-left min-w-[1050px]">
          <thead className="bg-[#0A0A0A]">
            <tr>
              <th className="text-primary font-medium py-4 ps-7.5">
                Events & Price
              </th>
              <th className="text-primary font-medium py-4">Tickets</th>
              <th className="text-primary font-medium text-nowrap py-4">
                Buyer
              </th>
              <th className="text-primary font-medium text-nowrap py-4">
                Date & Time
              </th>
              <th className="text-primary font-medium py-4">Contact</th>
              <th className="text-primary font-medium text-nowrap py-4">
                Revenue
              </th>
              <th className="text-primary font-medium py-4 ps-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {purchases.map((item, idx) => {
              const isLast = idx === purchases.length - 1;

              return (
                <tr key={idx} className="py-5 px-4">
                  {/* Event & Price */}
                  <td
                    className={`font-medium text-nowrap py-5 pr-10 ${
                      !isLast ? "border-b border-[#1F1F1F]" : ""
                    }`}>
                    <div className="flex items-center gap-3">
                      <Image src={item.img} alt="Event" className="shrink-0" />
                      <div>
                        <span className="text-nt18 mb-1">{item.title}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-[12px] text-nt160">Price:</span>
                          <span className="text-[12px] font-semibold text-primary">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Tickets */}
                  <td
                    className={`pr-20 tbneedsnotify ${
                      !isLast ? "border-b border-[#1F1F1F]" : ""
                    }`}>
                    {item.tickets}
                  </td>

                  {/* Buyer */}
                  <td
                    className={`text-nowrap pr-20 text-nt18 tbneedsnotify ${
                      !isLast ? "border-b border-[#1F1F1F]" : ""
                    }`}>
                    {item.buyer}
                  </td>

                  {/* Date */}
                  <td
                    className={`text-[12px]! pr-20 text-nt18 tbneedsnotify ${
                      !isLast ? "border-b border-[#1F1F1F]" : ""
                    }`}>
                    {item.date}
                  </td>

                  {/* Contact */}
                  <td
                    className={`text-nowrap pr-9 text-secondary1 tbneedsnotify ${
                      !isLast ? "border-b border-[#1F1F1F]" : ""
                    }`}>
                    {item.contact}
                  </td>

                  {/* Revenue */}
                  <td
                    className={`pr-20 tbneedsnotify text-nt18 ${
                      !isLast ? "border-b border-[#1F1F1F]" : ""
                    }`}>
                    {item.revenue}
                  </td>

                  {/* Status */}
                  <td
                    className={`pr-8 tbneedsnotify ${
                      !isLast ? "border-b border-[#1F1F1F]" : ""
                    }`}>
                    <span className="cursor-pointer px-2.5 py-1.5 rounded-full text-sm text-nt170 bg-[#4B452F3D]">
                      {item.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
