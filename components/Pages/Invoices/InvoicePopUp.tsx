"use client";
import { usePopup } from "@/hooks/usePopup";
import Image from "next/image";
import paidinvoice from "@/public/images/paidinvoice.png";

export default function InvoicePopUp() {
  const { open, show, hide } = usePopup(false);

  return (
    <div>
      <button
        type="button"
        onClick={show}
        className="tbneeds font-medium text-nt140 cursor-pointer text-nowrap border-b border-[#1F1F1F]">
        Click here
      </button>
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
                w-[90%] max-w-[510px]
                bg-white rounded-xl shadow-lg p-4 z-50
                transition-all duration-400 ease-out
                ${
                  open
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-0 pointer-events-none"
                }
              `}>
        {/* HEADER */}
        <div className="flex justify-between items-center gap-2 mb-1.5">
          <h1 className="text-nt30">Invoice</h1>
          <button
            onClick={hide}
            className="text-nt30 bg-[#F4F4F4] border border-[#EAEAEA] rounded-full p-2.5 d-center">
            <i className="ph ph-x"></i>
          </button>
        </div>
        {/* CONTENT */}
        <div className="relative z-10!">
          <div className="flex items-center gap-1 mb-4.5">
            <span className="text-[#555555] text-xs">Invoice Number:</span>
            <span className="font-semibold text-xs text-nt30">
              UXERFLOW-INVoo1
            </span>
          </div>
          <div className="border border-[#0000001F] rounded-xl mb-4.5">
            <div className="flex items-center border-b border-[#0000001F] max-sm:flex-wrap">
              <div className="px-4 pt-4 sm:p-4 w-full sm:border-r border-[#0000001F]">
                <span className="mb-2 text-[#555555] text-[10px]">
                  Billed to
                </span>
                <span className="text-[10px] font-semibold text-nt30">
                  Acme Enterprise
                </span>
                <span className="text-[10px] font-semibold text-nt30">
                  Acme@enterpricse.com
                </span>
              </div>
              <div className="px-4 pt-4 pb-4 sm:p-4 w-full">
                <span className="mb-2 text-[#555555] text-[10px]">
                  Billed to
                </span>
                <span className="text-[10px] font-semibold text-nt30">
                  Acme Enterprise
                </span>
                <span className="text-[10px] font-semibold text-nt30">
                  Acme@enterpricse.com
                </span>
              </div>
            </div>
            <div className="p-4 w-full">
              <span className="mb-1.5 text-[#555555] text-[10px]">
                Billed to
              </span>
              <span className="mb-2 text-nt30 font-semibold text-[10px]">
                1901 Thonridge Cir, Shiloh, Hawaii, USA. 81063
              </span>
            </div>
          </div>
          <div className="overflow-x-auto mb-4.5">
            <table className="w-full">
              <tr className="">
                <th colSpan={2} className="">
                  <span className="text-[10px] text-[#555555] py-3 border border-[#0000001F] rounded-tl-lg text-start ps-4">
                    Items
                  </span>
                </th>
                <th className="">
                  <span className="text-[10px] text-[#555555] py-3 border-y border-r border-[#0000001F]">
                    QTY
                  </span>
                </th>
                <th className="">
                  <span className="text-[10px] text-[#555555] py-3 border-y border-r border-[#0000001F]">
                    Rate
                  </span>
                </th>
                <th className="">
                  <span className="text-[10px] text-[#555555] py-3 border-y border-r border-[#0000001F] rounded-tr-lg">
                    Total
                  </span>
                </th>
              </tr>
              <tr className="border-b border-x border-[#0000001F]">
                <td colSpan={2}>
                  <span className="text-[10px] font-semibold py-4 ps-4 border-r border-[#0000001F] text-nt30">
                    Heading
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center border-r border-[#0000001F] text-nt30">
                    0
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center border-r border-[#0000001F] text-nt30">
                    $00
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center text-nt30">
                    $00
                  </span>
                </td>
              </tr>
              <tr className="border-b border-x border-[#0000001F]">
                <td colSpan={2}>
                  <span className="text-[10px] font-semibold py-4 ps-4 border-r border-[#0000001F] text-nt30">
                    Heading
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center border-r border-[#0000001F] text-nt30">
                    0
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center border-r border-[#0000001F] text-nt30">
                    $00
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center text-nt30">
                    $00
                  </span>
                </td>
              </tr>
              <tr className="">
                <td colSpan={2}>
                  <span className="text-[10px] font-semibold py-4 ps-4 border-b border-x rounded-bl-lg border-r border-[#0000001F] text-nt30">
                    Heading
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center border-r border-b border-[#0000001F] text-nt30">
                    0
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center border-b border-[#0000001F] text-nt30">
                    $00
                  </span>
                </td>
                <td>
                  <span className="text-[10px] font-semibold py-4 text-center border-b border-x rounded-br-lg border-r border-[#0000001F] text-nt30">
                    $00
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-between items-center gap-3 sm:flex-wrap">
            <div className="">
              <div className="mb-2">
                <Image src={paidinvoice} alt="" />
              </div>
              <span className="font-medium text-xs text-[#090909]">
                Paid Invoice
              </span>
            </div>
            <div className="min-w-[235px] p-4 rounded-lg text-[#2E2C39] border border-[#0000001F]">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-2.5">
                <span className="text-[#555555] text-[10px]">Subtotal</span>
                <span className="text-[10px] font-medium text-nt30">$00</span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap mb-2.5">
                <span className="text-[#555555] text-[10px]">Discount</span>
                <span className="text-[10px] font-medium text-nt30">$0</span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap mb-4 border-b pb-4">
                <span className="text-[#555555] text-[10px]">Tax</span>
                <span className="text-[10px] font-medium text-nt30">$0</span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[#555555] text-xs">Total</span>
                <span className="text-xs font-medium text-nt30">$00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
