import UsageSelect from "../Select Inputs";

function FifthIcon({ handleQuickQuotes }) {
  const criticalIllness = [
    { value: "NO", label: "NO" },
    { value: "Yes", label: "Yes" },
  ];
  const permanentDisease = [
    { value: "NO", label: "NO" },
    { value: "Yes", label: "Yes" },
  ];
  const funeralBenefits = [
    { value: "NO", label: "NO" },
    { value: "Yes", label: "Yes" },
  ];
  const coverTerm = [
    { value: "0", label: "0" },
    { value: "12", label: "12" },
    { value: "24", label: "24" },
    { value: "36", label: "36" },
    { value: "48", label: "48" },
    { value: "60", label: "60" },
  ];
  return (
    <>
      <div className=" px-[40px] pb-[10px] mt-[32.25px] ">
        <h3 className="text-[#282828] text-[16px] font-[600] tracking-[0.26px] ">Group Life</h3>
        <form className=" mt-6  ">
          <div className="flex justify-between">
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Annual Emolument</label>
              <input className=" outline-none w-full h-2/4 bg-none" type="number" />
            </div>
            <UsageSelect placeholder={`Annual Emolument`} label={criticalIllness} />
          </div>
          <div className="mt-[30px] flex justify-between items-center">
            <UsageSelect placeholder={`Permanent Disease`} label={permanentDisease} />
            <UsageSelect placeholder={`Funeral Benefits`} label={funeralBenefits} />
          </div>
          <div className="mt-[30px] flex justify-between items-center">
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[1px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Date of Birth</label>
              <input className=" outline-none w-full h-2/4 bg-none" type="date" />
            </div>
            <UsageSelect placeholder={`Cover Term`} label={coverTerm} />
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

export default FifthIcon;
