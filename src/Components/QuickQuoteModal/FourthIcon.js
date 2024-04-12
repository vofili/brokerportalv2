import React from "react";
import UsageSelect from "../Select Inputs";

function FourthIcon({ handleQuickQuotes }) {
  const loanTypes = [
    { value: "Personal Loan", label: "Personal Loan" },
    { value: "SME Loan", label: "SME Loan" },
    { value: "Mortgage Loan", label: "Mortgage Loan" },
    { value: "Term Loan", label: "Term Loan" },
  ];
  const loanTerm = [
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
        <h3 className="text-[#282828] text-[16px] font-[600] tracking-[0.26px] ">Credit Life</h3>
        <form className=" mt-6  ">
          <div className="flex items-center justify-between">
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Loan Amount</label>
              <input className=" outline-none w-full h-2/4 bg-none" type="number" />
            </div>
            <UsageSelect placeholder={`Loan Term`} label={loanTerm} />
          </div>
          <div className="mt-[40px] items-center flex justify-between">
            <UsageSelect placeholder={`Loan types`} label={loanTypes} />
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Loan Amount</label>
              <input className=" outline-none w-full h-2/4 bg-none" type="number" />
            </div>
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

export default FourthIcon;
