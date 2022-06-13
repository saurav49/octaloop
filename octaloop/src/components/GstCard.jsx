import { TbEdit } from "../Icons/Icons";

const GstCard = () => {
  return (
    <div className="p-8 flex flex-col items-start bg-white rounded-2xl w-[90%] sm:w-[80%] md:w-[600px] space-y-6 shadow-md">
      <div className="flex flex-col items-start space-y-2 sm:space-y-0 sm:flex-row sm:items-center justify-between w-full">
        <h3 className="font-semibold text-2xl text-[#1a1a1a]">GSTIN</h3>
        <button className="flex items-center space-x-2 text-[#574AE2]">
          <TbEdit />
          <span>Manage</span>
        </button>
      </div>
      <div className="w-[80%]">
        <p className="text-[#97999B] text-sm">
          A Good & Services Tax Indefication Number is Supports GSTIN
        </p>
      </div>
      <div className="w-[80%]">
        <p className="text-xs uppercase text-[#97999B] font-semibold">gstin</p>
        <p className="text-lg font-normal text-[#1a1a1a]">356DFHSFSFG8779B</p>
      </div>
    </div>
  );
};

export { GstCard };
