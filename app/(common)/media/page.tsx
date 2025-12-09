
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar"; 
import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle"; 
import UserManagement from "@/components/Pages/Media/UserManagement";
import Memories from "@/components/Pages/Media/Memories";
import TopActiveMedias from "@/components/Pages/Media/TopActiveMedias";
import MediaLinks from "@/components/Pages/Media/MediaLinks";

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
                        <div className="flex items-center justify-between max-sm:flex-wrap gap-3">
                            <div className="">
                                <h1>Media Management</h1>
                            </div>
                            <div className="flex items-center gap-2 max-sm:flex-wrap">
                                <div className="">
                                    <DatePicker />
                                </div>
                                <div className="">
                                    <ItemListToggle />
                                </div>
                            </div>
                        </div>
                        {/* UserManagement Starts here */}
                        <UserManagement/>
                        {/* Blog Update Starts here */}
                        <Memories/>
                        {/* Blog Performance, Audience, Average Ratings start here */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <TopActiveMedias/>
                            <MediaLinks/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}