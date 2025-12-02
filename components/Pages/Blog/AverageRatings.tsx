import Link from "next/link";
import bessie1 from "@/public/images/bessie.png";
import Image from "next/image";

export default function AverageRatings() {
  return (
    <div className="col-span-12 md:col-span-4 bg-nt130 rounded-[20px] p-7.5 h-[300]">  
        <h4 className="mb-1 text-[#FFFFFFCC] border-b border-[#1F1F1F] pb-5 mb-4">Average Ratings</h4>  
        {/* Item  */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between gap-3">
            <ul className="flex items-center gap-1">
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
            </ul>
            <div className="relative">
              <span className="w-[70px] h-[6px] bg-[#F8F0F0] rounded-[5px]"></span>
              <span className="w-[65px] h-[6px] bg-[#FEC90F] rounded-[24px] absolute top-0 left-0"></span>
            </div>
          </div>
          <span className="text-[16px] font-medium">55</span>
        </div>
        {/* Item  */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between gap-3">
            <ul className="flex items-center gap-1">
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#777E89] ph ph-star"></i></li>
            </ul>
            <div className="relative">
              <span className="w-[70px] h-[6px] bg-[#F8F0F0] rounded-[5px]"></span>
              <span className="w-[50px] h-[6px] bg-[#FEC90F] rounded-[24px] absolute top-0 left-0"></span>
            </div>
          </div>
          <span className="text-[16px] font-medium">35</span>
        </div>
        {/* Item  */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between gap-3">
            <ul className="flex items-center gap-1">
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#777E89] ph ph-star"></i></li>
              <li><i className="text-[#777E89] ph ph-star"></i></li>
            </ul>
            <div className="relative">
              <span className="w-[70px] h-[6px] bg-[#F8F0F0] rounded-[5px]"></span>
              <span className="w-[40px] h-[6px] bg-[#FEC90F] rounded-[24px] absolute top-0 left-0"></span>
            </div>
          </div>
          <span className="text-[16px] font-medium">34</span>
        </div>
        {/* Item  */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center justify-between gap-3">
            <ul className="flex items-center gap-1">
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#FEC90F] ph ph-star"></i></li>
              <li><i className="text-[#777E89] ph ph-star"></i></li>
              <li><i className="text-[#777E89] ph ph-star"></i></li>
              <li><i className="text-[#777E89] ph ph-star"></i></li>
            </ul>
            <div className="relative">
              <span className="w-[70px] h-[6px] bg-[#F8F0F0] rounded-[5px]"></span>
              <span className="w-[25px] h-[6px] bg-[#FEC90F] rounded-[24px] absolute top-0 left-0"></span>
            </div>
          </div>
          <span className="text-[16px] font-medium">30</span>
        </div>
    </div>
  );
}
