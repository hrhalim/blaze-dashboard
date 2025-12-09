import Image from "next/image";
import Link from "next/link";
import bannerthumb from "@/public/images/banner-thumb.png";

export default function WelBanner() {
  return (
    <div className="bg-nt130 rounded-[20px] flex items-center justify-between max-sm:flex-wrap gap-2">
      <div className="pt-7.5 ps-5 sm:ps-7.5 pb-4 sm:pb-12.5">
        <h4 className="mb-6">You have 4 new notifications.</h4>
        <Link className="btngrdnt inline-block" href="/notifications">
          <span className="btngrdnt-child py-3.5 px-4 rounded-lg text-[15px]">
            View Notifications
          </span>
        </Link>
      </div>
      <div className="">
        <Image src={bannerthumb} alt="Banner Thumb" />
      </div>
    </div>
  );
}
