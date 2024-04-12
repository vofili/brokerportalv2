import UsageSelect from "../Select Inputs";

function ThirdIcon({ handleQuickQuotes }) {
  const rates = [
    { value: "0.25% - SME", label: "0.25% - SME" },

    { value: "0.17% - Private", label: "0.17% - Private" },
  ];
  const property = [
    { value: "Private", label: "Private" },
    { value: "SME", label: "SME" },
  ];
  return (
    <>
      <div className=" px-[40px] pb-[10px] mt-[32.25px] ">
        <h3 className="text-[#282828] text-[16px] font-[600] tracking-[0.26px] ">Fire Insurance</h3>
        <form className=" mt-6  ">
          <div className="flex justify-between">
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Property Valuation(NGN)</label>
              <input className=" outline-none w-full h-2/4 bg-none" type="number" />
            </div>
            <UsageSelect placeholder={`Property Type`} label={property} />
          </div>
          <div className="mt-[40px]">
            <UsageSelect placeholder={`Rates`} label={rates} />
          </div>
        </form>
      </div>
      <div className="w-[93%]  mx-[20px] border-t-[#DFDEDE] pl-[10px] mt-[40px] border-t-[1.5px] rounded-[8] ">
        <div className=" flex justify-end mx-2 my-6 items-end ">
          <button onClick={handleQuickQuotes} className="w-[100px] rounded mr-[20px] text-[16px] h-[42px] bg-[#e5e7ed]">
            Close
          </button>{" "}
          <button className="w-[100px] rounded text-[16px] text-[#fff] h-[42px] bg-[#50b848]">Get Quote</button>
        </div>
      </div>
    </>
  );
}

export default ThirdIcon;
