import React from "react";
import {
  ProfileCard,
  AddressCard,
  TaxCard,
  GstCard,
  OtherInfoCard,
} from "./index";

const Profile = () => {
  return (
    <div className="flex flex-col py-8 px-10 w-full">
      <h1 className="text-[#1a1a1a] font-semibold text-4xl mb-10">
        Contrator Profile
      </h1>
      <div className="flex items-start space-x-10 flex-wrap w-full">
        <div className="flex flex-col space-y-5">
          <ProfileCard />
          <AddressCard />
        </div>
        <div className="flex flex-col space-y-5">
          <TaxCard />
          <GstCard />
          <OtherInfoCard />
        </div>
      </div>
    </div>
  );
};

export { Profile };
