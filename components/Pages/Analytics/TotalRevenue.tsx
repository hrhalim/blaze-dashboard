import Image from "next/image";
import Link from "next/link";
import bannerthumb from "@/public/images/banner-thumb.png";

export default function TotalRevenue() {
  return (
    <div className="bg-nt130 rounded-[20px] flex items-center justify-between max-sm:flex-wrap gap-2 mb-12">
      <div className="flex items-start gap-6 pt-7.5 ps-7.5 pb-4 sm:pb-12.5">
        <span className="p-4.5 rounded-full bg-[#1e4cb725] d-center">
            <i className="ph ph-currency-dollar text-[#ffffff] text-2xl"></i>
        </span>
        <div>
            <span className="text-[21px] text-[#fffff] font-medium pb-1">Total Revenue</span>
            <h4 className="text-[40px] pb-5">$63,438.78</h4>
            <Link className="btngrdnt inline-block" href="/">
            <span className="btngrdnt-child py-3.5 px-14 rounded-lg text-[15px]">
                Withdraw
            </span>
            </Link>
        </div>
      </div>
      <div className="">
        <Image src={bannerthumb} alt="Banner Thumb" />
      </div>
    </div>
  );
}
