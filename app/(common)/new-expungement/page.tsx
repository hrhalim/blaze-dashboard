import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import Link from "next/link";
import NewExpungement from "@/components/Pages/NewExpungement/NewExpungement";

export default function page() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid grid-cols-12 2xl:grid-cols-11 gap-6">
          {/* Side Navbar area Starts here */}
          <div className="max-lg:hidden lg:col-span-3 2xl:col-span-2 h-full border-r border-nt110">
            <SideNavbar />
          </div>
          {/* Side Navbar area Ends here */}
          <div className="col-span-12 lg:col-span-9">
            <div className="pt-[30px] mb-6">
              {/* Header Topbar area Starts here */}
              <HeaderTopBar />
              {/* Header Topbar area Starts here */}
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-1">
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-nt160 text-sm md:text-base lg:text-lg">
                    Home
                    <i className="ph ph-caret-right text-sm md:text-base lg:text-lg"></i>
                  </Link>
                  <span className="text-sm md:text-base lg:text-lg text-primary">
                    New Expungement
                  </span>
                </div>
                <h1 className="text-[#BBBBBB] font-bold">New Expungement</h1>
              </div>
            </div>
            <NewExpungement />
          </div>
        </div>
      </div>
    </section>
  );
}
