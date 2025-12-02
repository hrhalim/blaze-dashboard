import Image from "next/image";
import todayexpungement from "@/public/images/todayexpungement.png";
import Link from "next/link";

export default function TodayExpungement() {
  return (
    <div className="bg-nt130 px-5 lg:px-7.5 pt-5 lg:pt-7.5 pb-5 lg:pb-9 rounded-[20px]">
      <h4 className="text-nt18 mb-8.5">Today’s Expungement</h4>
      <div className="flex items-start max-sm:flex-wrap gap-4 mb-7 sm:mb-10 xl:mb-16">
        <div className="w-full">
          <Image
            className="w-full"
            src={todayexpungement}
            alt="Today Expungement"
          />
        </div>
        <div className="w-full">
          <h3 className="mb-3.5">July Expungement day for Freedom</h3>
          <div className="flex items-center gap-1 mb-3.5">
            <span className="text-nt160 fs-five">Date: </span>
            <span className="fs-five">July 14, 2025</span>
          </div>
          <div className="mb-3.5">
            <span className="text-nt160 fs-five inline">Location: </span>
            <span className="fs-five text-nt10 inline">
              4517 Washington Ave, Manchester, Kentucky 39495
            </span>
          </div>
          <div className="flex items-start gap-1">
            <span className="text-nt160 fs-five">Total Registered:</span>
            <span className="fs-five">2,645</span>
          </div>
        </div>
      </div>
      <div className="grid-cols-12 gap-2 mb-5 hidden">
        <div className="col-span-6 sm:col-span-4">
          <div className="text-center bg-[#1D1B26] py-7 rounded-xl">
            <span className="text-[#878787] text-xs mb-3">Present</span>
            <span className="text-primary font-medium text-3xl md:text-[40px]">
              763
            </span>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-4">
          <div className="text-center bg-[#1D1B26] py-7 rounded-xl">
            <span className="text-[#878787] text-xs mb-3">In Queue</span>
            <span className="text-primary font-medium text-3xl md:text-[40px]">
              432
            </span>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4">
          <div className="text-center bg-[#1D1B26] py-7 rounded-xl">
            <span className="text-[#878787] text-xs mb-3">Not Attended</span>
            <span className="text-primary font-medium text-3xl md:text-[40px]">
              243
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Link href="/" className="btngrdnt">
          <span className="btngrdnt-child px-8 py-3">Enter Expungement</span>
        </Link>
      </div>
    </div>
  );
}
