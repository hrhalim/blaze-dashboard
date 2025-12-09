import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle";
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import EventAcCount from "@/components/Pages/EventManagement/EventAcCount";
import TotalRevenueEvent from "@/components/Pages/EventManagement/TotalRevenueEvent";
import EventDetailsMain from "@/components/Pages/EventManagement/EventDetailsMain";
import UpcomingEvents from "@/components/Pages/EventManagement/UpcomingEvents";
import TopPerformanceEvents from "@/components/Pages/EventManagement/TopPerformanceEvents";
import StateRepresented from "@/components/Pages/EventManagement/StateRepresented";
import GenderRepresented from "@/components/Pages/EventManagement/GenderRepresented";
import TicketHistory from "@/components/Pages/EventManagement/TicketHistory";
import EventPerformance from "@/components/Pages/EventManagement/EventPerformance";

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
                  <h1>Event Management</h1>
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
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 sm:col-span-4">
                <TotalRevenueEvent />
              </div>
              <div className="col-span-12 sm:col-span-8">
                <EventAcCount />
              </div>
            </div>
            {/* Counter Starts here */}
            {/* Counter Ends here */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              <div className="col-span-12 md:col-span-12 xl:col-span-8">
                {/*Today Events Starts here */}
                <EventDetailsMain />
                {/*Today Events Ends here */}
              </div>
              <div className="col-span-12 md:col-span-12 xl:col-span-4">
                {/* Upcoming Events Starts here */}
                <UpcomingEvents />
                {/* Upcoming Events Ends here */}
              </div>
            </div>
            {/* New Exungement Request Starts here */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              {/* Top Performance Events starts */}
              <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <TopPerformanceEvents />
              </div>
              {/* Top Performance Events ends */}
              {/* States Represented starts */}
              <div className="col-span-12 md:col-span-12 xl:col-span-6 2xl:col-span-4 max-xl:order-2">
                <StateRepresented />
              </div>
              {/* States Represented ends */}
              {/* Race & Ethnicity Represented starts */}
              <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <GenderRepresented />
              </div>
              {/* Race & Ethnicity Represented ends */}
            </div>
            {/* Ticket History Starts here */}
            <TicketHistory />
            {/* Ticket History Ends here */}
            {/* Ticket History Ends starts */}
            <EventPerformance />
            {/* Ticket History Ends here */}
          </div>
        </div>
      </div>
    </section>
  );
}
