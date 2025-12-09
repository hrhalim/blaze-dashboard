import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import Link from "next/link";
import TotalItemSummaryTshart from "@/components/Pages/NewOrders/TShart/TotalItemSummaryTshart";
import NewOrdersHat from "@/components/Pages/NewOrders/Hat/NewOrdersHat";

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
              <div className="flex items-center justify-between gap-3">
                <div className="">
                  <div className="flex items-center gap-1 mb-1">
                    <Link
                      href="/"
                      className="flex items-center gap-1 text-nt160 text-base lg:text-lg">
                      Inventory/Hat
                      <i className="ph ph-caret-right text-lg"></i>
                    </Link>
                    <span className="text-base lg:text-lg text-primary">Details</span>
                  </div>
                  <h1 className="text-[#BBBBBB] font-bold">
                    Classic Black Tee
                  </h1>
                </div>
                <Link href="/" className="btngrdnt">
                  <span className="btngrdnt-child d-center gap-2 px-4 py-2 font-medium rounded-lg transition">
                    <i className="ph ph-plus text-2xl"></i>
                    Add New
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              <div className="col-span-12 md:col-span-7 xl:col-span-8">
                {/* Products Inventory Starts here */}
                <NewOrdersHat />
                {/* Products Inventory Ends here */}
              </div>
              <div className="col-span-12 md:col-span-5 xl:col-span-4">
                {/* Upcoming Expungement Starts here */}
                <TotalItemSummaryTshart />
                {/* Upcoming Expungement Ends here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
