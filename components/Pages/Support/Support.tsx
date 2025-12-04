"use client";
import { useState } from "react";

export default function Support() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="pt-11 px-4 bg-[#131313] rounded-2xl h-dvh mb-6"> 
      <div className="max-w-[770px] m-auto">
        
        <h1 className="text-[#ffffff] text-[24px] text-center pb-6">
          How we can help you?
        </h1>

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

        {/* Faq */}
        <div className="accordion">

          <div className={`accordion-item border border-[#2A2A2A] py-4 px-3.5 rounded-[10px] cursor-pointer ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] text-[#FFFFFFA3] font-medium">What is Blaze Responsibly™?</h2>
              <div className="relative w-[32px] h-[32px] bg-[#1D1B26] rounded-full flex items-center justify-center">
                {/* PLUS ICON */}
                <i className={`text-[9px] ph ph-plus transition-all ${isOpen ? "opacity-0" : "opacity-100"}`}></i>
                {/* X ICON */}
                <i className={`text-[9px] absolute ph ph-x transition-all ${isOpen ? "opacity-100" : "opacity-0"}`}></i>
              </div>
            </div>
            <div className={`pr-2 md:pr-14 overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[500px] opacity-100 pt-2.5" : "max-h-0 opacity-0"}`}
            >
              <p className="text-[#777E89] leading-[150%]">Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey,</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
