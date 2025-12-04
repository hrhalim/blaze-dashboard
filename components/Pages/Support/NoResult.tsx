import noResult from "@/public/images/support/no-result.svg";
import Image from "next/image";

export default function NoResult() {
  return (
    <div className="pt-11 px-4 bg-[#131313] rounded-2xl h-dvh"> 
        <h1 className="text-[#ffffff] text-[24px] text-center pb-6">How we can help you?</h1>
        <form className="max-w-[580px] m-auto" action="">
            <div className="flex items-center gap-2 py-3.5 px-4 bg-nt120 rounded-full">
                <span className="d-center cursor-pointer">
                <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
                </span>
                <input
                className="bg-transparent placeholder:text-nt160 text-[#ffffff] sm:min-w-[315px]"
                type="text"
                placeholder="Write your question here..."
                />
            </div>
        </form>
        <div className="max-w-[488] m-auto text-center">
             <Image className="m-auto block pt-2" src={noResult} alt="No Result" /> 
             <h2 className="text-[#ffffff] text-[28px] text-center pb-4 pt-3">No Result available</h2>
             <p className="text-[#777E89] line-height-[150%]">There are no Product orders in your timeline right now. We'll let you know when something new arrives!</p>
        </div>
    </div>
 );
}