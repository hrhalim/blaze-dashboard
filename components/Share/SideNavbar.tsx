"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";

export default function SideNavbar() {
  const pathname = usePathname();

  // Define menu items to reduce repetition
  const menuItems = [
    { href: "/", label: "Home", icon: "ph-house" },
    { href: "/expungements", label: "Expungements", icon: "ph-sticker" },
    { href: "/shops", label: "Shops", icon: "ph-shopping-cart-simple" },
    { href: "/event-management", label: "Events", icon: "ph-ticket" },
    { href: "/blog", label: "Blogs", icon: "ph-article" },
    { href: "/analytics", label: "Analytics", icon: "ph-chart-pie" },
    { href: "/invoices", label: "Invoices", icon: "ph-file" },
    { href: "/user-managements", label: "User Managements", icon: "ph-users" },
    { href: "/media", label: "Medias", icon: "ph-film-slate" },
    { href: "/support", label: "Help & Support", icon: "ph-info" },
    { href: "/settings", label: "Settings", icon: "ph-gear" },
  ];

  return (
    <>
      <div className="px-6 sticky top-0">
        <div className="py-[30px]">
          <Image src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={`mb-1 ${pathname === item.href ? "btngrdnt" : ""}`}>
                <Link
                  href={item.href}
                  className={`btngrdnt-child w-full py-3 px-3 flex items-center gap-3 rounded-lg ${
                    pathname === item.href ? "" : "text-nt90"
                  }`}>
                  <span className="d-center">
                    <i className={`ph ${item.icon} text-2xl`}></i>
                  </span>
                  <span className="text-[15px]">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
