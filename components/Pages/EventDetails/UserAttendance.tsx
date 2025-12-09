export default function UserAttendance() {
  return (
    <div>
      <span className="lg:text-base mb-4 lg:mb-6 text-nt30 font-medium">
        General Information
      </span>
      <div className="mb-6">
        <div className="flex justify-between gap-3 flex-wrap pb-2 border-b border-[#EAEAEA] mb-3">
          <span className="lg:text-base font-medium text-[#000000A3]">
            Name:
          </span>
          <span className="lg:text-base font-medium text-[#000000A3]">
            Hatim Rahman Abdullah Orbix
          </span>
        </div>
        <div className="flex justify-between gap-3 flex-wrap pb-2 border-b border-[#EAEAEA] mb-3">
          <span className="lg:text-base font-medium text-[#000000A3]">
            Address:
          </span>
          <span className="lg:text-base font-medium text-[#000000A3]">
            Gelsenkirchen
          </span>
        </div>
        <div className="flex justify-between gap-3 flex-wrap pb-2 border-b border-[#EAEAEA] mb-3">
          <span className="lg:text-base font-medium text-[#000000A3]">
            Phone Number
          </span>
          <span className="lg:text-base font-medium text-[#000000A3]">
            (201) 555-0124
          </span>
        </div>
        <div className="flex justify-between gap-3 flex-wrap pb-2 border-b border-[#EAEAEA] mb-3">
          <span className="lg:text-base font-medium text-[#000000A3]">
            Email:
          </span>
          <span className="lg:text-base font-medium text-[#000000A3]">
            willie.jennings@example.com
          </span>
        </div>
        <div className="flex justify-between gap-3 flex-wrap">
          <span className="lg:text-base font-medium text-[#000000A3]">
            Ticket Quantity:
          </span>
          <span className="lg:text-base font-medium text-[#000000A3]">
            4 Tickets
          </span>
        </div>
      </div>
      <button className="w-full btngrdnt">
        <span className="btngrdnt-child py-3 px-5 md:text-base lg:text-lg">
          Present
        </span>
      </button>
    </div>
  );
}
