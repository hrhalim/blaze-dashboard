import Image from "next/image";
import todayexpungement from "@/public/images/todayexpungement.png";
import Link from "next/link";

export default function EventDetailsMain() {
  return (
    <div className="bg-nt130 px-5 lg:px-7.5 pt-5 lg:pt-7.5 pb-5 lg:pb-9 rounded-[20px]">
      <h4 className="text-nt18 mb-8.5">Event Details</h4>
      <div className="flex items-start max-sm:flex-wrap gap-4 mb-5">
        <div className="w-full">
          <Image
            className="w-full"
            src={todayexpungement}
            alt="Today Expungement"
          />
        </div>
        <div className="w-full">
          <h3 className="mb-3.5">
            Hilarious night of Cannabis law with Four First Richard{" "}
          </h3>
          <div className="flex items-center gap-1 mb-3.5">
            <span className="text-nt160 fs-five">Date: </span>
            <span className="fs-five">Fri 7 / 11 / 2025</span>
          </div>
          <div className="mb-3.5">
            <span className="text-nt160 fs-five inline">Location: </span>
            <span className="fs-five text-nt10 inline">
              4802 Lang Ave NE, Suite 110 Albuquerque, New Mexico, 82033 United
              States
            </span>
          </div>
          <div className="flex items-start gap-1">
            <span className="text-nt160 fs-five">Total Registered:</span>
            <span className="fs-five">2,645</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2 mb-5">
        <div className="col-span-6 sm:col-span-4">
          <div className="text-center bg-[#0A0A0A] py-7 rounded-xl">
            <span className="text-[#878787] text-xs mb-3">Present</span>
            <span className="text-primary font-medium text-3xl md:text-[40px]">
              763
            </span>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4">
          <div className="text-center bg-[#0A0A0A] py-7 rounded-xl">
            <span className="text-[#878787] text-xs mb-3">Not attended</span>
            <span className="text-primary font-medium text-3xl md:text-[40px]">
              35
            </span>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4">
          <div className="text-center bg-[#0A0A0A] py-7 rounded-xl">
            <span className="text-[#878787] text-xs mb-3">
              Event Ticket Price
            </span>
            <span className="text-primary font-medium text-3xl md:text-[40px]">
              $15.00
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Link href="/expungements-details" className="btngrdnt">
          <span className="btngrdnt-child px-8 py-3">Enter Event</span>
        </Link>
      </div>
    </div>
  );
}
