"use client";

type HistoryItem = {
  name: string;
  email: string;
  phone: string;
  document: string;
  location: string;
  locationId: string;
  date: string;
  status: "Certified" | "Denied" | "Filed";
};

const statusStyle = {
  Certified: "text-nt180 bg-[#34453C3D]",
  Denied: "text-nt150 bg-[#FC4B6C3D]",
  Filed: "text-nt170 bg-[#FEC90F3D]",
};

const historyData: HistoryItem[] = [
  {
    name: "Noah Turner",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Liam Parker",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Noah Turner",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Denied",
  },
  {
    name: "Owen Foster",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Ryan Collins",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Evan Rhodes",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Filed",
  },
  {
    name: "Jack Howard",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Noah Turner",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Noah Turner",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Liam Parker",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Noah Turner",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Denied",
  },
  {
    name: "Owen Foster",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Ryan Collins",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Evan Rhodes",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Filed",
  },
  {
    name: "Jack Howard",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Noah Turner",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Evan Rhodes",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Filed",
  },
  {
    name: "Jack Howard",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
  {
    name: "Noah Turner",
    email: "john@email.com",
    phone: "(308) 555-0121",
    document: "Doc_docket.pdf",
    location: "New Jersey",
    locationId: "Silverduck204",
    date: "06/01/2025",
    status: "Certified",
  },
];

export default function ExpungementHistoryTableTwo() {
  return (
    <div className="w-full overflow-x-auto newexreq">
      <table className="w-full text-left min-w-[1050px]">
        <thead className="bg-[#0A0A0A]">
          <tr className="my-4 mx-7.5">
            <th className="text-primary font-medium">Name</th>
            <th className="text-primary font-medium">Contact</th>
            <th className="text-primary font-medium text-nowrap">Phone</th>
            <th className="text-primary font-medium text-nowrap">Document</th>
            <th className="text-primary font-medium">Location</th>
            <th className="text-primary font-medium text-nowrap">
              Date Registered
            </th>
            <th className="text-primary font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {historyData.map((item, i) => {
            const isLast = i === historyData.length - 1;

            return (
              <tr key={i} className="py-5 px-4">
                {/* NAME + CHECKBOX */}
                <td
                  className={`font-medium text-nowrap tbneeds pr-4 ${
                    !isLast ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  <div className="flex items-center justify-start gap-2 w-full">
                    <input
                      name="ehs_approval"
                      className="form-check-label custom-radio-label"
                      type="checkbox"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </td>

                {/* EMAIL */}
                <td
                  className={`tbneeds font-medium text-nt140 ${
                    !isLast ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  {item.email}
                </td>

                {/* PHONE */}
                <td
                  className={`tbneeds ${
                    !isLast ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  {item.phone}
                </td>

                {/* DOCUMENT */}
                <td
                  className={`tbneeds font-medium text-nt140 cursor-pointer text-nowrap ${
                    !isLast ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  {item.document}
                </td>

                {/* LOCATION */}
                <td
                  className={`tbneeds text-nowrap ${
                    !isLast ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  <span>{item.location}</span>
                  <span className="text-xs text-nt160">{item.locationId}</span>
                </td>

                {/* DATE */}
                <td
                  className={`tbneeds ${
                    !isLast ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  {item.date}
                </td>

                {/* STATUS */}
                <td
                  className={`tbneeds text-center ${
                    !isLast ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      statusStyle[item.status]
                    }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
