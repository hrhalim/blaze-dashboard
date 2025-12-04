import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function SideNavbar() {
  return (
    <>
      <div className="max-lg:hidden lg:col-span-3 2xl:col-span-2 h-full border-r border-nt110">
        <div className="px-6 sticky top-0">
          <div className="py-[30px]">
            <Image src={logo} alt="Logo" />
          </div>
          <nav>
            <ul>
              <li className="mb-1 btngrdnt">
                <Link
                  className="btngrdnt-child w-full py-3 px-3 flex items-center gap-3 rounded-lg"
                  href="/">
                  <span className="d-center">
                    <i className="ph ph-house text-2xl"></i>
                  </span>
                  <span className="text-[15px] textclass">Home</span>
                </Link>
              </li>
              <li className="mb-1 cmngradient1hvr">
                <Link
                  className="btngrdnt-child w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/">
                  <span className="d-center">
                    <i className="ph ph-sticker text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Expungements</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/">
                  <span className="d-center">
                    <i className="ph ph-shopping-cart-simple text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Shops</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/">
                  <span className="d-center">
                    <i className="ph ph-ticket text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Events</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/blog">
                  <span className="d-center">
                    <i className="ph ph-article text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Blogs</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/analytics">
                  <span className="d-center">
                    <i className="ph ph-chart-pie text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Analytics</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/an">
                  <span className="d-center">
                    <i className="ph ph-file text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Invoices</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/">
                  <span className="d-center">
                    <i className="ph ph-users text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">User Managements</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/">
                  <span className="d-center">
                    <i className="ph ph-film-slate text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Medias</span>
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="cmngradient1hvr w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/support">
                  <span className="d-center">
                    <i className="ph ph-info text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Help & Support</span>
                </Link>
              </li>
              <li className="mb-1 relative">
                <Link
                  className="cmngradient1hvr cmngradient1hvrb w-full py-3 px-3 flex items-center gap-3 rounded-lg text-nt90"
                  href="/">
                  <span className="d-center">
                    <i className="ph ph-gear text-2xl"></i>
                  </span>
                  <span className="text-[15px]=">Setting</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
