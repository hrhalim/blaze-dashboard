import Image, { StaticImageData } from "next/image";

import performance1 from "@/public/images/eventperformances1.png";
import performance2 from "@/public/images/eventperformances2.png";
import performance3 from "@/public/images/eventperformances3.png";
import performance4 from "@/public/images/eventperformances4.png";
import performance5 from "@/public/images/eventperformances5.png";
import performance6 from "@/public/images/eventperformances6.png";
import performance7 from "@/public/images/eventperformances7.png";
import Link from "next/link";

type Performance = {
  img: StaticImageData;
  event: string;
  date: string;
  time: string;
  location: string;
  attendance: number;
  signed: number;
  certified: number;
  volunteers: number;
  status: "Completed" | "Current" | "Cancel";
};

const data: Performance[] = [
  {
    img: performance1,
    event: "July Expungement day for Freedom",
    date: "Feb 11, 2014",
    time: "02:34 am",
    location: "6391 Elgin St. Celina, Delaware 10299",
    attendance: 1589,
    signed: 128,
    certified: 28800,
    volunteers: 50,
    status: "Current",
  },
  {
    img: performance2,
    event: "October Legal Aid Fair, Houston",
    date: "Feb 11, 2014",
    time: "02:34 am",
    location: "6391 Elgin St. Celina, Delaware 10299",
    attendance: 1589,
    signed: 128,
    certified: 28800,
    volunteers: 50,
    status: "Current",
  },
  {
    img: performance3,
    event: "October Legal Aid Fair, Houston",
    date: "Feb 11, 2014",
    time: "02:34 am",
    location: "6391 Elgin St. Celina, Delaware 10299",
    attendance: 1589,
    signed: 128,
    certified: 28800,
    volunteers: 50,
    status: "Completed",
  },
  {
    img: performance4,
    event: "October Legal Aid Fair, Houston",
    date: "Feb 11, 2014",
    time: "02:34 am",
    location: "6391 Elgin St. Celina, Delaware 10299",
    attendance: 1589,
    signed: 128,
    certified: 28800,
    volunteers: 50,
    status: "Completed",
  },
  {
    img: performance5,
    event: "October Legal Aid Fair, Houston",
    date: "Feb 11, 2014",
    time: "02:34 am",
    location: "6391 Elgin St. Celina, Delaware 10299",
    attendance: 1589,
    signed: 128,
    certified: 28800,
    volunteers: 50,
    status: "Completed",
  },
  {
    img: performance6,
    event: "October Legal Aid Fair, Houston",
    date: "Feb 11, 2014",
    time: "02:34 am",
    location: "6391 Elgin St. Celina, Delaware 10299",
    attendance: 1589,
    signed: 128,
    certified: 28800,
    volunteers: 50,
    status: "Cancel",
  },
  {
    img: performance7,
    event: "October Legal Aid Fair, Houston",
    date: "Feb 11, 2014",
    time: "02:34 am",
    location: "6391 Elgin St. Celina, Delaware 10299",
    attendance: 1589,
    signed: 128,
    certified: 28800,
    volunteers: 50,
    status: "Completed",
  },
];

const statusStyle = {
  Completed: "text-nt180 bg-[#34453C3D]",
  Current: "text-nt170 bg-[#FEC90F3D]",
  Cancel: "text-nt150 bg-[#FC4B6C3D]",
};

export default function EventPerformance() {
  return (
    <div className="mb-7.5">
      <div className="bg-nt130 p-7.5 rounded-[20px]">
        {/* HEADER */}
        <div className="mb-7.5 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h4 className="mb-1">Event Performance</h4>
            <span className="text-[#777E89] text-[13px]">
              Events: {data.length}
            </span>
          </div>

          {/* SEARCH */}
          <div className="flex items-center gap-7.5 flex-wrap">
            <form>
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
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="py-2 sm:py-3.5 px-4 text-center bg-[#1D1B26] rounded-lg">
                Draft
              </Link>
              <Link href="/" className="btngrdnt">
                <span className="py-2 sm:py-3.5 px-5 btngrdnt-child text-center gap-2">
                  Active
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="w-full overflow-x-auto experformance">
          <table className="w-full text-left min-w-[1050px]">
            <thead className="bg-[#0A0A0A]">
              <tr>
                <th className="text-primary font-medium py-4 ps-7.5">
                  Event Name
                </th>
                <th className="text-primary font-medium text-nowrap py-4">
                  Date & Time
                </th>
                <th className="text-primary font-medium text-nowrap py-4">
                  Location
                </th>
                <th className="text-primary font-medium py-4 pr-5">
                  Registrants
                </th>
                <th className="text-primary font-medium py-4 ps-5">Status</th>
                <th className="text-primary font-medium py-4 text-nowrap pr-10">
                  Ticket Sales
                </th>
                <th className="text-primary font-medium text-nowrap py-4 pr-8">
                  Revenue ($)
                </th>
                <th className="text-primary font-medium py-4 pr-10">
                  Attend..rate
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, idx) => {
                const isLast = idx === data.length - 1;

                return (
                  <tr key={idx} className="py-5 px-4">
                    {/* EVENT */}
                    <td
                      className={`font-medium py-5 pr-5 w-[20%] ${
                        !isLast ? "border-b border-[#1F1F1F]" : ""
                      }`}>
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.img}
                          alt="Event"
                          className="shrink-0"
                        />
                        <span className="text-nt18">{item.event}</span>
                      </div>
                    </td>

                    {/* DATE / TIME */}
                    <td
                      className={`pr-10 tbneedsnotify ${
                        !isLast ? "border-b border-[#1F1F1F]" : ""
                      }`}>
                      <span className="font-medium text-nowrap">
                        {item.date}
                      </span>
                      <span className="font-medium text-nowrap">
                        {item.time}
                      </span>
                    </td>

                    {/* LOCATION */}
                    <td
                      className={`2xl:w-[18%] tbneedsnotify ${
                        !isLast ? "border-b border-[#1F1F1F] max-md:pr-10" : ""
                      }`}>
                      <span className="2xl:w-[70%]">{item.location}</span>
                    </td>

                    {/* NUMBERS */}
                    <td
                      className={`ps-5 tbneedsnotify ${
                        !isLast && "border-b border-[#1F1F1F]"
                      }`}>
                      {item.attendance}
                    </td>
                    {/* STATUS */}
                    <td
                      className={`pr-10 tbneedsnotify text-center ${
                        !isLast && "border-b border-[#1F1F1F]"
                      }`}>
                      <span
                        className={`cursor-pointer px-2.5 py-1.5 rounded-full text-sm ${
                          statusStyle[item.status]
                        }`}>
                        {item.status}
                      </span>
                    </td>
                    <td
                      className={`ps-7 tbneedsnotify ${
                        !isLast && "border-b border-[#1F1F1F]"
                      }`}>
                      {item.signed}
                    </td>
                    <td
                      className={`pr-5 tbneedsnotify text-center ${
                        !isLast ? "border-b border-[#1F1F1F]" : ""
                      }`}>
                      ${item.certified}
                    </td>
                    <td
                      className={`ps-8 tbneedsnotify ${
                        !isLast && "border-b border-[#1F1F1F]"
                      }`}>
                      {item.volunteers}%
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
