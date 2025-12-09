"use client";
import Link from "next/link";
import { useToggle } from "@/hooks/useToggle";
import NewExReTabs from "../Home/NewExReTabs";

import React, { useState } from "react";
import TopInvoicePaidersTable from "./TopInvoicePaidersTable";

const users = ["All Clients", "Top 10 Clients", "Active Clients", "Churn Risk"];

export default function TopInvoicePaiders() {
  const { open, toggle } = useToggle(false);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="mb-6 relative">
        <div className="flex items-center justify-between flex-wrap gap-3 md:gap-5">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Link
                href="/"
                className="flex items-center gap-1 text-nt160 text-lg">
                Invoice{" "}
                <i className="ph ph-caret-right text-base lg:text-lg"></i>
              </Link>
              <span className="text-base lg:text-lg text-primary">
                Invoice Clients
              </span>
            </div>
            <h1 className="text-[#BBBBBB] font-bold">Top Clients</h1>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 max-sm:flex-wrap">
            {/* March 2025 Starts */}
            <button onClick={toggle} className="btngrdnt">
              <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
                March 2025 <i className="ph ph-caret-down text-xl"></i>
              </span>
            </button>

            {open && (
              <div className="absolute top-68 sm:top-40 right-7 w-[260px] transition-all z-60!">
                <div className="p-5 bg-white shadow-lg rounded-xl">
                  <NewExReTabs />
                </div>
              </div>
            )}
            {/* March 2025 Ends */}

            {/* Filter Starts */}
            <div className="">
              <div className="relative flex flex-col items-start">
                <button
                  onClick={() => setVisible((prev) => !prev)}
                  className="btngrdnt">
                  <span className="btngrdnt-child d-center gap-2 px-4 py-3 font-medium rounded-lg transition">
                    Filter
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
      </div>

      {/* Table Wrapper */}
      <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6 z-10!">
        <div className="mb-7.5">
          <h4 className="text-nt18 mb-1">Top Clients</h4>
          <span className="text-[13px] text-nt160">
            Total High-Value Payers: 44
          </span>
        </div>
        <TopInvoicePaidersTable />
      </div>
    </div>
  );
}
