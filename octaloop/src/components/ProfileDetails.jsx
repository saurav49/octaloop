import { useState } from "react";
import { BsArrowLeftShort } from "../Icons/Icons";

const ProfileDetails = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="z-50 absolute right-0 p-8 flex flex-col items-start min-h-screen bg-white w-[90%] sm:w-[80%] md:w-[450px] shadow-md">
      <div className="w-[80%]">
        <h3 className="font-semibold text-2xl text-[#1a1a1a] mb-3">
          Personal Details
        </h3>
        <p className="text-sm text-[#97999B] font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          porro!
        </p>
        <hr className="text-[#f5f5f5] my-8" />
        <div className="w-full flex flex-col items-start space-y-2 mb-5">
          <label
            htmlFor="fullName"
            className="text-sm text-[#000000] font-semibold"
          >
            Full Name
          </label>
          <div className="relative sm:w-full flex items-center">
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start space-y-2 mb-5">
          <label
            htmlFor="email"
            className="text-sm text-[#000000] font-semibold"
          >
            Email
          </label>
          <div className="relative sm:w-full flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start space-y-2 mb-5">
          <label
            htmlFor="username"
            className="text-sm text-[#000000] font-semibold"
          >
            Username
          </label>
          <div className="relative sm:w-full flex items-center">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start space-y-2 mb-5">
          <label
            htmlFor="phone"
            className="text-sm text-[#000000] font-semibold"
          >
            Phone no.
          </label>
          <div className="relative sm:w-full flex items-center">
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone no."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
            />
          </div>
        </div>
        <hr className="text-[#f5f5f5] my-6" />
        <div className="flex items-center space-x-2 flex-wrap space-y-2 sm:space-y-0">
          <button className="rounded-3xl flex items-center space-x-2 py-4 px-6 bg-[#1a1a1a] text-white font-semibold">
            <BsArrowLeftShort className="font-xl" />
            <span>Update Details</span>
          </button>
          <button className="bg-[#f5f5f5] py-4 px-6 rounded-3xl text-[#97999B] font-semibold">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfileDetails };
