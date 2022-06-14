import { useState } from "react";
import { BsArrowLeftShort, AiOutlinePlus } from "../Icons/Icons";
import { useAuth } from "../hooks/useAuth";

const ProfileDetails = () => {
  let { userInfo, updateUserData, showEditSidebar, setShowEditSidebar } =
    useAuth();
  const [address, setAddress] = useState(userInfo?.address || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [username, setUsername] = useState(userInfo?.name || "");
  const [zipcode, setZipcode] = useState(userInfo?.zipcode || "");
  const [state, setState] = useState(userInfo?.state || "");
  const [city, setCity] = useState(userInfo?.city || "");
  const [country, setCountry] = useState(userInfo?.country || "");

  const [showFields, setShowFields] = useState({
    city: false,
    state: false,
    country: false,
  });

  const resetData = () => {
    setAddress("");
    setEmail("");
    setUsername("");
    setZipcode("");
    setShowEditSidebar(false);
  };

  const handleUpdateData = (
    address,
    email,
    username,
    zipcode,
    state,
    city,
    country
  ) => {
    updateUserData(address, email, username, zipcode, state, city, country);
  };

  const handleShowField = (type) => {
    let fieldType = type;
    if (showFields[type]) {
      fieldType = "state";
    }
    setShowFields((prevState) => ({ ...prevState, [fieldType]: true }));
  };

  return (
    <div
      className={`z-50 absolute right-0 p-8 flex flex-col items-start min-h-screen bg-white transition-all duration-500 shadow-md ${
        showEditSidebar
          ? "w-[90%] sm:w-[80%] md:w-[450px] opacity-100"
          : "w-[0px] sm:w-[0px] md:w-[0px] opacity-0"
      }`}
    >
      <div
        className={`${
          showEditSidebar ? "w-[95%] opacity-100" : "w-[0px] opacity-0"
        }`}
      >
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
        {showFields.city && (
          <div className="w-full flex flex-col items-start space-y-2 mb-5">
            <label
              htmlFor="state"
              className="text-sm text-[#000000] font-semibold"
            >
              State
            </label>
            <div className="relative sm:w-full flex items-center">
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
              />
            </div>
          </div>
        )}
        {showFields.state && (
          <div className="w-full flex flex-col items-start space-y-2 mb-5">
            <label
              htmlFor="city"
              className="text-sm text-[#000000] font-semibold"
            >
              City
            </label>
            <div className="relative sm:w-full flex items-center">
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
              />
            </div>
          </div>
        )}

        {!showFields.state ? (
          <button
            onClick={() => handleShowField("city")}
            className="flex items-center space-x-2 p-2 mb-3 rounded-lg text-[#574AE2] border-2 border-[#F5F5F5] bg-white"
          >
            <AiOutlinePlus />
            <span>Add New</span>
          </button>
        ) : null}
        <div className="w-full flex flex-col items-start space-y-2 mb-5">
          <label
            htmlFor="address"
            className="text-sm text-[#000000] font-semibold"
          >
            Address
          </label>
          <div className="relative sm:w-full flex items-center">
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start space-y-2 mb-5">
          <label
            htmlFor="zipcode"
            className="text-sm text-[#000000] font-semibold"
          >
            Zipcode
          </label>
          <div className="relative sm:w-full flex items-center">
            <input
              type="text"
              name="zipcode"
              placeholder="Enter Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
            />
          </div>
        </div>
        {showFields.country && (
          <div className="w-full flex flex-col items-start space-y-2 mb-5">
            <label
              htmlFor="country"
              className="text-sm text-[#000000] font-semibold"
            >
              Country
            </label>
            <div className="relative sm:w-full flex items-center">
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={`rounded-lg bg-[#f5f5f5] p-4 w-full
              }`}
              />
            </div>
          </div>
        )}
        {!showFields.country && (
          <button
            onClick={() => handleShowField("country")}
            className="flex items-center space-x-2 p-2 mb-3 rounded-lg text-[#574AE2] border-2 border-[#F5F5F5] bg-white"
          >
            <AiOutlinePlus />
            <span>Add New</span>
          </button>
        )}
        <hr className="text-[#f5f5f5] my-6" />
        <div className="flex items-center space-x-2 flex-wrap space-y-2 sm:space-y-0">
          <button
            onClick={() =>
              handleUpdateData(
                address,
                email,
                username,
                zipcode,
                state,
                city,
                country
              )
            }
            className="rounded-3xl flex items-center space-x-2 py-4 px-6 bg-[#1a1a1a] text-white font-semibold"
          >
            <BsArrowLeftShort className="font-xl" />
            <span>Update Details</span>
          </button>
          <button
            onClick={() => resetData()}
            className="bg-[#f5f5f5] py-4 px-6 rounded-3xl text-[#97999B] font-semibold"
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfileDetails };
