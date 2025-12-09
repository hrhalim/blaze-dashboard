"use client";

type TeamMember = {
  name: string;
  email: string;
  designation: string;
  date: string;
  status: "Pending" | "Active" | "inactive";
};

const teamData: TeamMember[] = [
  {
    name: "Theresa Webb",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Eleanor Pena",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "Active",
  },
  {
    name: "Arlene McCoy",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "inactive",
  },
  {
    name: "Annette Black",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "Pending",
  },
  {
    name: "Cody Fisher",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "Active",
  },
  {
    name: "Jane Cooper",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "Active",
  },
  {
    name: "Wade Warren",
    email: "john@email.com",
    designation: "Ambassador",
    date: "06/01/2025",
    status: "Pending",
  },
];

const statusStyle: Record<string, string> = {
  Pending: "text-nt170 bg-[#FEC90F3D]",
  Active: "text-nt180 bg-[#34453C3D]",
  inactive: "text-nt170 bg-[#FEC90F3D]",
  Inactive: "text-nt170 bg-[#FEC90F3D]",
};

export default function TeamList() {
  return (
    <div className="bg-nt130 rounded-[20px] p-6 md:p-7.5 relative mb-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap mb-7.5">
        <div>
          <h4 className="text-nt18 mb-1">Team List</h4>
          <span className="text-[13px] text-nt160">
            Total Pending Expungement Request: 100
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          <form>
            <div className="flex items-center gap-2 py-3.5 px-4 rounded-lg bg-nt120">
              <i className="ph ph-magnifying-glass text-nt160 text-xl"></i>
              <input
                className="bg-transparent placeholder:text-nt160 text-nt160 sm:min-w-[315px]"
                type="text"
                placeholder="Search..."
              />
            </div>
          </form>

          <button className="btngrdnt">
            <span className="py-2 sm:py-3 px-4 btngrdnt-child d-center gap-2">
              All <i className="ph ph-caret-down"></i>
            </span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto teamlistsscroll">
        <table className="w-full text-left min-w-[800px]">
          <thead className="bg-[#0A0A0A]">
            <tr className="my-4 mx-7.5">
              <th className="text-primary font-medium py-4 ps-6">Name</th>
              <th className="text-primary font-medium py-4">Contact</th>
              <th className="text-primary font-medium text-nowrap py-4">
                Designation
              </th>
              <th className="text-primary font-medium text-nowrap text-center py-4">
                Date Registered
              </th>
              <th className="text-primary font-medium text-end py-4 pr-10">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {teamData.map((member, i) => (
              <tr key={i} className="px-4">
                {/* Name */}
                <td
                  className={`font-medium text-nowrap text-start py-4 ps-6 ${
                    i !== teamData.length - 1 ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  <div className="flex items-center justify-start gap-2">
                    <input
                      name="ehs_approval"
                      className="form-check-label custom-radio-label"
                      type="checkbox"
                    />
                    <span className="font-medium">{member.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td
                  className={`font-medium text-nt140 py-4 ${
                    i !== teamData.length - 1 ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  {member.email}
                </td>

                {/* Designation */}
                <td
                  className={`py-4 ${
                    i !== teamData.length - 1 ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  {member.designation}
                </td>

                {/* Date */}
                <td
                  className={`py-4 text-center ${
                    i !== teamData.length - 1 ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  {member.date}
                </td>

                {/* Status */}
                <td
                  className={`text-end py-4 pr-6 ${
                    i !== teamData.length - 1 ? "border-b border-[#1F1F1F]" : ""
                  }`}>
                  <span
                    className={`px-3 py-1 rounded-full text-sm text-center inline-block ${
                      statusStyle[member.status]
                    }`}>
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
