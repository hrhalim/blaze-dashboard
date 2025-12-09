import Link from "next/link";
import Image from "next/image";
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import noitems from "@/public/images/noitems.png";

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
              {/* Event Notification area Starts here */}
              <div className="">
                <div className="mb-6">
                  <div className="flex items-center justify-between flex-wrap gap-3 md:gap-5">
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <Link
                          href="/"
                          className="flex items-center gap-1 text-nt160 text-base lg:text-lg">
                          Home <i className="ph ph-caret-right text-lg"></i>
                        </Link>
                        <div className="flex items-center gap-1">
                          <span className="text-base lg:text-lg text-primary">
                            Notifications
                          </span>
                          <span className="text-lg text-[#777E89]">
                            (November 25, 2025)
                          </span>
                        </div>
                      </div>
                      <h1 className="text-[#BBBBBB] font-bold">
                        Event Notifications
                      </h1>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-3">
                      <Link href="/">
                        <span className="bg-[#1D1B26] py-3 px-4 rounded-lg font-medium">
                          Products
                        </span>
                      </Link>
                      <Link href="/" className="btngrdnt">
                        <span className="btngrdnt-child py-3 px-4 font-medium">
                          Event
                        </span>
                      </Link>
                      <Link href="/">
                        <span className="bg-[#1D1B26] py-3 px-4 rounded-lg font-medium">
                          Expungements
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mb-5.2">
                    <Image
                      className="mx-auto max-md:w-[250px]"
                      src={noitems}
                      alt="No Items"
                    />
                  </div>
                  <div className="">
                    <h2 className="mb-3 md:mb-4">No Ticket Purchases</h2>
                    <p className="text-sm md:text-base text-nt160">
                      There are no new ticket purchases at this time.
                    </p>
                  </div>
                </div>
              </div>
              {/* Event Notification area Starts here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
