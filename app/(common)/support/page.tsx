
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";   
import Support from "@/components/Pages/Support/Support";


export default function page() {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="grid grid-cols-12 2xl:grid-cols-11 gap-6">
          {/* Side Navbar area Starts here */}
          {/* Side Navbar area Starts here */}
          <div className="max-lg:hidden lg:col-span-3 2xl:col-span-2 h-full border-r border-nt110">
            <SideNavbar />
          </div> 
          <div className="col-span-12 lg:col-span-9">
            <div className="pt-[30px] mb-6">
              {/* Header Topbar area Starts here */}
              <HeaderTopBar />
            </div>
            <Support/>
          </div>
        </div>
      </div>
    </section>
  );
}