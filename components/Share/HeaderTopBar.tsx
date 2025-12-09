"use client";
import { useRef, useEffect } from "react";
import { useToggle } from "@/hooks/useToggle";

import Image from "next/image";
// import language from "@/public/images/language.png";
import userimg from "@/public/images/user-img.png";
import SideNavbar from "./SideNavbar";
import SearchInputarea from "./SearchInputarea";
import Link from "next/link";

export default function HeaderTopBar() {
  // Left Sider Navbar working Starts
  const { open, toggle, close } = useToggle(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, close]);
  // Left Sider Navbar working Ends

  return (
    <div className="flex items-center justify-between gap-3 mb-[30px]">
      <div className="flex items-center gap-6">
        <div className="lg:hidden">
          <button onClick={toggle}>
            <i className="ph ph-text-indent text-nt90"></i>
          </button>
        </div>
        <div className="">
          <form action="" className="max-md:hidden">
            <div className="flex items-center gap-2 py-3.5 px-4 rounded-lg bg-nt120">
              <span className="d-center cursor-pointer">
                <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
              </span>
              <input
                className="bg-transparent placeholder:text-nt160 text-nt160 sm:min-w-[315px]"
                type="text"
                placeholder="Search..."
              />
            </div>
          </form>
          <div className="md:hidden">
            <SearchInputarea />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {/* <div className="">
          <Image draggable="false" src={language} alt="Language" />
        </div> */}
        {/* <button className="d-center">
          <i className="ph ph-moon text-3xl"></i>
        </button> */}
        <button className="relative d-center">
          <i className="ph ph-chat-text text-[28px]"></i>
          <span className="absolute top-0 right-0 size-4 border-2 border-nt30 bg-primary rounded-full"></span>
        </button>
        <Link href="/" className="relative d-center">
          <i className="ph ph-bell text-[28px]"></i>
          <span className="absolute top-0 right-0 size-4 border-2 border-nt30 bg-primary rounded-full"></span>
        </Link>
        <div className="">
          <Image src={userimg} alt="Avatar" />
        </div>
      </div>

      {/* Side Navbar area for Tablet and Mobile Starts */}
      {/* Overlay */}
      {open && <div className="lg:hidden fixed inset-0 bg-black/30 z-40"></div>}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-[310px] bg-[#0A0A0A] shadow-lg z-50 transform transition-transform duration-300 border-r border-nt110 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="absolute top-8 right-5 z-50">
          {/* Close Button */}
          <button onClick={close} className="text-2xl font-bold">
            <i className="ph ph-x text-nt90"></i>
          </button>
        </div>
        <div className="">
          <SideNavbar />
        </div>
      </div>
      {/* Side Navbar area for Tablet and Mobile Starts */}
    </div>
  );
}
