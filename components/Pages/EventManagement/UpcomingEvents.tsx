import Image from "next/image";
import upcomingevents11 from "@/public/images/upcomingevents11.png";
import upcomingevents12 from "@/public/images/upcomingevents12.png";
import upcomingevents13 from "@/public/images/upcomingevents13.png";

export default function UpcomingEvents() {
  return (
    <div className="bg-nt130 rounded-[20px] h-full">
      <div className="py-6 px-4">
        <h4 className="mb-1 text-nt18">Upcoming Expungement</h4>
      </div>
      <div className="max-h-[500px] 2xl:max-h-[550px] overflow-y-auto">
        <div className="pb-6 px-6">
          <div className="flex items-start flex-wrap 2xl:flex-nowrap gap-[13px] mb-3">
            <div className="">
              <Image src={upcomingevents11} alt="Images" />
            </div>
            <div className="">
              <span className="text-nt18 text-lg mb-2">
                Newark Expungement Clinic
              </span>
              <span className="text-nt160">Venue Name</span>
            </div>
          </div>
          <div className="">
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-1">
                <i className="ph ph-calendar text-nt160 text-base"></i>
                <span className="text-nt160 text-[12px]">October 25, 2025</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <i className="ph ph-map-pin text-nt160 text-base"></i>
                <span className="text-nt160 text-[12px]">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt190 bg-[#4FFC1A14]">
                80 Registered
              </span>
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt140 bg-[#1a9afc12]">
                80 Registered
              </span>
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt150 bg-[#fc4b6c1b]">
                80 Registered
              </span>
            </div>
          </div>
        </div>
        <div className="pb-6 px-6">
          <div className="flex items-start flex-wrap 2xl:flex-nowrap gap-[13px] mb-3">
            <div className="">
              <Image src={upcomingevents12} alt="Images" />
            </div>
            <div className="">
              <span className="text-nt18 text-lg mb-2">
                Newark Expungement Clinic
              </span>
              <span className="text-nt160">Venue Name</span>
            </div>
          </div>
          <div className="">
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-1">
                <i className="ph ph-calendar text-nt160 text-base"></i>
                <span className="text-nt160 text-[12px]">October 25, 2025</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <i className="ph ph-map-pin text-nt160 text-base"></i>
                <span className="text-nt160 text-[12px]">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt190 bg-[#4FFC1A14]">
                80 Registered
              </span>
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt140 bg-[#1a9afc12]">
                80 Registered
              </span>
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt150 bg-[#fc4b6c1b]">
                80 Registered
              </span>
            </div>
          </div>
        </div>
        <div className="pb-6 px-6">
          <div className="flex items-start flex-wrap 2xl:flex-nowrap gap-[13px] mb-3">
            <div className="">
              <Image src={upcomingevents13} alt="Images" />
            </div>
            <div className="">
              <span className="text-nt18 text-lg mb-2">
                Newark Expungement Clinic
              </span>
              <span className="text-nt160">Venue Name</span>
            </div>
          </div>
          <div className="">
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-1">
                <i className="ph ph-calendar text-nt160 text-base"></i>
                <span className="text-nt160 text-[12px]">October 25, 2025</span>
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <i className="ph ph-map-pin text-nt160 text-base"></i>
                <span className="text-nt160 text-[12px]">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt190 bg-[#4FFC1A14]">
                80 Registered
              </span>
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt140 bg-[#1a9afc12]">
                80 Registered
              </span>
              <span className="text-[10px] text-nowrap py-1 px-1.5 rounded-full text-nt150 bg-[#fc4b6c1b]">
                80 Registered
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
