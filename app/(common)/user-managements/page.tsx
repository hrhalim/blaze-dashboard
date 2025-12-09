import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle";
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import UserManagementCount from "@/components/Pages/UserManagements/UserManagementCount";
import TeamList from "@/components/Pages/UserManagements/TeamList";
import PendingPartnerRequest from "@/components/Pages/UserManagements/PendingPartnerRequest";
import StateRepresented from "@/components/Pages/EventManagement/StateRepresented";
import GenderRepresented from "@/components/Pages/EventManagement/GenderRepresented";
import ParticipantAgeGroups from "@/components/Pages/UserManagements/ParticipantAgeGroups";
import PopupDemo from "@/components/Pages/UserManagements/PopupDemo";

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
                  <h1>User Management</h1>
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
            <UserManagementCount />
            {/* Counter Ends here */}
            {/* Team List Starts */}
            <TeamList />
            {/* Team List Ends */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              {/* Top Performance Events starts */}
              <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <ParticipantAgeGroups />
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
            {/* Pending Partner Request Starts */}
            <PendingPartnerRequest />
            {/* Pending Partner Request Ends */}
            <PopupDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
