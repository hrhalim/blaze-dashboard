"use client";
import Link from "next/link";
import Image from "next/image";
import ticketpurchasesimg1 from "@/public/images/ticketpurchasesimg1.png";
import salesnotify1 from "@/public/images/salesnotify1.png";
import salesnotify2 from "@/public/images/salesnotify2.png";
import salesnotify3 from "@/public/images/salesnotify3.png";
import salesnotify4 from "@/public/images/salesnotify4.png";
import salesnotify5 from "@/public/images/salesnotify5.png";
import { usePopup } from "@/hooks/usePopup";
import SalesNotifyPopUpContent from "./SalesNotifyPopUpContent";

export default function SalesNotifications() {
  const { open, show, hide } = usePopup(false);

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between flex-wrap gap-3 md:gap-5">
          <div className="">
            <div className="flex items-center gap-1 mb-1">
              <Link
                href="/"
                className="flex items-center gap-1 text-nt160 text-lg">
                Home
                <i className="ph ph-caret-right text-lg"></i>
              </Link>
              <div className="flex items-center gap-1">
                <span className="text-lg text-primary">Notifications</span>
                <span className="text-nt160">(November 25, 2025)</span>
              </div>
            </div>
            <h1 className="text-[#BBBBBB] font-bold">Sales Notifications</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="btngrdnt">
              <span className="btngrdnt-child py-3 px-4 font-medium">
                Products
              </span>
            </Link>
            <Link href="/" className="">
              <span className="bg-[#1D1B26] py-3 px-4 rounded-lg font-medium">
                Event
              </span>
            </Link>

            <Link href="/" className="">
              <span className="bg-[#1D1B26] py-3 px-4 rounded-lg font-medium">
                Expungements
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-nt130 p-7.5 rounded-[20px]">
        <div className="mb-7.5">
          <h4 className="mb-1">New Orders</h4>
          <span className="text-[#777E89] text-[13px]">Total Orders: 24</span>
        </div>
        <div className="w-full overflow-x-auto eventnotify">
          <table className={`w-full text-left min-w-[1050px]`}>
            <thead className="bg-[#0A0A0A]">
              <tr className="my-4 mx-7.5">
                <th className="text-primary font-medium py-4 ps-6">P_Code</th>
                <th className="text-primary font-medium py-4">
                  Events & Price
                </th>
                <th className="text-primary font-medium py-4">Qty</th>
                <th className="text-primary font-medium text-nowrap py-4">
                  Buyer & Location
                </th>
                <th className="text-primary font-medium text-nowrap py-4">
                  Date & Time
                </th>
                <th className="text-primary font-medium text-nowrap py-4">
                  Contact
                </th>
                <th className="text-primary font-medium py-4">Total Paid</th>
                <th className="text-primary font-medium py-4">Status</th>
                <th className="text-primary font-medium py-4 pr-4">More</th>
              </tr>
            </thead>
            <tbody>
              <tr className="py-5 px-4">
                <td className="border-b border-[#1F1F1F] ps-4 pr-5 tbneedsnotify">
                  Code_ K123
                </td>
                <td className="font-medium text-nowrap py-5 border-b pr-6 border-[#1F1F1F]">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image
                        className="shrink-0"
                        src={salesnotify1}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="text-nt18 mb-1 text-wrap">
                        July Expungement day for Freedom
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] text-nt160">Price:</span>
                        <span className="text-[12px] font-semibold text-primary">
                          $150
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  03
                </td>
                <td className="py-5 border-b border-[#1F1F1F]">
                  <div className="flex gap-2">
                    <div className="shrink-0">
                      <Image
                        className="rounded-full size-8 border-2 border-nt30 shrink-0"
                        src={ticketpurchasesimg1}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-nt18 mb-0.5">
                        Ralph Edwards
                      </span>
                      <p className="text-[12px] text-nt160">
                        6391 Elgin St. Celina, Delaware 10299
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px]! border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  November 25, 2025 08:30 am
                </td>
                <td className="text-nowrap border-b border-[#1F1F1F] pr-6 text-secondary1 tbneedsnotify">
                  john@email.com
                </td>
                <td className="border-b border-[#1F1F1F] pr-14 tbneedsnotify">
                  $450
                </td>
                <td className="border-b border-[#1F1F1F] pr-0 tbneedsnotify">
                  <span className="cursor-pointer px-2.5 py-1.5 rounded-full text-sm text-nt170 bg-[#4B452F3D]">
                    Pending
                  </span>
                </td>
                <td className="border-b border-[#1F1F1F]">
                  <button onClick={show} className="ps-3 d-center">
                    <i className="ph ph-caret-right"></i>
                  </button>
                </td>
              </tr>
              <tr className="py-5 px-4">
                <td className="border-b border-[#1F1F1F] ps-4 pr-5 tbneedsnotify">
                  Code_ K123
                </td>
                <td className="font-medium text-nowrap py-5 border-b pr-6 border-[#1F1F1F]">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image
                        className="shrink-0"
                        src={salesnotify2}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="text-nt18 mb-1 text-wrap">
                        July Expungement day for Freedom
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] text-nt160">Price:</span>
                        <span className="text-[12px] font-semibold text-primary">
                          $150
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  03
                </td>
                <td className="py-5 border-b border-[#1F1F1F]">
                  <div className="flex gap-2">
                    <div className="shrink-0">
                      <Image
                        className="rounded-full size-8 border-2 border-nt30 shrink-0"
                        src={ticketpurchasesimg1}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-nt18 mb-0.5">
                        Ralph Edwards
                      </span>
                      <p className="text-[12px] text-nt160">
                        6391 Elgin St. Celina, Delaware 10299
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px]! border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  November 25, 2025 08:30 am
                </td>
                <td className="text-nowrap border-b border-[#1F1F1F] pr-6 text-secondary1 tbneedsnotify">
                  john@email.com
                </td>
                <td className="border-b border-[#1F1F1F] pr-14 tbneedsnotify">
                  $450
                </td>
                <td className="border-b border-[#1F1F1F] pr-0 tbneedsnotify">
                  <span className="cursor-pointer px-2.5 py-1.5 rounded-full text-sm text-nt170 bg-[#4B452F3D]">
                    Pending
                  </span>
                </td>
                <td className="border-b border-[#1F1F1F]">
                  <button onClick={show} className="ps-3 d-center">
                    <i className="ph ph-caret-right"></i>
                  </button>
                </td>
              </tr>
              <tr className="py-5 px-4">
                <td className="border-b border-[#1F1F1F] ps-4 pr-5 tbneedsnotify">
                  Code_ K123
                </td>
                <td className="font-medium text-nowrap py-5 border-b pr-6 border-[#1F1F1F]">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image
                        className="shrink-0"
                        src={salesnotify3}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="text-nt18 mb-1 text-wrap">
                        July Expungement day for Freedom
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] text-nt160">Price:</span>
                        <span className="text-[12px] font-semibold text-primary">
                          $150
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  03
                </td>
                <td className="py-5 border-b border-[#1F1F1F]">
                  <div className="flex gap-2">
                    <div className="shrink-0">
                      <Image
                        className="rounded-full size-8 border-2 border-nt30 shrink-0"
                        src={ticketpurchasesimg1}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-nt18 mb-0.5">
                        Ralph Edwards
                      </span>
                      <p className="text-[12px] text-nt160">
                        6391 Elgin St. Celina, Delaware 10299
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px]! border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  November 25, 2025 08:30 am
                </td>
                <td className="text-nowrap border-b border-[#1F1F1F] pr-6 text-secondary1 tbneedsnotify">
                  john@email.com
                </td>
                <td className="border-b border-[#1F1F1F] pr-14 tbneedsnotify">
                  $450
                </td>
                <td className="border-b border-[#1F1F1F] pr-0 tbneedsnotify">
                  <span className="cursor-pointer px-2.5 py-1.5 rounded-full text-sm text-nt170 bg-[#4B452F3D]">
                    Pending
                  </span>
                </td>
                <td className="border-b border-[#1F1F1F]">
                  <button onClick={show} className="ps-3 d-center">
                    <i className="ph ph-caret-right"></i>
                  </button>
                </td>
              </tr>
              <tr className="py-5 px-4">
                <td className="border-b border-[#1F1F1F] ps-4 pr-5 tbneedsnotify">
                  Code_ K123
                </td>
                <td className="font-medium text-nowrap py-5 border-b pr-6 border-[#1F1F1F]">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image
                        className="shrink-0"
                        src={salesnotify4}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="text-nt18 mb-1 text-wrap">
                        July Expungement day for Freedom
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] text-nt160">Price:</span>
                        <span className="text-[12px] font-semibold text-primary">
                          $150
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  03
                </td>
                <td className="py-5 border-b border-[#1F1F1F]">
                  <div className="flex gap-2">
                    <div className="shrink-0">
                      <Image
                        className="rounded-full size-8 border-2 border-nt30 shrink-0"
                        src={ticketpurchasesimg1}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-nt18 mb-0.5">
                        Ralph Edwards
                      </span>
                      <p className="text-[12px] text-nt160">
                        6391 Elgin St. Celina, Delaware 10299
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px]! border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  November 25, 2025 08:30 am
                </td>
                <td className="text-nowrap border-b border-[#1F1F1F] pr-6 text-secondary1 tbneedsnotify">
                  john@email.com
                </td>
                <td className="border-b border-[#1F1F1F] pr-14 tbneedsnotify">
                  $450
                </td>
                <td className="border-b border-[#1F1F1F] pr-0 tbneedsnotify">
                  <span className="cursor-pointer px-2.5 py-1.5 rounded-full text-sm text-nt170 bg-[#4B452F3D]">
                    Pending
                  </span>
                </td>
                <td className="border-b border-[#1F1F1F]">
                  <button onClick={show} className="ps-3 d-center">
                    <i className="ph ph-caret-right"></i>
                  </button>
                </td>
              </tr>
              <tr className="py-5 px-4">
                <td className="border-b border-[#1F1F1F] ps-4 pr-5 tbneedsnotify">
                  Code_ K123
                </td>
                <td className="font-medium text-nowrap py-5 border-b pr-6 border-[#1F1F1F]">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image
                        className="shrink-0"
                        src={salesnotify5}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="text-nt18 mb-1 text-wrap">
                        July Expungement day for Freedom
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] text-nt160">Price:</span>
                        <span className="text-[12px] font-semibold text-primary">
                          $150
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  03
                </td>
                <td className="py-5 border-b border-[#1F1F1F]">
                  <div className="flex gap-2">
                    <div className="shrink-0">
                      <Image
                        className="rounded-full size-8 border-2 border-nt30 shrink-0"
                        src={ticketpurchasesimg1}
                        alt="Images"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-nt18 mb-0.5">
                        Ralph Edwards
                      </span>
                      <p className="text-[12px] text-nt160">
                        6391 Elgin St. Celina, Delaware 10299
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[12px]! border-b border-[#1F1F1F] pr-8 tbneedsnotify">
                  November 25, 2025 08:30 am
                </td>
                <td className="text-nowrap border-b border-[#1F1F1F] pr-6 text-secondary1 tbneedsnotify">
                  john@email.com
                </td>
                <td className="border-b border-[#1F1F1F] pr-14 tbneedsnotify">
                  $450
                </td>
                <td className="border-b border-[#1F1F1F] pr-0 tbneedsnotify">
                  <span className="cursor-pointer px-2.5 py-1.5 rounded-full text-sm text-nt170 bg-[#4B452F3D]">
                    Pending
                  </span>
                </td>
                <td className="border-b border-[#1F1F1F]">
                  <button onClick={show} className="ps-3 d-center">
                    <i className="ph ph-caret-right"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
                w-[90%] max-w-[551px]
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
          <h5 className="text-xl font-semibold text-nt30">Order Information</h5>
          <button
            onClick={hide}
            className="text-nt30 bg-[#F4F4F4] border border-[#EAEAEA] rounded-full p-2.5 d-center">
            <i className="ph ph-x"></i>
          </button>
        </div>

        {/* CONTENT */}
        <SalesNotifyPopUpContent />
      </div>
    </div>
  );
}
