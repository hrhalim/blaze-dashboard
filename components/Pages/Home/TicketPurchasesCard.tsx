import Image, { StaticImageData } from "next/image";

import bessie1 from "@/public/images/bessie.png";
import bessie6 from "@/public/images/bessie6.png";
import bessie7 from "@/public/images/bessie7.png";
import bessie8 from "@/public/images/bessie2.png";

import ticketpurchasesimg1 from "@/public/images/ticketpurchasesimg1.png";
import ticketpurchasesimg2 from "@/public/images/ticketpurchasesimg2.png";
import ticketpurchasesimg3 from "@/public/images/ticketpurchasesimg3.png";
import ticketpurchasesimg4 from "@/public/images/ticketpurchasesimg4.png";

type TicketPurchaseItem = {
  eventImg: StaticImageData;
  title: string;
  price: string;
  tickets: string;
  buyerImg: StaticImageData;
  buyerName: string;
  location: string;
  revenue: string;
};

const ticketData: TicketPurchaseItem[] = [
  {
    eventImg: ticketpurchasesimg1,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "04",
    buyerImg: bessie1,
    buyerName: "Bessie Cooper",
    location: "6391 Elgin St. Celina, Delaware 10299",
    revenue: "$450",
  },
  {
    eventImg: ticketpurchasesimg2,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "04",
    buyerImg: bessie6,
    buyerName: "Ralph Edwards",
    location: "6391 Elgin St. Celina, Delaware 10299",
    revenue: "$450",
  },
  {
    eventImg: ticketpurchasesimg3,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "04",
    buyerImg: bessie7,
    buyerName: "Guy Hawkins",
    location: "6391 Elgin St. Celina, Delaware 10299",
    revenue: "$450",
  },
  {
    eventImg: ticketpurchasesimg4,
    title: "July Expungement day for Freedom",
    price: "$150",
    tickets: "04",
    buyerImg: bessie8,
    buyerName: "Arlene McCoy",
    location: "6391 Elgin St. Celina, Delaware 10299",
    revenue: "$450",
  },
];

export default function TicketPurchasesCard() {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="bg-nt130 rounded-[20px]">
        <div className="p-7.5">
          <h4 className="mb-1">Ticket Purchases</h4>
          <span className="text-[13px] text-nt160">
            Recent Ticket Purchases: 24
          </span>
        </div>

        <div className="px-4">
          <div className="w-full overflow-x-auto ticketpurchasestable">
            <table className={`w-full text-left min-w-[540px]`}>
              <thead className="bg-[#0A0A0A]">
                <tr>
                  <th className="text-primary font-medium text-nowrap">
                    Event & Price
                  </th>
                  <th className="text-primary font-medium text-nowrap">
                    Tickets
                  </th>
                  <th className="text-primary font-medium text-nowrap">
                    Buyer & Location
                  </th>
                  <th className="text-primary font-medium text-nowrap">
                    Revenue
                  </th>
                </tr>
              </thead>

              <tbody>
                {ticketData.map((item, index) => (
                  <tr key={index}>
                    <td className="font-medium text-nowrap py-5 border-b border-[#1F1F1F]">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0">
                          <Image
                            className="shrink-0"
                            src={item.eventImg}
                            alt="Images"
                          />
                        </div>
                        <div>
                          <span className="text-nt18 mb-1 text-wrap">
                            {item.title}
                          </span>

                          <div className="flex items-center gap-1">
                            <span className="text-[12px] text-nt160">
                              Price:
                            </span>
                            <span className="text-[12px] font-semibold text-primary">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[12px]! ps-7 py-5 border-b border-[#1F1F1F]">
                      {item.tickets}
                    </td>
                    <td className="py-5 border-b border-[#1F1F1F]">
                      <div className="flex gap-2">
                        <div className="shrink-0">
                          <Image
                            className="rounded-full border-2 border-nt30 shrink-0"
                            src={item.buyerImg}
                            alt="Images"
                          />
                        </div>
                        <div>
                          <span className="font-medium text-nt18 mb-0.5">
                            {item.buyerName}
                          </span>
                          <p className="text-[12px] text-nt160">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="ps-8 py-5 border-b border-[#1F1F1F]">
                      {item.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
