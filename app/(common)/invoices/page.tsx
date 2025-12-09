import DatePicker from "@/components/DatePicker";
import ItemListToggle from "@/components/ItemListToggle";
import SideNavbar from "@/components/Share/SideNavbar";
import HeaderTopBar from "@/components/Share/HeaderTopBar";
import InvoicesCount from "@/components/Pages/Invoices/InvoicesCount";
import ActiveInvoices from "@/components/Pages/Invoices/ActiveInvoices";
import TopClients from "@/components/Pages/Invoices/TopClients";
import InvoiceHistory from "@/components/Pages/Invoices/InvoiceHistory";
import HighestGrossingInvoices from "@/components/Pages/Invoices/HighestGrossingInvoices";
import TopBusinesses from "@/components/Pages/Invoices/TopBusinesses";
import BusinessesRepresented from "@/components/Pages/Invoices/BusinessesRepresented";
import InvoicePopUp from "@/components/Pages/Invoices/InvoicePopUp";

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
                  <h1>Invoice Management</h1>
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
            <InvoicesCount />
            {/* Counter Ends here */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              <div className="col-span-12 md:col-span-12 xl:col-span-8">
                {/*Today Events Starts here */}
                <ActiveInvoices />
                {/*Today Events Ends here */}
              </div>
              <div className="col-span-12 md:col-span-12 xl:col-span-4">
                {/* Upcoming Events Starts here */}
                <TopClients />
                {/* Upcoming Events Ends here */}
              </div>
            </div>
            {/* Invoice History Starts here */}
            <InvoiceHistory />
            {/* Invoice History Ends here */}
            {/* New Exungement Request Starts here */}
            <div className="grid grid-cols-12 gap-6 mb-7.5">
              {/* Highest Grossing Invoices starts */}
              <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <HighestGrossingInvoices />
              </div>
              {/* Highest Grossing Invoices ends */}
              {/* Top Businesses starts */}
              <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <TopBusinesses />
              </div>
              {/* Top Businesses ends */}
              {/* Businesses represented starts */}
              <div className="col-span-12 md:col-span-12 2xl:col-span-4">
                <BusinessesRepresented />
              </div>
              {/* Businesses represented ends */}
            </div>
            <InvoicePopUp />
          </div>
        </div>
      </div>
    </section>
  );
}
