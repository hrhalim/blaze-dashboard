"use client";
import { usePopup } from "@/hooks/usePopup";

export default function PopupDemo() {
  const { open, show, hide } = usePopup(false);

  return (
    <div>
      <button
        type="button"
        onClick={show}
        className="tbneeds font-medium text-nt140 cursor-pointer text-nowrap border-b border-[#1F1F1F]">
        Click here
      </button>
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
                w-[90%] max-w-[704px]
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
          <h1 className="text-nt30">Add new user</h1>
          <button
            onClick={hide}
            className="text-nt30 bg-[#F4F4F4] border border-[#EAEAEA] rounded-full p-2.5 d-center">
            <i className="ph ph-x"></i>
          </button>
        </div>
        {/* CONTENT */}
        <form>
          <div className="flex items-center gap-3 sm:gap-2 max-sm:flex-wrap mb-3">
            <div className="w-full">
              <label className="mb-1 lg:text-base block text-nt30 font-medium">
                First name
              </label>
              <input
                type="text"
                placeholder="Enter First name"
                className="bg-[#F2F2F2] px-4 py-3 rounded-lg text-nt30 placeholder:text-[#15151551] lg:placeholder:text-lg"
              />
            </div>
            <div className="w-full">
              <label className="mb-1 lg:text-base block text-nt30 font-medium">
                Last name
              </label>
              <input
                type="text"
                placeholder="Enter your Last name"
                className="bg-[#F2F2F2] px-4 py-3 rounded-lg text-nt30 placeholder:text-[#15151551] lg:placeholder:text-lg"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-2 max-sm:flex-wrap mb-3">
            <div className="w-full">
              <label className="mb-1 lg:text-base block text-nt30 font-medium">
                Phone number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="bg-[#F2F2F2] px-4 py-3 rounded-lg text-nt30 placeholder:text-[#15151551] lg:placeholder:text-lg"
              />
            </div>
            <div className="w-full">
              <label className="mb-1 lg:text-base block text-nt30 font-medium">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#F2F2F2] px-4 py-3 rounded-lg text-nt30 placeholder:text-[#15151551] lg:placeholder:text-lg"
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <span className="mb-1 lg:text-base block text-nt30 font-medium">
              Designation
            </span>
            <div className="relative">
              <select className="w-full bg-[#F2F2F2] text-[#15151551] border-none rounded-lg px-4 py-3 lg:text-base focus:outline-none cursor-pointer">
                <option value="" disabled selected>
                  Your Designation
                </option>
                <option value="electronics">Ambassadors</option>
                <option value="fashion">lawyers</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-2 max-sm:flex-wrap mb-3">
            <div className="w-full">
              <label className="mb-1 lg:text-base block text-nt30 font-medium">
                City
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                className="bg-[#F2F2F2] px-4 py-3 rounded-lg text-nt30 placeholder:text-[#15151551] lg:placeholder:text-lg"
              />
            </div>
            <div className="w-full">
              <label className="mb-1 lg:text-base block text-nt30 font-medium">
                State
              </label>
              <input
                type="text"
                placeholder="Enter your State"
                className="bg-[#F2F2F2] px-4 py-3 rounded-lg text-nt30 placeholder:text-[#15151551] lg:placeholder:text-lg"
              />
            </div>
          </div>
          <div className="w-full mb-6 sm:mb-8">
            <label className="mb-1 lg:text-base block text-nt30 font-medium">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter your Address"
              className="bg-[#F2F2F2] px-4 py-3 rounded-lg text-nt30 placeholder:text-[#15151551] lg:placeholder:text-lg"
            />
          </div>
          <button className="btngrdnt block w-full">
            <span className="btngrdnt-child py-3 px-3">Invite</span>
          </button>
        </form>
      </div>
    </div>
  );
}
