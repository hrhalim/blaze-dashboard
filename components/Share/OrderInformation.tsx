import Image from "next/image";
import balcktshart1 from "@/public/images/blackshirt1.png";
import bag from "@/public/images/bag.png";
import hat1 from "@/public/images/hat.png";

export default function OrderInformation() {

    return(
        <div className="fixed w-full h-full bg-[#0D0D0DE0] inset-0 p-3 flex items-center justify-center overflow-auto"> 
            <div className="w-full md:w-[520px] bg-white m-auto px-3 md:px-5 pt-6 pb-4
            relative rounded-[16px]">
                <h2 className="text-[#000000] font-bold text-[20px] pb-5">Order Information</h2>
                 <ul className="flex justify-between flex-wrap">
                    <li><span className="text-[#000000A3] text-[12px]">Buyer:</span> <span className="text-[#000000] text-[12px] font-medium">Bessie Cooper</span></li>
                    <li><span className="text-[#000000A3] text-[12px]">Shipping Address: </span> <span className="text-[#000000] text-[12px] font-medium">6391 Elgin St. Celina, Delaware 10299</span></li>
                    <li><span className="text-[#000000A3] text-[12px]">Phone</span> <span className="text-[#000000] text-[12px] font-medium">(629) 555-0129</span></li>
                </ul> 
                <h2 className="text-[#000000] font-medium text-[16px] pb-6 border-t-[1px] border-[#EEEAF7] pt-4 mt-4">Order Information</h2>
                <div className="flex justify-between items-center pb-3 border border-b-[#F2F2F2] pb-4 mb-4"> 
                    <div className="md:grid md:grid-cols-[80px_1fr] gap-4">
                        <div className="border border-[#F6F6F6] p-2 rounded-[8px] flex items-center justify-center">
                            <Image
                                src={bag}
                                alt="Images"
                            />
                        </div>
                        <div>
                            <span className="font-medium mb-0.5 text-[#000000CC]">Blaze Stash Bag</span> 
                            <div className="flex items-center gap-2">
                                <span className="text-[#333333] text-[14px] font-medium">B-77</span>
                                <p className="flex items-center gap-1 text-[12px] text-nt160">Price: <span className="text-[#7E49FF]">$500</span></p>
                            </div>
                            <div className="flex items-center gap-2 pt-3.5">
                                <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                                    <span className="text-[#777E89] text-[12px] font-medium">Small</span>
                                    <div className="flex flex-col">
                                        <i className="ph ph-angel-up cursor-pointer text-[#777E89]"></i>
                                        <i className="ph ph-arrow-down cursor-pointer text-[#777E89]"></i>
                                    </div>
                                </div>
                                <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                                    <span className="text-[#777E89] text-[12px] font-medium">Dark</span>
                                    <div className="flex flex-col">
                                        <i className="ph ph-angel-up cursor-pointer text-[#777E89]"></i>
                                        <i className="ph ph-arrow-down cursor-pointer text-[#777E89]"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div>
                        <span className="text-[#000000] text-[14px] font-medium pb-5 text-right">$2,000</span>
                        <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                            <i className="ph ph-minus cursor-pointer text-[#777E89]"></i>
                            <span className="text-[#000000] text-[12px] font-medium">4</span>
                            <i className="ph ph-plus cursor-pointer text-[#7E49FF]"></i>
                        </div>
                    </div>  
                </div>
                <div className="flex justify-between items-center pb-3 border border-b-[#F2F2F2] pb-4 mb-4"> 
                    <div className="md:grid md:grid-cols-[80px_1fr] gap-4">
                        <div className="border border-[#F6F6F6] p-2 rounded-[8px] flex items-center justify-center">
                            <Image
                                src={hat1}
                                alt="Images"
                            />
                        </div>
                        <div>
                            <span className="font-medium mb-0.5 text-[#000000CC]">Blaze Stash Bag</span> 
                            <div className="flex items-center gap-2">
                                <span className="text-[#333333] text-[14px] font-medium">B-77</span>
                                <p className="flex items-center gap-1 text-[12px] text-nt160">Price: <span className="text-[#7E49FF]">$500</span></p>
                            </div>
                            <div className="flex items-center gap-2 pt-3.5">
                                <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                                    <span className="text-[#777E89] text-[12px] font-medium">Small</span>
                                    <div className="flex flex-col">
                                        <i className="ph ph-angel-up cursor-pointer text-[#777E89]"></i>
                                        <i className="ph ph-arrow-down cursor-pointer text-[#777E89]"></i>
                                    </div>
                                </div>
                                <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                                    <span className="text-[#777E89] text-[12px] font-medium">Dark</span>
                                    <div className="flex flex-col">
                                        <i className="ph ph-angel-up cursor-pointer text-[#777E89]"></i>
                                        <i className="ph ph-arrow-down cursor-pointer text-[#777E89]"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div>
                        <span className="text-[#000000] text-[14px] font-medium pb-5 text-right">$2,000</span>
                        <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                            <i className="ph ph-minus cursor-pointer text-[#777E89]"></i>
                            <span className="text-[#000000] text-[12px] font-medium">4</span>
                            <i className="ph ph-plus cursor-pointer text-[#7E49FF]"></i>
                        </div>
                    </div>  
                </div>
                <div className="flex justify-between items-center pb-3 border border-b-[#F2F2F2] pb-4 mb-4"> 
                    <div className="md:grid md:grid-cols-[80px_1fr] gap-4">
                        <div className="border border-[#F6F6F6] p-2 rounded-[8px] flex items-center justify-center">
                            <Image
                                src={balcktshart1}
                                alt="Images"
                            />
                        </div>
                        <div>
                            <span className="font-medium mb-0.5 text-[#000000CC]">Blaze Stash Bag</span> 
                            <div className="flex items-center gap-2">
                                <span className="text-[#333333] text-[14px] font-medium">B-77</span>
                                <p className="flex items-center gap-1 text-[12px] text-nt160">Price: <span className="text-[#7E49FF]">$500</span></p>
                            </div>
                            <div className="flex items-center gap-2 pt-3.5">
                                <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                                    <span className="text-[#777E89] text-[12px] font-medium">Small</span>
                                    <div className="flex flex-col">
                                        <i className="ph ph-angel-up cursor-pointer text-[#777E89]"></i>
                                        <i className="ph ph-arrow-down cursor-pointer text-[#777E89]"></i>
                                    </div>
                                </div>
                                <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                                    <span className="text-[#777E89] text-[12px] font-medium">Dark</span>
                                    <div className="flex flex-col">
                                        <i className="ph ph-angel-up cursor-pointer text-[#777E89]"></i>
                                        <i className="ph ph-arrow-down cursor-pointer text-[#777E89]"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div>
                        <span className="text-[#000000] text-[14px] font-medium pb-5 text-right">$2,000</span>
                        <div className="bg-[#F5F5F5] py-1 px-2 rounded-[6px] flex items-center justify-between gap-3">
                            <i className="ph ph-minus cursor-pointer text-[#777E89]"></i>
                            <span className="text-[#000000] text-[12px] font-medium">4</span>
                            <i className="ph ph-plus cursor-pointer text-[#7E49FF]"></i>
                        </div>
                    </div>  
                </div>
                <div className="bg-[#FAFAFA] p-5 rounded-[12px]">
                    <ul>
                        <li className="flex justify-between">
                                <span className="text-[#000000] text-[16px] font-medium">Total Price:</span>
                                <span className="text-[#000000] text-[16px] font-medium">$6,000</span>
                            </li> 
                        <li className="flex justify-between border border-b-[#EEEAF7] pb-3 mb-3">
                                <span className="text-[#000000] text-[16px] font-medium">Tax:</span>
                                <span className="text-[#000000] text-[16px] font-medium">$20</span>
                            </li> 
                        <li className="flex justify-between">
                                <span className="text-[#000000] text-[16px] font-semibold">Total Paid:</span>
                                <span className="text-[#000000] text-[16px] font-medium">$6,020</span>
                        </li> 
                    </ul>   
                </div> 
                <div className="flex justify-center gap-4 pt-4">
                    <button className="bg-[#FA2415] text-[16px] text-[#ffffff] py-3 px-7 w-full md:max-w-[200px] rounded-[8px]">Cancel</button>
                    <button className="bg-[#39CB7F] text-[16px] text-[#ffffff] py-3 px-7 w-full rounded-[8px]">Pay Now</button>
                </div> 
            </div> 
        </div>
    )
    
}