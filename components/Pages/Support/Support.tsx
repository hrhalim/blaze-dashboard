"use client";
import { useState } from "react";

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqData = [
    {
      q: "What is Blaze Responsibly™?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "Are there volunteer or partnership opportunities available?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "Is Blaze Responsibly™ a good resource for cannabis entrepreneurs and investors?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "What is Blaze Responsibly™?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "How is Blaze Responsibly™ involved in policy change and advocacy?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "What is the mission of Blaze Responsibly™?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "Can Blaze Responsibly™ help me with cannabis business licensing in New Jersey?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "What is a cannabis expungement clinic and how do I participate?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    },
    {
      q: "Who is Chirali Patel and what is her role in the cannabis industry?",
      a: "Blaze Responsibly™ is a social impact initiative founded by attorney and cannabis advocate Chirali Patel. Established in 2018, the platform is dedicated to promoting responsible cannabis use, advancing social equity, and providing education around cannabis law, policy, and entrepreneurship. Through a combination of legal expertise, community engagement, and public education, Blaze Responsibly™ empowers individuals and communities—especially those disproportionately impacted by past cannabis laws—to participate in and benefit from the evolving cannabis industry. The initiative also hosts free expungement clinics and workshops across New Jersey, "
    }
  ];

  return (
    <div className="pt-11 px-4 bg-[#131313] rounded-2xl h-dvh mb-6"> 
      <div className="max-w-[770px] m-auto">

        <h1 className="text-[#ffffff] text-[24px] text-center pb-6">
          How we can help you?
        </h1>

        {/* Search */}
        <form>
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

        {/* Accordion */}
        <div className="accordion mt-6">
          {faqData.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`accordion-item border border-[#2A2A2A] py-4 px-3.5 rounded-[10px] cursor-pointer mb-3 ${
                  isOpen ? "active" : ""
                }`}
                onClick={() => toggleAccordion(i)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="accordion-title text-[18px] text-[#FFFFFFA3] font-medium">
                    {item.q}
                  </h2>

                  {/* Icon */}
                  <div
                    className={`relative w-[32px] h-[32px] rounded-full flex items-center justify-center ${
                      isOpen ? "bg-[#ffffff]" : "bg-[#1D1B26]"
                    }`}
                  >
                    <i
                      className={`text-[12px] ph ph-plus transition-all ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
                    ></i>

                    <i
                      className={`text-[12px] absolute ph ph-x transition-all ${
                        isOpen ? "opacity-100 text-[#7E49FF]" : "opacity-0"
                      }`}
                    ></i>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`pr-2 md:pr-14 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] opacity-100 pt-2.5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="accordion-text text-[#777E89] leading-[150%]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
