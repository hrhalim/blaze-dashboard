import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import Link from "next/link"; 
import EditMedia from "@/components/Pages/Media/EditMedia";

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
                    className="flex items-center gap-1 text-nt160 text-lg">
                    Home
                    <i className="ph ph-caret-right text-lg"></i>
                  </Link>
                  <span className="text-lg text-primary">Edit Media</span>  
                </div>
                <h1 className="text-[#BBBBBB] font-bold">Edit Media</h1>
              </div>
            </div>
            <EditMedia/>
          </div>
        </div>
      </div>
    </section>
  );
}
