import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle";
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import ManagementAcCount from "@/components/Pages/Expungements/ManagementAcCount";
import TodayExpungement from "@/components/Pages/Expungements/TodayExpungement";
import UpcomingExpungements from "@/components/Pages/Expungements/UpcomingExpungements";
import ParticipantAgeGroups from "@/components/Pages/Expungements/ParticipantAgeGroups";
import StatesRepresented from "@/components/Pages/Expungements/StatesRepresented";
import RaceEthnicityRepresented from "@/components/Pages/Expungements/RaceEthnicityRepresented";
import ExpungementPerformance from "@/components/Pages/Expungements/ExpungementPerformance";
import ExpungementRequests from "@/components/Pages/Expungements/ExpungementRequests";
import ExpungementHistory from "@/components/Pages/Expungements/ExpungementHistory";

export default function Home() {
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
                  <h1>Expungement Management</h1>
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
            {/* Counter Starts here */}
            <ManagementAcCount />
            {/* Counter Ends here */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              <div className="col-span-12 md:col-span-12 xl:col-span-8">
                {/*Today Expungement Starts here */}
                <TodayExpungement />
                {/*Today Expungement Ends here */}
              </div>
              <div className="col-span-12 md:col-span-12 xl:col-span-4">
                {/* Upcoming Expungement Starts here */}
                <UpcomingExpungements />
                {/* Upcoming Expungement Ends here */}
              </div>
            </div>
            {/* New Exungement Request Starts here */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              {/* Participant Age Groups starts */}
              <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                <ParticipantAgeGroups />
              </div>
              {/* Participant Age Groups ends */}
              {/* States Represented starts */}
              <div className="col-span-12 sm:col-span-12 xl:col-span-6 2xl:col-span-4 max-xl:order-2">
                <StatesRepresented />
              </div>
              {/* States Represented ends */}
              {/* Race & Ethnicity Represented starts */}
              <div className="col-span-12 sm:col-span-6 2xl:col-span-4">
                <RaceEthnicityRepresented />
              </div>
              {/* Race & Ethnicity Represented ends */}
            </div>
            {/* Expungement Performance Starts here */}
            <ExpungementPerformance />
            {/* Expungement Performance Ends here */}
            {/* New Exungement Request Ends here */}
            {/* New Exungement Request Starts here */}
            <ExpungementRequests />
            {/* New Exungement Request Ends here */}
            {/* New Exungement Request Start here */}
            <ExpungementHistory />
            {/* New Exungement Request Ends here */}
          </div>
        </div>
      </div>
    </section>
  );
}
