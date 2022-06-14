import { TbEdit } from "../Icons/Icons";
import avatarImg from "../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import { useAuth } from "../hooks/useAuth";
const ProfileCard = () => {
  let { userInfo, setUserInfo } = useAuth();
  if (
    userInfo &&
    !userInfo.hasOwnProperty("_id") &&
    !localStorage.getItem("userInfo__octaloop")
  ) {
    setUserInfo(JSON.parse(localStorage.getItem("userInfo__octaloop")));
  }

  return (
    <div className="p-8 flex flex-col items-center bg-white rounded-2xl w-[90%] sm:w-[80%] md:w-[600px] space-y-6 shadow-md">
      <div className="flex flex-col items-start space-y-2 sm:space-y-0 sm:flex-row sm:items-center justify-between w-full">
        <h3 className="font-semibold text-2xl text-[#1a1a1a]">Profile</h3>
        <button className="flex items-center space-x-2 text-[#574AE2]">
          <TbEdit />
          <span>Manage</span>
        </button>
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-start space-x-6 w-full">
        <div className="mb-4 sm:mb-0">
          <img
            src={avatarImg}
            alt="avatar"
            className="rounded-full w-[100px] h-[100px] font-semibold"
          />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <div>
            <p className="text-xs uppercase text-[#97999B] font-semibold">
              full name
            </p>
            <p className="text-lg font-normal text-[#1a1a1a]">
              {userInfo?.name || "Nikhil Bhintade"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#97999B] font-semibold">
              username
            </p>
            <p className="text-lg font-normal text-[#1a1a1a]">
              {userInfo?.name || "bhintade.nikhil"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#97999B] font-semibold">
              email address
            </p>
            <p className="text-lg font-normal text-[#1a1a1a]">
              {userInfo?.email || "nikhilbhintade@octaloop.com"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#97999B] font-semibold">
              phone number
            </p>
            <p className="text-lg font-normal text-[#1a1a1a]">
              {userInfo?.phone || "+9194*****435"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-[#97999B] font-semibold mb-4">
              expertise
            </p>
            <div className="flex items-center flex-wrap">
              <div className="py-1 px-2 rounded-lg font-normal bg-[#f5f5f5] mr-2 mb-2">
                <span className="text-xs">graphic design</span>
              </div>
              <div className="py-1 px-2 rounded-lg font-normal bg-[#f5f5f5] mr-2 mb-2">
                <span className="text-xs">visual design</span>
              </div>
              <div className="py-1 px-2 rounded-lg font-normal bg-[#f5f5f5] mr-2 mb-2">
                <span className="text-xs">user research</span>
              </div>
              <div className="py-1 px-2 rounded-lg font-normal bg-[#f5f5f5] mb-2">
                <span className="text-xs">prototyping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileCard };
