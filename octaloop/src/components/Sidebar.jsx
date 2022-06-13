import React from "react";
import {
  MdSpaceDashboard,
  FaFileInvoice,
  MdPayment,
  CgProfile,
  GrSettingsOption,
  RiLogoutBoxRLine,
} from "../Icons/Icons";

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center space-y-8 py-8 px-5 bg-[#ffffff] shadow-sm min-h-screen">
      <div className="bg-[#1a1a1a] rounded-full py-1 px-3">
        <p className="text-[#f5da4d] font-semibold text-4xl">B</p>
      </div>

      <div className="flex flex-col items-center justify-between h-[70%]">
        <div className="space-y-12 flex flex-col items-center">
          <div className="border-2 border-[#f5f5f5] py-1 px-2 rounded-lg">
            <MdSpaceDashboard className="w-[24.75px] h-[31.5px]" />
          </div>
          <div className="border-2 border-[#f5f5f5] py-1 px-2 rounded-lg">
            <FaFileInvoice className="w-[24.75px] h-[31.5px]" />
          </div>
          <div className="border-2 border-[#f5f5f5] py-1 px-2 rounded-lg">
            <MdPayment className="w-[24.75px] h-[31.5px]" />
          </div>
          <div className="border-2 border-[#f5f5f5] py-1 px-2 bg-[#f5df4d] rounded-lg">
            <CgProfile className="w-[24.75px] h-[31.5px]" />
          </div>
          <div className="border-2 border-[#f5f5f5] py-1 px-2 rounded-lg">
            <GrSettingsOption className="w-[24.75px] h-[31.5px]" />
          </div>
        </div>
        <div className="border-2 border-[#f5f5f5] bg-[#574AE2] py-1 px-2 rounded-lg">
          <RiLogoutBoxRLine className="w-[24.75px] h-[31.5px] text-white" />
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
