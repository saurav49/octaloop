import { TbEdit } from "../Icons/Icons";
import { useAuth } from "../hooks/useAuth";

const AddressCard = () => {
  let { userInfo } = useAuth();
  return (
    <div className="p-8 flex flex-col items-start bg-white rounded-2xl w-[90%] sm:w-[80%] md:w-[600px] space-y-6 shadow-md">
      <div className="flex flex-col items-start space-y-2 sm:space-y-0 sm:flex-row sm:items-center justify-between w-full">
        <h3 className="font-semibold text-2xl text-[#1a1a1a]">
          Address Location
        </h3>
        <button className="flex items-center space-x-2 text-[#574AE2]">
          <TbEdit />
          <span>Manage</span>
        </button>
      </div>
      <div className="w-[80%]">
        <p className="text-xs uppercase text-[#97999B] font-semibold">
          time zone
        </p>
        <p className="text-lg font-normal text-[#1a1a1a]">
          UTC+5:30 Mumbai. Kolkata, Chennai, New Delhi
        </p>
      </div>
      <div className="w-[80%]">
        <p className="text-xs uppercase text-[#97999B] font-semibold">
          primary
        </p>
        {userInfo && userInfo.hasOwnProperty("address") ? (
          <p className="text-lg font-normal text-[#1a1a1a]">
            <span className="mr-2">{`${userInfo?.address}`}</span>
            <span className="mr-2">
              {`${userInfo?.city}`} {`${userInfo?.state}`}
            </span>
            <span className="mr-2">{`${userInfo?.country}`}</span>
            <span className="ml-2">{`${userInfo?.zipCode}`}</span>
          </p>
        ) : (
          <p className="text-lg font-normal text-[#1a1a1a]">
            A-83, Second Floor, Pocket D, Okhla Phase II, Okhla Industrial
            Estate New Delhi India 110020
          </p>
        )}
      </div>
    </div>
  );
};

export { AddressCard };
