"use client";

import React, { useState } from "react";

const users = [
  "Expungement",
  "Event",
  "Invoice",
  "Product",
  "User",
  "Media",
  "Blog",
];

const ItemListToggle: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative flex flex-col items-start">
      <button onClick={() => setVisible((prev) => !prev)} className="btngrdnt">
        <span className="btngrdnt-child d-center gap-2 px-4 py-2 font-medium rounded-lg transition">
          <i className="ph ph-plus text-2xl"></i>
          Add New
        </span>
      </button>

      <div
        className={`absolute left-full top-12 transform transition-all duration-500 ease-in-out p-4 bg-nt10 rounded-lg ${
          visible ? "-translate-x-32 opacity-100" : "translate-x-0 opacity-0"
        }`}>
        <ul className="min-w-[134px] p-4">
          {users.map((user, idx) => (
            <li key={idx} className="pb-3 text-base text-nt30">
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemListToggle;
