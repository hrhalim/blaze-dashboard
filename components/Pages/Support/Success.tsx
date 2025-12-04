import success from "@/public/images/support/result.webp";
import Image from "next/image";

export default function Success() {
  return (
    <div className="p-10 bg-[#131313] rounded-2xl h-dvh mb-12"> 
        <h1 className="text-[#ffffff] text-[24px] pb-6">How we can help you?</h1>
        <form action="">
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
        <h2 className="text-[#ffffff] text-[32px] pb-4 pt-8 font-semibold">Conversations with London Makr</h2>
        <div className="flex items-center gap-6 pb-5">
            <span className="bg-[#2D2C2C] text-[#ffffff] text-[16px] py-2 px-3 rounded-full">Popular Articles</span>
            <span className=" text-[#ffffff] text-[16px]">Olivia Rhye . 20 Jan 2025</span>
        </div>
        <p className="text-[#777E89] line-height-[150%] pb-6">To be the leading authority in cannabis law, empowering businesses and individuals with the knowledge and support needed to navigate regulations confidently, foster compliance, and drive success in the evolving cannabis industry.</p>
        <Image className="w-full" src={success} alt="No Result" /> 
        <h2 className="text-[#ffffff] text-[24px] pb-3 pt-3 font-semibold">Achieve a profitable harvest</h2>
        <p className="text-[#777E89] line-height-[150%] pb-6">To be the leading authority in cannabis law, empowering businesses and individuals with the knowledge and support needed to navigate regulations confidently, foster compliance, and drive success in the evolving cannabis industry. We aim to create a legal framework that encourages growth, innovation, To be the leading authority in cannabis law, empowering businesses and individuals with the knowledge and support needed to navigate regulations confidently, foster compliance, and drive success in the evolving cannabis industry. We aim to create a legal framework that encourages growth, innovation,</p>
        <p className="text-[#777E89] line-height-[150%] pb-3">To be the leading authority in cannabis law, empowering businesses and individuals with the knowledge and support needed to navigate regulations confidently, </p>
        <h2 className="text-[#ffffff] text-[24px] pb-3 pt-3 font-semibold">Achieve a profitable harvest</h2>
        <p className="text-[#777E89] line-height-[150%] pb-6">To be the leading authority in cannabis law, empowering businesses and individuals with the knowledge and support needed to navigate regulations confidently, foster compliance, and drive success in the evolving cannabis industry. We aim to create a legal framework that encourages growth, innovation, To be the leading authority in cannabis law, empowering businesses and individuals with the knowledge and support needed to navigate regulations confidently, foster compliance, and drive success in the evolving cannabis industry. We aim to create a legal framework that encourages growth, innovation,</p>
        <p className="text-[#777E89] line-height-[150%] pb-6">To be the leading authority in cannabis law, empowering businesses and individuals with the knowledge and support needed to navigate regulations confidently,</p>
       
    </div>
 );
}