"use client";

type Patient = {
  name: string;
  address: string;
  phone: string;
  email: string;
  checklist: string;
  clinic: string;
  date: string;
  Certified: string;
  QueueNo: string;
  status: "Pending" | "In Queue" | "Confirmed";
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
    Certified: "11",
    QueueNo: "22",
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
    Certified: "12",
    QueueNo: "22",
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
    Certified: "13",
    QueueNo: "22",
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
    Certified: "14",
    QueueNo: "29",
    status: "In Queue",
  },
  {
    name: "Eleanor Pena",
    address: "6391 Elgin St. Celina, Delaware 10299",
    phone: "(308) 555-0121",
    email: "john@email.com",
    checklist: "Review & Confirm",
    clinic: "New Jersey",
    date: "06/01/2025",
    Certified: "15",
    QueueNo: "22",
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
    Certified: "16",
    QueueNo: "28",
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
    Certified: "17",
    QueueNo: "22",
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
    Certified: "18",
    QueueNo: "23",
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
    Certified: "19",
    QueueNo: "26",
    status: "Pending",
  },
];

export default function ExpungementRequest2() {
  return (
    <div className="w-full overflow-x-auto z-0">
      <table className={`w-full text-left min-w-[1050px]`}>
        <thead className="bg-[#0A0A0A]">
          <tr className="my-4 mx-7.5">
            <th className="text-primary font-medium py-5 ps-7.5">Name</th>
            <th className="text-primary font-medium py-5">Address</th>
            <th className="text-primary font-medium text-nowrap py-5">
              Phone & Email
            </th>
            <th className="text-primary font-medium text-nowrap py-5 pr-5">
              Queue No.
            </th>
            <th className="text-primary font-medium py-5">
              Checklist <br /> Information
            </th>
            <th className="text-primary font-medium py-5">Clinic</th>
            <th className="text-primary font-medium text-nowrap py-5">
              Registration Date
            </th>
            <th className="text-primary font-medium py-5">Certified</th>
            <th className="text-primary font-medium py-5 ps-5">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p, i) => (
            <tr key={i} className="py-5 px-4">
              <td className="font-medium text-nowrap border-b border-[#1F1F1F] py-5">
                {p.name}
              </td>
              <td className="text-[12px]! border-b border-[#1F1F1F] py-5">
                <span className="w-[140px]">{p.address}</span>
              </td>
              <td className="border-b border-[#1F1F1F] py-5">
                <p>{p.phone}</p>
                <p className="text-blue-400">{p.email}</p>
              </td>
              <td className="border-b border-[#1F1F1F] py-5 ps-5">
                {p.QueueNo}
              </td>
              <td className="text-nowrap border-b border-[#1F1F1F] py-5">
                <span
                  className={
                    p.checklist === "Confirmed"
                      ? "text-green-400"
                      : "text-blue-400"
                  }>
                  {p.checklist}
                </span>
              </td>
              <td className="text-nowrap border-b border-[#1F1F1F] py-5">
                {p.clinic}
              </td>
              <td className="border-b border-[#1F1F1F] py-5 ps-5">{p.date}</td>
              <td className="border-b border-[#1F1F1F] py-5 ps-5">
                {p.Certified}
              </td>
              <td className="border-b border-[#1F1F1F] py-5 inline-block text-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    p.status === "Pending"
                      ? "text-nt170 bg-[#4B452F3D]"
                      : p.status === "In Queue"
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
