import Link from "next/link";
import Image from "next/image";
import topclients1 from "@/public/images/topclients1.png";
import topclients2 from "@/public/images/topclients2.png";
import topclients3 from "@/public/images/topclients3.png";
import topclients4 from "@/public/images/topclients4.png";
import topclients5 from "@/public/images/topclients5.png";
import topclients6 from "@/public/images/topclients6.png";
import topclients7 from "@/public/images/topclients7.png";

export default function TopClients() {
  const clients = [
    {
      name: "Brooklyn Simmons",
      company: "Bluewave Solutions",
      transactions: 45,
      amount: "$2300",
      bg: "bg-[#1A9BFC1F]",
      color: "text-secondary1",
    },
    {
      name: "Cody Fisher",
      company: "NovaTech Corp",
      transactions: 32,
      amount: "$1300",
      bg: "bg-[#1A9BFC1F]",
      color: "text-secondary1",
    },
    {
      name: "Emily Carter",
      company: "BrightPath LLC",
      transactions: 27,
      amount: "$1200",
      bg: "bg-[#39CB7F1F]",
      color: "text-nt180",
    },
    {
      name: "Michael Green",
      company: "Skyline Media",
      transactions: 54,
      amount: "$5300",
      bg: "bg-[#FEC90F1F]",
      color: "text-nt170",
    },
    {
      name: "Olivia Brown",
      company: "PixelPoint Studios",
      transactions: 19,
      amount: "$1300",
      bg: "bg-[#FC4B6C1F]",
      color: "text-nt150",
    },
    {
      name: "Daniel Roberts",
      company: "NextGen Holdings",
      transactions: 42,
      amount: "$1300",
      bg: "bg-[#1A9BFC1F]",
      color: "text-secondary1",
    },
    {
      name: "Sophia Wilson",
      company: "QuantumSoft",
      transactions: 38,
      amount: "$1450",
      bg: "bg-[#39CB7F1F]",
      color: "text-nt180",
    },
  ];

  const images = [
    topclients1,
    topclients2,
    topclients3,
    topclients4,
    topclients5,
    topclients6,
    topclients7,
  ];

  return (
    <div>
      {/* Table Wrapper */}
      <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
          <h4 className="text-nt18 mb-1">Top Clients</h4>
          <Link href="/expungements" className="btngrdnt block">
            <span className="btngrdnt-child py-3 px-5 rounded-lg">See all</span>
          </Link>
        </div>
        <div>
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="shrink-0">
                  <Image
                    className="shrink-0"
                    src={images[index]}
                    alt={client.name}
                  />
                </div>
                <div>
                  <span className="lg:text-base text-nt18 font-medium mb-0.5">
                    {client.name}
                  </span>
                  <span className="text-xs text-nt160">{client.company}</span>
                  <span className="text-xs text-nt160">
                    Transactions: {client.transactions}
                  </span>
                </div>
              </div>
              <div>
                <span
                  className={`${client.color} font-semibold text-xs py-[5px] px-2 rounded-full ${client.bg}`}>
                  {client.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
