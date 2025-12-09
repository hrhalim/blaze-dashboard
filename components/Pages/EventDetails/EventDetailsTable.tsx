"use client";
import { usePopup } from "@/hooks/usePopup";
import UserAttendance from "./UserAttendance";

type Row = {
  name: string;
  email: string;
  phone: string;
  attendance: string;
  clinic: string;
  subClinic: string;
  date: string;
  revenue: string;
};

const rows: Row[] = [
  {
    name: "Wade Warren",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Theresa Webb",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Eleanor Pena",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Kathryn Murphy",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Arlene McCoy",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Annette Black",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Jenny Wilson",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Cody Fisher",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Devon Lane",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Jacob Jones",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
  {
    name: "Floyd Miles",
    email: "john@email.com",
    phone: "(308) 555-0121",
    attendance: "Attendance",
    clinic: "New Jersey",
    subClinic: "Silverduck204",
    date: "06/01/2025",
    revenue: "$45",
  },
];

export default function EventDetailsTable() {
  const { open, show, hide } = usePopup(false);
  return (
    <div className="w-full overflow-x-auto newexreq">
      <table className="w-full text-left min-w-[1050px]">
        <thead className="bg-[#0A0A0A]">
          <tr className="my-4 mx-7.5">
            <th className="text-primary font-medium">Name</th>
            <th className="text-primary font-medium">Contact</th>
            <th className="text-primary font-medium text-nowrap">Phone</th>
            <th className="text-primary font-medium text-nowrap">Attendance</th>
            <th className="text-primary font-medium">Clinic</th>
            <th className="text-primary font-medium text-nowrap pr-10">
              Date Registered
            </th>
            <th className="text-primary font-medium">Revenue</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="py-5 px-4">
              <td className="font-medium text-nowrap tbneeds border-b border-[#1F1F1F]">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="font-medium">{row.name}</span>
                </div>
              </td>

              <td className="tbneeds font-medium text-nt140 border-b border-[#1F1F1F]">
                {row.email}
              </td>

              <td className="tbneeds border-b border-[#1F1F1F]">{row.phone}</td>

              <td
                onClick={show}
                className="tbneeds font-medium text-nt140 cursor-pointer text-nowrap border-b border-[#1F1F1F]">
                {row.attendance}
              </td>

              <td className="tbneeds text-nowrap border-b border-[#1F1F1F]">
                <span>{row.clinic} </span>
                <span className="text-xs text-nt160">{row.subClinic}</span>
              </td>

              <td className="tbneeds border-b border-[#1F1F1F]">{row.date}</td>

              <td className="tbneeds text-center border-b border-[#1F1F1F]">
                {row.revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup content Starts here */}
      {open && (
        <div
          className={`
                  fixed inset-0 bg-black/60 
                  transition-opacity duration-500 
                  flex items-center justify-center
                  z-40
                `}
          onClick={hide}></div>
      )}

      <div
        className={`
                fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-[617px]
                bg-white rounded-xl shadow-lg p-4 z-50
                transition-all duration-400 ease-out
                ${
                  open
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-0 pointer-events-none"
                }
              `}>
        {/* HEADER */}
        <div className="flex justify-between items-center gap-2 mb-4">
          <h1 className="text-nt30">User Attendance</h1>
          <button
            onClick={hide}
            className="text-nt30 bg-[#F4F4F4] border border-[#EAEAEA] rounded-full p-2.5 d-center">
            <i className="ph ph-x"></i>
          </button>
        </div>

        {/* CONTENT */}
        <UserAttendance />
      </div>
      {/* Popup content Starts here */}
    </div>
  );
}
