import React from "react";
import UsageSelect from "../Select Inputs";

function SecondIcon({ handleQuickQuotes }) {
  const countries = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    // Add more countries as needed
  ];
  const clause = [
    { value: "Clause A", label: "Clause A" },
    { value: "Clause C", label: "Clause C" },
  ];
  const transportMode = [
    { value: "Air", label: "Air" },
    { value: "Road", label: "Road" },
    { value: "Rail", label: "Rail" },
    { value: "Sea", label: "Sea" },
  ];
  const categories = [
    { value: "Import", label: "Import" },
    { value: "Export", label: "Export" },
    { value: "Coastwise", label: "Coastwise" },
    { value: "Inland Transit", label: "Inland Transit" },
    { value: "Cross Voyages", label: "Cross Voyages" },
  ];
  const goods = [
    { value: "Industrial Machines", label: "Industrial Machines" },
    { value: "Equipment", label: "Equipment" },
    { value: "Spare Parts", label: "Spare Parts" },
    { value: "Metals", label: "Metals" },
    { value: "Steel", label: "Steel" },
    { value: "Grain", label: "Grain" },
  ];
  return (
    <>
      <div className=" px-[40px] pb-[10px] mt-[32.25px] ">
        <h3 className="text-[#282828] text-[16px] font-[600] tracking-[0.26px] ">Marine Insurance</h3>
        <form className=" mt-6  ">
          <div className="flex justify-between">
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Sum Insured</label>
              <input className=" outline-none w-full h-2/4 bg-none" type="number" />
            </div>
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Rate</label>
              <input className=" outline-none w-full h-2/4 bg-none" type="number" />
            </div>
          </div>
          <div className="flex mt-[30px] justify-between">
            <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
              <label htmlFor="">Email Address</label>
              <input placeholder="Enter email address" className=" outline-none w-full h-2/4 bg-none" type="email" />
            </div>
            <UsageSelect placeholder={`Cover`} label={clause} />
          </div>
          <div className="flex mt-[30px] justify-between">
            <UsageSelect placeholder={`Category`} label={categories} />
            <UsageSelect placeholder={`Nature of Goods`} label={goods} />
          </div>
          <div className="flex mt-[30px] justify-between">
            <UsageSelect placeholder={`Transport Mode`} label={transportMode} />
            <UsageSelect placeholder={`Originating Countries`} label={countries} />
          </div>
          <div className="flex mt-[30px] justify-between">
            <UsageSelect placeholder={`Destination Countries`} label={countries} />
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

export default SecondIcon;
