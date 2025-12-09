import sign from "@/public/images/support//sign.svg";
import Image from "next/image";


export default function ExpungementsChecklistInformation() {

    return(
        <div className="fixed w-full h-full bg-[#0D0D0DE0] inset-0 p-3 flex items-center justify-center overflow-auto"> 
            <div className="w-full md:w-[617px] bg-white rounded-2xl m-auto px-3 md:px-6 pt-6 pb-4
            relative">
                <button className="w-[40px] h-[40px] rounded-full bg-[#F4F4F4] flex justify-center items-center absolute top-[24px] right-[24px]">
                    <i className="ph ph-x text-[#000000] text-[18px]"></i>
                </button>
                <h2 className="text-[#000000] font-semibold text-[24px] md:text-[32px] pb-6">Checklist Information</h2>
                <h3 className="text-[#000000] font-semibold text-[20px] pb-3">General Information</h3>
                <ul>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Name:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">Hatim Rahman Abdullah Orbix</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Address:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">2118 Thorndridge Cir, Syracuse, Connecticut 39495</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Address 2:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">4517 Washington Ave, Manchester, Kentucky 39495</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">City:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">Gelsenkirchen</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Address 3:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">5781 Spring St, Portsmouth, OH, 45662</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Zip Code:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">1082</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Phone Number:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">(201) 555-0124</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Email:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">willie.jennings@example.com</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Date of Birth:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">March 23, 2011</span></li>
                    <li className="grid grid-cols-[155px_1fr] pb-1"><span className="text-[#000000A3] text-[14px]">Your SBI# if available:</span> <span className="text-[#000000] text-[11px] md:text-[16px] font-semibold">Esther Howard</span></li>  
                </ul>
                <h3 className="text-[#000000] font-semibold text-[20px] pb-3 pt-4">Please Check Any That Apply to You:</h3>
                <div className="flex items-center gap-5 pb-5">
                    <span className="text-[#000000] text-[16px]">Selected:</span>
                    <span className="text-[#7E49FF] text-[16px] font-medium">Undocumented Individual</span>
                </div>
                <h3 className="text-[#000000] font-semibold text-[20px] pb-3">Check If You Have Been Convicted of Any Offense Below:</h3>
                <div className="md:flex items-center gap-5 pb-5">
                    <span className="text-[#000000] text-[16px]">Selected:</span>
                    <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-[#7E49FF] text-[16px] font-medium bg-[#7E49FF1A] py-1 px-2 rounded-full">Producing Chemical</span>
                        <span className="text-[#7E49FF] text-[16px] font-medium bg-[#7E49FF1A] py-1 px-2 rounded-full">Biological</span>
                        <span className="text-[#7E49FF] text-[16px] font-medium bg-[#7E49FF1A] py-1 px-2 rounded-full">Nuclear Devices</span>
                    </div>
                </div>
                <p className="text-[#000000] text-[16px] font-semibold pb-5">To the best of your knowledge, what were you charged with and where did the offense(s) occur, and what were the outcome(s)? If you do not recall, the Attorney(s) will do their best to look up this information.</p>
                <div className="md:flex items-center gap-5 pb-5">
                    <span className="text-[#000000] text-[16px]">Answer:</span>
                    <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-[#7E49FF] text-[16px] font-medium bg-[#7E49FF1A] py-1 px-2 rounded-full">Producing Chemical</span>
                        <span className="text-[#7E49FF] text-[16px] font-medium bg-[#7E49FF1A] py-1 px-2 rounded-full">Biological</span>
                        <span className="text-[#7E49FF] text-[16px] font-medium bg-[#7E49FF1A] py-1 px-2 rounded-full">Nuclear Devices</span>
                    </div>
                </div>
                <p className="text-[#000000A3] text-[16px] font-medium">Thank you for completing this Intake Form. By signing below and clicking "Submit" you agree to the terms listed above and permit the Attorney(s) to look up your court records in NJ in an attempt to prepare and submit an expungement petition on your behalf.</p>
                <div className="border border-[#1F1F1F] rounded-[8px] p-5 mt-5 mb-6 flex items-center justify-center">
                    <Image src={sign} alt="Sign"></Image>
                </div>
                <div className="flex justify-center gap-6">
                    <button className="bg-[#FA2415] text-[16px] text-[#ffffff] py-4 px-7 w-full rounded-[8px]">Ineligible</button>
                    <button className="bg-[#39CB7F] text-[16px] text-[#ffffff] py-4 px-7 w-full rounded-[8px]">Eligible</button>
                </div>
            </div> 
        </div>
    )
    
}