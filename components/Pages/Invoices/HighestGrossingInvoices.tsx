"use client";

import Image from "next/image";
import highestgrossing1 from "@/public/images/highestgrossing1.png";
import highestgrossing2 from "@/public/images/highestgrossing2.png";
import highestgrossing3 from "@/public/images/highestgrossing3.png";
import highestgrossing4 from "@/public/images/highestgrossing4.png";

const invoiceData = [
  {
    image: highestgrossing1,
    name: "Marvin McKinney",
    company: "Company name",
    amount: "$8,820.00",
    paid: 13,
  },
  {
    image: highestgrossing2,
    name: "Marvin McKinney",
    company: "Company name",
    amount: "$8,820.00",
    paid: 13,
  },
  {
    image: highestgrossing3,
    name: "Marvin McKinney",
    company: "Company name",
    amount: "$8,820.00",
    paid: 13,
  },
  {
    image: highestgrossing4,
    name: "Marvin McKinney",
    company: "Company name",
    amount: "$8,820.00",
    paid: 13,
  },
];

export default function HighestGrossingInvoices() {
  return (
    <div className="p-5 lg:p-7.5 bg-nt130 rounded-[20px]">
      <h4 className="text-nt18 mb-4 md:mb-6">Highest Grossing Invoices</h4>

      <hr className="text-[#1F1F1F] h-0.5 mb-4 md:mb-6" />

      <div>
        {invoiceData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between gap-5 ${
              index !== invoiceData.length - 1 ? "mb-4 md:mb-6" : ""
            }`}>
            {/* Left: Image + title */}
            <div className="flex items-center gap-1.5">
              <Image src={item.image} alt={item.name} />
              <div>
                <span className="font-medium text-nt18">{item.name}</span>
                <span className="text-xs text-nt160">{item.company}</span>
              </div>
            </div>

            {/* Right: amount + paid */}
            <div className="text-end">
              <span className="font-medium">{item.amount}</span>
              <span className="text-xs text-nt160 text-nowrap">
                Paid Invoices: {item.paid}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
