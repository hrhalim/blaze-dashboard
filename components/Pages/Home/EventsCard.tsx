import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import eventsimg1 from "@/public/images/events1.png";
import eventsimg2 from "@/public/images/events2.png";
import eventsimg3 from "@/public/images/events3.png";

type EventTag = {
  label: string;
  textColor: string;
  bgColor: string;
};

type EventItem = {
  image: StaticImageData;
  title: string;
  date: string;
  location: string;
  tags: EventTag[];
  statusTags: EventTag[];
};

const eventsData: EventItem[] = [
  {
    image: eventsimg1,
    title: "Blaze BlackTie Gala",
    date: "25/10/25",
    location: "2118 Thornridge Cir. Syracuse, Con..",
    tags: [
      { label: "Next", textColor: "text-secondary1", bgColor: "bg-[#141E26]" },
      {
        label: "New Jersey",
        textColor: "text-primary",
        bgColor: "bg-[#1D1B26]",
      },
    ],
    statusTags: [
      {
        label: "80 Registered",
        textColor: "text-nt190",
        bgColor: "bg-[#4FFC1A14]",
      },
      {
        label: "80 Registered",
        textColor: "text-nt140",
        bgColor: "bg-[#1a9afc12]",
      },
      {
        label: "80 Registered",
        textColor: "text-nt150",
        bgColor: "bg-[#fc4b6c1b]",
      },
    ],
  },
  {
    image: eventsimg2,
    title: "Blaze BlackTie Gala",
    date: "25/10/25",
    location: "2118 Thornridge Cir. Syracuse, Con..",
    tags: [
      { label: "Next", textColor: "text-secondary1", bgColor: "bg-[#141E26]" },
      {
        label: "New Jersey",
        textColor: "text-primary",
        bgColor: "bg-[#1D1B26]",
      },
    ],
    statusTags: [
      {
        label: "80 Registered",
        textColor: "text-nt190",
        bgColor: "bg-[#4FFC1A14]",
      },
      {
        label: "80 Registered",
        textColor: "text-nt140",
        bgColor: "bg-[#1a9afc12]",
      },
      {
        label: "80 Registered",
        textColor: "text-nt150",
        bgColor: "bg-[#fc4b6c1b]",
      },
    ],
  },
  {
    image: eventsimg3,
    title: "Blaze BlackTie Gala",
    date: "25/10/25",
    location: "2118 Thornridge Cir. Syracuse, Con..",
    tags: [
      { label: "Next", textColor: "text-secondary1", bgColor: "bg-[#141E26]" },
      {
        label: "New Jersey",
        textColor: "text-primary",
        bgColor: "bg-[#1D1B26]",
      },
    ],
    statusTags: [
      {
        label: "80 Registered",
        textColor: "text-nt190",
        bgColor: "bg-[#4FFC1A14]",
      },
      {
        label: "80 Registered",
        textColor: "text-nt140",
        bgColor: "bg-[#1a9afc12]",
      },
      {
        label: "80 Registered",
        textColor: "text-nt150",
        bgColor: "bg-[#fc4b6c1b]",
      },
    ],
  },
];

export default function EventsCard() {
  return (
    <div className="col-span-12 md:col-span-6 2xl:col-span-4">
      <div className="bg-nt130 rounded-[20px] py-6 px-4">
        <div className="flex justify-between flex-wrap mb-6">
          <div>
            <h4 className="text-nt18 mb-0.5 font-medium">Events</h4>
            <span className="text-nt160 font-normal text-[13px]">
              Total Events: {eventsData.length}
            </span>
          </div>

          <button className="size-12 rounded-full bg-[#1D1B26] d-center">
            <i className="ph ph-plus-circle text-primary"></i>
          </button>
        </div>
        <div className="max-h-[460px] 2xl:max-h-full overflow-y-auto">
          <hr className="text-[#1F1F1F] h-0.5 mb-5" />
          {eventsData.map((event, i) => (
            <div key={i}>
              <div className="mb-6">
                <div className="flex items-center flex-wrap 2xl:flex-nowrap gap-[13px]">
                  <Image src={event.image} alt={event.title} />
                  <div>
                    <span className="text-nt18 text-lg">{event.title}</span>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        {event.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-[10px] font-medium py-1 px-1.5 rounded-full cursor-pointer ${tag.textColor} ${tag.bgColor}`}>
                            {tag.label}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5">
                        <i className="ph ph-calendar text-nt160 text-base"></i>
                        <span className="text-nt160 text-[12px]">
                          {event.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <i className="ph ph-map-pin text-nt160 text-base"></i>
                      <span className="text-nt160 text-[12px]">
                        {event.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-1.5">
                      {event.statusTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] text-nowrap py-1 px-1.5 rounded-full ${tag.textColor} ${tag.bgColor}`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {i !== eventsData.length - 1 && (
                <hr className="text-[#1F1F1F] h-0.5 mb-5" />
              )}
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="w-full d-center py-3.5 px-4 rounded-lg bg-nt120 text-primary text-[15px] font-medium">
          View more
        </Link>
      </div>
    </div>
  );
}
