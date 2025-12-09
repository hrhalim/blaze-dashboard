"use client";
import { useToggle } from "@/hooks/useToggle";
import Link from "next/link";
import { useState } from "react";
import createinvoice1 from "@/public/images/createinvoice1.png";
import Image from "next/image";

const users = ["All Clients", "Top 10 Clients", "Active Clients", "Churn Risk"];
export default function InvoiceCreate() {
  const [visible, setVisible] = useState(false);
  const { open, toggle } = useToggle(false);

  return (
    <div>
      {/* Header */}
      <div className="mb-6 relative">
        <div className="flex items-center justify-between flex-wrap gap-3 md:gap-5">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Link
                href="/"
                className="flex items-center gap-1 text-nt160 text-base lg:text-lg">
                Invoice<i className="ph ph-caret-right text-lg"></i>
              </Link>
              <span className="text-base lg:text-lg text-primary">Create</span>
            </div>
            <h1 className="text-[#BBBBBB] font-bold">Add New Invoice</h1>
          </div>
          {/* Filter Starts */}
          <div className="">
            <div className="relative flex flex-col items-start">
              <button
                onClick={() => setVisible((prev) => !prev)}
                className="btngrdnt">
                <span className="btngrdnt-child d-center gap-2 px-4 py-3 font-medium rounded-lg transition">
                  <i className="ph ph-plus"></i> Add New
                </span>
              </button>

              <div
                className={`absolute left-full top-12 transform transition-all duration-500 ease-in-out p-4 bg-nt10 rounded-lg z-60! ${
                  visible
                    ? "-translate-x-32 opacity-100"
                    : "translate-x-0 opacity-0"
                }`}>
                <ul className="min-w-[134px] p-4">
                  {users.map((user, idx) => (
                    <li key={idx} className="pb-3 text-base text-nt30">
                      {user}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Filter Ends */}
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-7.5">
        <div className="col-span-1">
          <div className="bg-nt130 rounded-[20px] px-3 py-6 md:p-7.5 relative z-10!">
            <div className="flex items-center gap-3 justify-between flex-wrap mb-6">
              <div className="">
                <h4 className="mb-1">Create Invoice</h4>
                <span className="text-[13px] text-nt160">
                  Billing Information
                </span>
              </div>
              <div className="py-2 px-3 rounded-full bg-[#0A0A0A] flex items-center gap-2.5">
                <span className="font-medium">Show saved</span>
                <div className="toggle-switch">
                  <input
                    onClick={toggle}
                    className="toggle-input"
                    id="toggle"
                    type="checkbox"
                  />
                  <label className="toggle-label" htmlFor="toggle"></label>
                </div>
              </div>
            </div>

            {open && (
              <div className="overflow-x-auto suggtionfillinfo mb-6">
                <div className="min-w-[1000px]">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 py-1 ps-1 pr-2 rounded-full bg-[#0A0A0A] border border-nt30 gradientsuggtion">
                      <div className="">
                        <Image src={createinvoice1} alt="createinvoice1" />
                      </div>
                      <span className="text-nt18 text-xs font-medium">
                        Jerome Bell
                      </span>
                    </div>
                    <div className="flex items-center gap-2 py-1 ps-1 pr-2 rounded-full bg-[#0A0A0A] border border-nt30 gradientsuggtion">
                      <div className="">
                        <Image src={createinvoice1} alt="createinvoice1" />
                      </div>
                      <span className="text-nt18 text-xs font-medium">
                        Courtney Henry
                      </span>
                    </div>
                    <div className="flex items-center gap-2 py-1 ps-1 pr-2 rounded-full bg-[#0A0A0A] border border-nt30 gradientsuggtion">
                      <div className="">
                        <Image src={createinvoice1} alt="createinvoice1" />
                      </div>
                      <span className="text-nt18 text-xs font-medium">
                        Marvin McKinney
                      </span>
                    </div>
                    <div className="flex items-center gap-2 py-1 ps-1 pr-2 rounded-full bg-[#0A0A0A] border border-nt30 gradientsuggtion">
                      <div className="">
                        <Image src={createinvoice1} alt="createinvoice1" />
                      </div>
                      <span className="text-nt18 text-xs font-medium">
                        Cameron Williamson
                      </span>
                    </div>
                    <div className="flex items-center gap-2 py-1 ps-1 pr-2 rounded-full bg-[#0A0A0A] border border-nt30 gradientsuggtion">
                      <div className="">
                        <Image src={createinvoice1} alt="createinvoice1" />
                      </div>
                      <span className="text-nt18 text-xs font-medium">
                        Cameron Williamson
                      </span>
                    </div>
                    <div className="flex items-center gap-2 py-1 ps-1 pr-2 rounded-full bg-[#0A0A0A] border border-nt30 gradientsuggtion">
                      <div className="">
                        <Image src={createinvoice1} alt="createinvoice1" />
                      </div>
                      <span className="text-nt18 text-xs font-medium">
                        Cameron Williamson
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <form>
              <div className="flex items-center gap-4 mb-4 max-sm:flex-wrap">
                <div className="w-full">
                  <label
                    htmlFor="client"
                    className="block mb-2 font-medium text-[15px]">
                    Client Name
                  </label>
                  <input
                    placeholder="Full Name"
                    className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="client"
                    className="block mb-2 font-medium text-[15px]">
                    Company Name
                  </label>
                  <input
                    placeholder="Company"
                    className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                <label
                  htmlFor="client"
                  className="block mb-2 font-medium text-[15px]">
                  Email
                </label>
                <input
                  placeholder="Your email address"
                  typeof="email"
                  className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-4 mb-4 max-sm:flex-wrap">
                <div className="w-full">
                  <label
                    htmlFor="client"
                    className="block mb-2 font-medium text-[15px]">
                    Company Invoice number
                  </label>
                  <input
                    placeholder="UXERFLOW-INVoo1"
                    className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="client"
                    className="block mb-2 font-medium text-[15px]">
                    Due Date
                  </label>
                  <input
                    placeholder="Company"
                    className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                    type="date"
                  />
                </div>
              </div>
              <div className="w-full mb-6">
                <label
                  htmlFor="client"
                  className="block mb-2 font-medium text-[15px]">
                  Address
                </label>
                <input
                  placeholder="4517 Washington Ave. Manchester, Kentucky 39495"
                  typeof="email"
                  className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                  type="text"
                />
              </div>
              <hr className="text-[#1F1F1F] mb-6" />
              <div className="">
                <h4 className="mb-4">Line Items</h4>
                <div className="grid grid-cols-5 gap-4 mb-4">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Items
                      </label>
                      <input
                        placeholder="Enter Text"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        QTY
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Rate
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Total
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4 mb-4">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Items
                      </label>
                      <input
                        placeholder="Enter Text"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        QTY
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Rate
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Total
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4 mb-4">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Items
                      </label>
                      <input
                        placeholder="Enter Text"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        QTY
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Rate
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Total
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-4 mb-4">
                  <div className="col-span-3 sm:col-span-2">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Items
                      </label>
                      <input
                        placeholder="Enter Text"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        QTY
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Rate
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="w-full">
                      <label
                        htmlFor="client"
                        className="block mb-2 font-medium text-[15px]">
                        Total
                      </label>
                      <input
                        placeholder="Enter"
                        className="bg-[#1D1B26] py-3 px-4 rounded-lg border border-[#1F1F1F]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <button className="text-primary py-3 px-4 w-full bg-[#0A0A0A] rounded-lg">
                  Add more
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-nt130 rounded-[20px] px-3 py-6 md:p-7.5 relative mb-6 z-10!">
            <span className="text-lg lg:text-xl mb-7.5">Preview</span>
            <div className="bg-nt120 p-3 md:p-7.5">
              <h2 className="mb-1.5 font-semibold">Invoice</h2>
              <div className="flex items-center gap-1 mb-4.5">
                <span className="text-[#8E8D92] text-xs">Invoice Number:</span>
                <span className="font-semibold text-xs">UXERFLOW-INVoo1</span>
              </div>
              <div className="border border-[#2E2C39] rounded-xl mb-4.5">
                <div className="flex items-center border-b border-[#2E2C39] max-sm:flex-wrap">
                  <div className="px-4 pt-4 sm:p-4 w-full sm:border-r border-[#2E2C39]">
                    <span className="mb-2 text-[#8E8D92] text-[10px]">
                      Billed to
                    </span>
                    <span className="text-[10px] font-semibold">
                      Acme Enterprise
                    </span>
                    <span className="text-[10px] font-semibold">
                      Acme@enterpricse.com
                    </span>
                  </div>
                  <div className="px-4 pt-4 pb-4 sm:p-4 w-full">
                    <span className="mb-2 text-[#8E8D92] text-[10px]">
                      Billed to
                    </span>
                    <span className="text-[10px] font-semibold">
                      Acme Enterprise
                    </span>
                    <span className="text-[10px] font-semibold">
                      Acme@enterpricse.com
                    </span>
                  </div>
                </div>
                <div className="p-4 w-full">
                  <span className="mb-1.5 text-[#8E8D92] text-[10px]">
                    Billed to
                  </span>
                  <span className="mb-2 text-[#8E8D92] text-[10px]">
                    1901 Thonridge Cir, Shiloh, Hawaii, USA. 81063
                  </span>
                </div>
              </div>
              <div className="overflow-x-auto mb-4.5">
                <table className="w-full">
                  <tr className="">
                    <th colSpan={2} className="">
                      <span className="text-[10px] text-[#8E8D92] py-3 border border-[#2E2C39] rounded-tl-lg text-start ps-4">
                        Items
                      </span>
                    </th>
                    <th className="">
                      <span className="text-[10px] text-[#8E8D92] py-3 border-y border-r border-[#2E2C39]">
                        QTY
                      </span>
                    </th>
                    <th className="">
                      <span className="text-[10px] text-[#8E8D92] py-3 border-y border-r border-[#2E2C39]">
                        Rate
                      </span>
                    </th>
                    <th className="">
                      <span className="text-[10px] text-[#8E8D92] py-3 border-y border-r border-[#2E2C39] rounded-tr-lg">
                        Total
                      </span>
                    </th>
                  </tr>
                  <tr className="border-b border-x border-[#2E2C39]">
                    <td colSpan={2}>
                      <span className="text-[10px] font-semibold py-4 ps-4 border-r border-[#2E2C39]">
                        Heading
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center border-r border-[#2E2C39]">
                        0
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center border-r border-[#2E2C39]">
                        $00
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center">
                        $00
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-x border-[#2E2C39]">
                    <td colSpan={2}>
                      <span className="text-[10px] font-semibold py-4 ps-4 border-r border-[#2E2C39]">
                        Heading
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center border-r border-[#2E2C39]">
                        0
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center border-r border-[#2E2C39]">
                        $00
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center">
                        $00
                      </span>
                    </td>
                  </tr>
                  <tr className="">
                    <td colSpan={2}>
                      <span className="text-[10px] font-semibold py-4 ps-4 border-b border-x rounded-bl-lg border-r border-[#2E2C39]">
                        Heading
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center border-r border-b border-[#2E2C39]">
                        0
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center border-b border-[#2E2C39]">
                        $00
                      </span>
                    </td>
                    <td>
                      <span className="text-[10px] font-semibold py-4 text-center border-b border-x rounded-br-lg border-r border-[#2E2C39]">
                        $00
                      </span>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="flex justify-end">
                <div className="min-w-[235px] p-4 rounded-lg text-[#2E2C39] border border-[#2E2C39]">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2.5">
                    <span className="text-[#8E8D92] text-[10px]">Subtotal</span>
                    <span className="text-[10px] font-medium text-nt10">
                      $00
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2.5">
                    <span className="text-[#8E8D92] text-[10px]">Discount</span>
                    <span className="text-[10px] font-medium text-nt10">
                      $0
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-4 border-b pb-4">
                    <span className="text-[#8E8D92] text-[10px]">Tax</span>
                    <span className="text-[10px] font-medium text-nt10">
                      $0
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[#8E8D92] text-xs">Total</span>
                    <span className="text-xs font-medium text-nt10">$00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
