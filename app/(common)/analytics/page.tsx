import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle";
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import TotalRevenue from "@/components/Pages/Analytics/TotalRevenue";
import TotalEarnings from "@/components/Pages/Analytics/TotalEarnings";
import BlogPublished from "@/components/Pages/Analytics/BlogPublished"; 
import TotalAnalysis from "@/components/Pages/Analytics/TotalAnalysis";
import TotalSales from "@/components/Pages/Analytics/TotalSales";
import OverviewProfit from "@/components/Pages/Analytics/OverviewProfit";
import YearlyExpungementApprovals from "@/components/Pages/Analytics/YearlyExpungementApprovals"; 
import AnalyticsExpungements from "@/components/Pages/Analytics/AnalyticsExpungements";
import EventsOrganized from "@/components/Pages/Analytics/EventsOrganized";
import MonthlyEarnings from "@/components/Pages/Analytics/MonthlyEarnings";
import MostVisited from "@/components/Pages/Analytics/MostVisited";
import MostVisitedAnalysisRevenue from "@/components/Pages/Analytics/MostVisitedAnalysisRevenue";
import MostViewPageImpression3rd from "@/components/Pages/Analytics/MostViewPageImpression3rd";
import MostViewPageImpression2nd from "@/components/Pages/Analytics/MostViewPageImpression2nd";
import MostViewPageImpressionChange from "@/components/Pages/Analytics/MostViewPageImpressionChange";

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
                  <h1>Analytics</h1>
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
            {/* Total Revenue here */}
            <TotalRevenue/>
            {/* TotalEarnings, Expungements, BlogPublished starts here */}
            <div className="grid xl:grid-cols-[1fr_268px_1fr] gap-6 mb-6">
              <TotalEarnings/> 
              <div>
               <AnalyticsExpungements/>
               <EventsOrganized/>
              </div>
              <BlogPublished/>
            </div>
            {/* Total Analysis */}
            <TotalAnalysis/>
            {/* Total Sales,OverviewProfit, YearlyExpungementApprovals, MonthlyEarnings Starts here */}
            <div className="block lg:grid xl:grid-cols-[1fr_1fr_270px] gap-6 mb-6">
                <TotalSales/>
                <OverviewProfit/>
                <div>
                  <YearlyExpungementApprovals/>
                  <MonthlyEarnings/>
                </div>
            </div>
            {/* MostVisited,MostViewPageImpressionChange, MostViewPageImpression2nd, MostViewPageImpression3rd, MostVisitedAnalysisRevenue Starts here */}
            <div className="block md:grid xl:grid-cols-[1fr_1fr_270px] gap-6 bg-[#171717] p-6 rounded-2xl">
                <MostVisited/>
                <div>
                  <MostViewPageImpressionChange/>
                  <div className="flex items-center justify-between gap-6">
                     <MostViewPageImpression2nd/>
                     <MostViewPageImpression3rd/>
                  </div>
                </div>
                <MostVisitedAnalysisRevenue/>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
