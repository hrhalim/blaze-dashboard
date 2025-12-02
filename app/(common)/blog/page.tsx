
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import Link from "next/link";
import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle"; 
import BlogMangement from "@/components/Pages/Blog/BlogMangement";
import BlogUpdate from "@/components/Pages/Blog/BlogUpdate";
import BlogPerformance from "@/components/Pages/Blog/BlogPerformance";
import Audience from "@/components/Pages/Blog/Audience";
import AverageRatings from "@/components/Pages/Blog/AverageRatings";

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
                        <div className="flex items-center justify-between max-sm:flex-wrap gap-3">
                            <div className="">
                                <h1>Blog Management</h1>
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
                        {/* Blog Mangement Starts here */}
                        <BlogMangement/>
                        {/* Blog Update Starts here */}
                        <BlogUpdate/>
                        {/* Blog Performance, Audience, Average Ratings start here */}
                        <div className="grid grid-cols-12 gap-6 mb-6">
                            <BlogPerformance/>
                            <Audience/>
                            <AverageRatings/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}