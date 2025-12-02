import Link from "next/link";
import bessie1 from "@/public/images/bessie.png";
import Image from "next/image";

export default function Audience() {
  return (
    <div className="col-span-12 md:col-span-4 bg-nt130 rounded-[20px] p-7.5">  
           <h4 className="mb-1 text-[#FFFFFFCC] border-b border-[#1F1F1F] pb-5 mb-4">Audience</h4>  
           <div className="w-full overflow-x-auto newordertable">
               <div className="flex items-center justify-between py-3">
                   <span className="text-base mb-0.5 font-medium max-w-[180px] text-[#FFFFFFCC]">
                      New Jersey
                    </span>
                    
               </div>
           </div>
       </div>
  );
}
