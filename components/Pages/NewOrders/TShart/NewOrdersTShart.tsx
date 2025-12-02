"use client";
import { usePopup } from "@/hooks/usePopup";
import Image, { StaticImageData } from "next/image";

import tshart1 from "@/public/images/tshirt1.png";
import tshart2 from "@/public/images/tshirt2.png";
import tshart3 from "@/public/images/tshirt3.png";
import tshart4 from "@/public/images/tshirt4.png";
import tshart5 from "@/public/images/tshirt5.png";
import tshart6 from "@/public/images/tshirt6.png";
import InventoryPopUpContent from "./InventoryPopUpContent";

type InventoryItem = {
  img: StaticImageData;
  title: string;
  size: string;
  sizeBg: string;
  sizeText: string;
  date: string;
  levelText: string;
  good: string;
  total: string;
  barWidth: string;
  barColor: string;
  sold: string;
  earnings: string;
};

const inventoryData: InventoryItem[] = [
  {
    img: tshart1,
    title: "Classic Black Tee",
    size: "Small",
    sizeBg: "#FEC90F14",
    sizeText: "#FEC90F",
    date: "July 14, 2025",
    levelText: "Good 35/",
    good: "35",
    total: "50",
    barWidth: "w-[70px]",
    barColor: "bg-nt140",
    sold: "65% Sold",
    earnings: "$546,000",
  },
  {
    img: tshart2,
    title: "Classic Black Tee",
    size: "Medium",
    sizeBg: "#1E4DB712",
    sizeText: "#7E49FF",
    date: "February 11, 2025",
    levelText: "Excellent 46/",
    good: "46",
    total: "50",
    barWidth: "w-[70px]",
    barColor: "bg-nt180",
    sold: "98% Sold",
    earnings: "$546,000",
  },
  {
    img: tshart3,
    title: "Classic Black Tee",
    size: "Large",
    sizeBg: "#1E4DB714",
    sizeText: "#1E4DB7",
    date: "July 14, 2025",
    levelText: "Average 25/",
    good: "25",
    total: "50",
    barWidth: "w-12",
    barColor: "bg-nt170",
    sold: "45% Sold",
    earnings: "$546,000",
  },
  {
    img: tshart4,
    title: "Classic white Tee",
    size: "Small",
    sizeBg: "#4FFC1A14",
    sizeText: "#4FFC1A",
    date: "July 14, 2025",
    levelText: "Bad 15/",
    good: "15",
    total: "50",
    barWidth: "w-[26px]",
    barColor: "bg-nt150",
    sold: "23% Sold",
    earnings: "$546,000",
  },
  {
    img: tshart5,
    title: "Classic white Tee",
    size: "Medium",
    sizeBg: "#1E4DB712",
    sizeText: "#7E49FF",
    date: "July 14, 2025",
    levelText: "Good 35/",
    good: "35",
    total: "50",
    barWidth: "w-[70px]",
    barColor: "bg-nt140",
    sold: "65% Sold",
    earnings: "$546,000",
  },
  {
    img: tshart6,
    title: "Classic white Tee",
    size: "Large",
    sizeBg: "#1E4DB714",
    sizeText: "#1E4DB7",
    date: "July 14, 2025",
    levelText: "Good 35/",
    good: "35",
    total: "50",
    barWidth: "w-[70px]",
    barColor: "bg-nt140",
    sold: "65% Sold",
    earnings: "$546,000",
  },
];

export default function NewOrdersTShart() {
  const { open, show, hide } = usePopup(false);

  return (
    <div className="bg-nt130 rounded-[20px] ps-5 md:ps-7.5 pr-1.5 pt-5 md:pt-7.5 pb-4 md:pb-5.5 h-full">
      <div className="flex items-center justify-between flex-wrap gap-2 mb-7.5 pr-5 md:pr-7.5">
        <div>
          <h4 className="text-nt18 mb-1">Products Inventory</h4>
          <span className="text-[13px] text-nt160">Active Products: 44</span>
        </div>

        <div className="flex items-center gap-2">
          <form action="">
            <div className="flex items-center gap-2 py-2.5 px-4 rounded-lg bg-nt120">
              <span className="d-center cursor-pointer">
                <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
              </span>
              <input
                className="bg-transparent placeholder:text-nt160 text-nt160"
                type="text"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>

      <div className="max-h-[730px] overflow-y-auto pr-6 productinverntoryscroll">
        {inventoryData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between gap-7.5 flex-wrap sm:flex-nowrap md:flex-wrap xl:flex-nowrap pb-4">
              <div className="flex items-center gap-3 sm:w-[70%]">
                <div>
                  <Image src={item.img} alt="Black T-Shart" />
                </div>
                <div>
                  <h6 className="mb-1">{item.title}</h6>
                  <span
                    className="text-[12px] rounded-full px-2 py-1 inline-block mb-2"
                    style={{
                      backgroundColor: item.sizeBg,
                      color: item.sizeText,
                    }}>
                    {item.size}
                  </span>

                  <span className="text-nt160">{item.date}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-7.5 w-full">
                <div>
                  <div className="flex items-center mb-3">
                    <span className="text-sm">{item.levelText}</span>
                    <span className="text-sm opacity-50">{item.total}</span>
                  </div>

                  <div className="relative mb-3">
                    <span className="w-[106px] h-[5px] bg-[#777E891F] rounded-[5px]"></span>
                    <span
                      className={`${item.barWidth} h-[5px] ${item.barColor} rounded-[5px] absolute top-0 left-0`}></span>
                  </div>

                  <span className="text-nt160">{item.sold}</span>
                </div>

                <div>
                  <span className="text-nt160 mb-1">Earnings</span>
                  <span className="fs-six text-nt200">{item.earnings}</span>
                </div>

                <button onClick={show}>
                  <i className="ph ph-caret-right text-[#777E89]"></i>
                </button>
              </div>
            </div>

            {index !== inventoryData.length - 1 && (
              <hr className="text-[#1F1F1F] h-0.5 mb-6" />
            )}
          </div>
        ))}
      </div>

      {/* Popup content Starts here */}
      {open && (
        <div
          className={`
            fixed inset-0 bg-black/60 
            transition-opacity duration-500 
            flex items-center justify-center
            z-40
          `}
          onClick={hide}></div>
      )}

      <div
        className={`
          fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-[90%] max-w-[642px]
          bg-white rounded-xl shadow-lg p-4 z-50
          transition-all duration-400 ease-out
          ${
            open
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0 pointer-events-none"
          }
        `}>
        {/* HEADER */}
        <div className="flex justify-between items-center gap-2 mb-4">
          <h5 className="text-xl font-semibold text-nt30">Classic Black Tee</h5>
          <button
            onClick={hide}
            className="text-nt30 bg-[#F4F4F4] border border-[#EAEAEA] rounded-full p-2.5 d-center">
            <i className="ph ph-x"></i>
          </button>
        </div>

        {/* CONTENT */}
        <InventoryPopUpContent />
      </div>

      {/* Popup content Starts here */}
    </div>
  );
}
