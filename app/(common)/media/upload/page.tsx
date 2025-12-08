import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import Link from "next/link";
import AddNewMedia from "@/components/Pages/Media/AddNewMedia";

export default function page() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid grid-cols-12 2xl:grid-cols-11 gap-6">
          {/* Side Navbar area Starts here */}
          <SideNavbar />
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
                    className="flex items-center gap-1 text-nt160 text-lg">
                    Home
                    <i className="ph ph-caret-right text-lg"></i>
                  </Link>
                  <span className="text-lg text-primary">Add New Media</span>
                </div>
                <h1 className="text-[#BBBBBB] font-bold">Add New Media</h1>
              </div>
            </div>
            <AddNewMedia/>
          </div>
        </div>
      </div>
    </section>
  );
}
