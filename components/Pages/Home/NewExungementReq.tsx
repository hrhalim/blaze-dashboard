"use client";

type Patient = {
  name: string;
  address: string;
  phone: string;
  email: string;
  checklist: string;
  clinic: string;
  date: string;
  status: "Pending" | "Eligible" | "Confirmed";
};

const data: Patient[] = [
  {
    name: "Bessie Cooper",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Courtney Henry",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Guy Hawkins",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Devon Lane",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Confirmed",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Eligible",
  },
  {
    name: "Eleanor Pena",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Arlene McCoy",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Kristin Watson",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Ralph Edwards",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Jacob Jones",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    status: "Pending",
  },
];

export default function NewExungementReq() {
  return (
    <div className="w-full overflow-x-auto newexreq">
      <table className={`w-full text-left min-w-[1050px]`}>
        <thead className="bg-[#0A0A0A]">
          <tr className="my-4 mx-7.5">
            <th className="text-primary font-medium">Name</th>
            <th className="text-primary font-medium">Address</th>
            <th className="text-primary font-medium text-nowrap">
              Phone & Email
            </th>
            <th className="text-primary font-medium text-nowrap">
              Checklist Information
            </th>
            <th className="text-primary font-medium">Clinic</th>
            <th className="text-primary font-medium text-nowrap">
              Registration Date
            </th>
            <th className="text-primary font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={i} className="py-5 px-4">
              <td className="font-medium text-nowrap border-b border-[#1F1F1F] tbneeds">
                {p.name}
              </td>
              <td className="text-[12px]! border-b border-[#1F1F1F] tbneeds">
                {p.address}
              </td>
              <td className="border-b border-[#1F1F1F] tbneeds">
                <p>{p.phone}</p>
                <p className="text-blue-400">{p.email}</p>
              </td>
              <td className="text-nowrap border-b border-[#1F1F1F] tbneeds">
                <span
                  className={
                    p.checklist === "Confirmed"
                      ? "text-green-400"
                      : "text-blue-400"
                  }>
                  {p.checklist}
                </span>
              </td>
              <td className="text-nowrap border-b border-[#1F1F1F] tbneeds">
                {p.clinic}
              </td>
              <td className="border-b border-[#1F1F1F] tbneeds">{p.date}</td>
              <td className="border-b border-[#1F1F1F] tbneeds">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    p.status === "Pending"
                      ? "text-nt170 bg-[#4B452F3D]"
                      : p.status === "Eligible"
                      ? "text-nt180 bg-[#34453C40]"
                      : "bg-blue-700"
                  }`}>
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
