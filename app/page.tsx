import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle";
import WelBanner from "@/components/Pages/Home/WelBanner";
import AcCount from "@/components/Pages/Home/AcCount";
import UpcomingEx from "@/components/Pages/Home/UpcomingEx";
import ProductsInventory from "@/components/Pages/Home/ProductsInventory";
import UpcomingExMain from "@/components/Pages/Home/UpcomingExMain";
import RevenueCard from "@/components/Pages/Home/RevenueCard";
import EventsCard from "@/components/Pages/Home/EventsCard";
import TotalBlogsCard from "@/components/Pages/Home/TotalBlogsCard";
import NewOrdersTable from "@/components/Pages/Home/NewOrdersTable";
import TicketPurchasesCard from "@/components/Pages/Home/TicketPurchasesCard";
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";

export default function Home() {
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
                  <h1>Welcome Chirali</h1>
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
            </div>
            {/* Welcome Banner Starts here */}
            <WelBanner />
            {/* Welcome Banner Ends here */}
            {/* Counter Starts here */}
            <AcCount />
            {/* Counter Ends here */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              <div className="col-span-12 md:col-span-5 xl:col-span-4">
                {/* Upcoming Expungement Starts here */}
                <UpcomingEx />
                {/* Upcoming Expungement Ends here */}
              </div>
              <div className="col-span-12 md:col-span-7 xl:col-span-8">
                {/* Products Inventory Starts here */}
                <ProductsInventory />
                {/* Products Inventory Ends here */}
              </div>
            </div>
            {/* New Exungement Request Starts here */}
            <UpcomingExMain />
            {/* New Exungement Request Ends here */}
            {/* Revenue, Events, blog starts here */}
            <div className="grid grid-cols-12 gap-6 mb-6">
              {/* Revenue Starts here */}
              <RevenueCard />
              {/* Revenue Ends here */}
              {/* Revenue Starts here */}
              <EventsCard />
              {/* Revenue Ends here */}
              {/* Total Blogs Starts here */}
              <TotalBlogsCard />
              {/* Total Blogs Ends here */}
            </div>
            {/* Revenue, Events, blog Ends here */}
            <div className="grid grid-cols-12 gap-6">
              <NewOrdersTable />
              <TicketPurchasesCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
