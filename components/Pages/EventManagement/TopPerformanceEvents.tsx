import Image, { StaticImageData } from "next/image";
import topperformanceevents1 from "@/public/images/topperformanceevents1.png";
import topperformanceevents2 from "@/public/images/topperformanceevents2.png";
import topperformanceevents3 from "@/public/images/topperformanceevents3.png";
import topperformanceevents4 from "@/public/images/topperformanceevents4.png";

type EventItem = {
  img: StaticImageData;
  title: string;
  sold: number;
};

const topEvents: EventItem[] = [
  {
    img: topperformanceevents1,
    title: "July Expungement day for Freedom",
    sold: 1287,
  },
  {
    img: topperformanceevents2,
    title: "July Expungement day for Freedom",
    sold: 978,
  },
  {
    img: topperformanceevents3,
    title: "July Expungement day for Freedom",
    sold: 1287,
  },
  {
    img: topperformanceevents4,
    title: "July Expungement day for Freedom",
    sold: 1164,
  },
];

export default function TopPerformanceEvents() {
  return (
    <div className="p-5 lg:p-7.5 bg-nt130 rounded-[20px]">
      <h4 className="text-nt18 mb-4 md:mb-6">Top Performance Events</h4>

      <hr className="text-[#1F1F1F] h-0.5 mb-4 md:mb-6" />

      <div>
        {topEvents.map((e, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-5 mb-4 md:mb-6">
            {/* Left: Image + title */}
            <div className="flex items-center gap-1.5">
              <Image src={e.img} alt={e.title} />
              <span className="text-xs font-medium text-nt18">{e.title}</span>
            </div>

            {/* Right: Tickets sold */}
            <div className="text-end">
              <span className="font-medium">{e.sold}</span>
              <span className="text-xs text-nt160 text-nowrap">
                Tickets sold
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
