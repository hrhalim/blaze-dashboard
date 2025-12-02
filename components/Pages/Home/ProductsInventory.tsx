import Image, { StaticImageData } from "next/image";

import balcktshart1 from "@/public/images/blackshirt1.png";
import bag from "@/public/images/bag.png";
import hat1 from "@/public/images/hat.png";
import hoodie1 from "@/public/images/hoodie.png";
import Link from "next/link";

type InventoryItem = {
  img: StaticImageData;
  title: string;
  date: string;
  levelText: string;
  good: string;
  total: string;
  barWidth: string;
  barColor: string;
  sold: string;
  earnings: string;
  link: string;
};
const inventoryData: InventoryItem[] = [
  {
    img: balcktshart1,
    title: "Classic Black Tee",
    date: "July 14, 2025",
    levelText: "Good 35/",
    good: "35",
    total: "50",
    barWidth: "w-[70px]",
    barColor: "bg-nt140",
    sold: "65% Sold",
    earnings: "$546,000",
    link: "/neworders/t-shart",
  },
  {
    img: bag,
    title: "Modern Black Bag",
    date: "February 11, 2025",
    levelText: "Excellent 46/",
    good: "46",
    total: "50",
    barWidth: "w-[70px]",
    barColor: "bg-nt180",
    sold: "98% Sold",
    earnings: "$546,000",
    link: "/neworders/bag",
  },
  {
    img: hat1,
    title: "Blaze Hat",
    date: "July 14, 2025",
    levelText: "Average 25/",
    good: "25",
    total: "50",
    barWidth: "w-12",
    barColor: "bg-nt170",
    sold: "45% Sold",
    earnings: "$546,000",
    link: "/neworders/hat",
  },
  {
    img: hoodie1,
    title: "Classic Black Tee",
    date: "July 14, 2025",
    levelText: "Bad 15/",
    good: "15",
    total: "50",
    barWidth: "w-[26px]",
    barColor: "bg-nt150",
    sold: "23% Sold",
    earnings: "$546,000",
    link: "/neworders/t-shart",
  },
  {
    img: balcktshart1,
    title: "Classic Black Tee",
    date: "July 14, 2025",
    levelText: "Good 35/",
    good: "35",
    total: "50",
    barWidth: "w-[70px]",
    barColor: "bg-nt140",
    sold: "65% Sold",
    earnings: "$546,000",
    link: "/neworders/hat",
  },
];

export default function ProductsInventory() {
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

          <button className="btngrdnt">
            <span className="py-2 sm:py-2.5 px-6.5 btngrdnt-child">Active</span>
          </button>
        </div>
      </div>

      <div className="max-h-[404px] overflow-y-auto pr-6 productinverntoryscroll">
        {inventoryData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between gap-7.5 flex-wrap sm:flex-nowrap md:flex-wrap xl:flex-nowrap pb-4">
              <div className="flex items-center gap-3 sm:w-[70%]">
                <div>
                  <Image src={item.img} alt="Black" />
                </div>
                <div>
                  <h6 className="mb-1">{item.title}</h6>
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

                <Link href={item.link}>
                  <i className="ph ph-caret-right text-[#777E89]"></i>
                </Link>
              </div>
            </div>

            {index !== inventoryData.length - 1 && (
              <hr className="text-[#1F1F1F] h-0.5 mb-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
