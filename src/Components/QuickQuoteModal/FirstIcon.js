import React, { useState } from "react";
import UsageSelect from "../Select Inputs";

function FirstIcon({ handleQuickQuotes }) {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const usage = [
    { value: "Private", label: "Private" },
    { value: "Commercial", label: "Commercial" },
  ];
  const vehicleType = [
    { value: "Suv", label: "Suv" },
    { value: "Trucks", label: "Trucks" },
    { value: "Sedan", label: "Sedan" },
    { value: "Bus", label: "Bus" },
    { value: "Van", label: "Van" },
    { value: "Tipper", label: "Tipper" },
    { value: "Luxury Bus", label: "Luxury Bus" },
  ];
  const coverType = [
    { value: "Comprehensive", label: "Comprehensive" },
    { value: "Third Party", label: "Third Party" },
  ];
  const excess = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputClick = () => {
    if (inputValue === "") {
      setPlaceholderVisible(false);
    }
  };

  const handleInputFocusOut = () => {
    if (inputValue === "") {
      setPlaceholderVisible(true);
    }
  };
  return (
    <>
      {/* LARGE SCREEN */}
      <div className=" mobile:hidden lg:block ">
        <div className=" px-[40px] pb-[50px] mt-[32.25px] ">
          <h3 className="text-[#282828] text-[16px] font-[600] tracking-[0.26px] ">Motor Insurance</h3>
          <form className=" mt-6  ">
            <div className="flex justify-between">
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
                <label htmlFor="">Vehicle Value</label>
                <input className=" outline-none w-full h-2/4 bg-none" placeholder={placeholderVisible ? "N" : ""} value={inputValue} onChange={handleInputChange} onClick={handleInputClick} onFocusOut={handleInputFocusOut} type="number" />
              </div>
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[40%] flex flex-col justify-between h-[52px] ">
                <label htmlFor="">Number of Vehicles</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="number" />
              </div>
            </div>
            <div className="flex mt-[30px] justify-between">
              <UsageSelect placeholder={`Usage Type`} label={usage} />
              <UsageSelect placeholder={`Vehicle`} label={vehicleType} />
            </div>
            <div className="flex mt-[30px] justify-between">
              <UsageSelect placeholder={`Cover Type`} label={coverType} />
              <UsageSelect placeholder={`Excess/Flood`} label={excess} />
            </div>
          </form>
        </div>
        <div className="w-[93%]  mx-[20px] border-t-[#DFDEDE] pl-[10px] mt-[40px] border-t-[1.5px] rounded-[8] ">
          <div className=" flex justify-end mx-2 my-6 items-end ">
            <button className="w-[100px] rounded mr-[20px] text-[16px] h-[42px] bg-[#e5e7ed]" onClick={handleQuickQuotes}>
              Close
            </button>{" "}
            <button className="w-[100px] rounded text-[16px] text-[#fff] h-[42px] bg-[#50b848]">Get Quote</button>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" mobile:block w-full lg:hidden ">
        <div className=" px-[40px] w-full pb-[50px] mt-[30px] ">
          <h3 className="text-[#282828] text-[16px] font-[600] tracking-[0.26px] ">Motor Insurance</h3>
          <form className=" mt-6  ">
            <div className="flex w-full flex-col justify-between">
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-full mt-[20px] flex flex-col justify-between h-[52px] ">
                <label htmlFor="">Vehicle Value</label>
                <input className=" outline-none w-full h-2/4 bg-none" placeholder={placeholderVisible ? "N" : ""} value={inputValue} onChange={handleInputChange} onClick={handleInputClick} onFocusOut={handleInputFocusOut} type="number" />
              </div>
              <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-full mt-[20px] flex flex-col justify-between h-[52px] ">
                <label htmlFor="">Number of Vehicles</label>
                <input className=" outline-none w-full h-2/4 bg-none" type="number" />
              </div>
            </div>
            <div className="flex mt-[30px] justify-between">
              <UsageSelect placeholder={`Usage Type`} label={usage} />
              <UsageSelect placeholder={`Vehicle`} label={vehicleType} />
            </div>
            <div className="flex mt-[30px] justify-between">
              <UsageSelect placeholder={`Cover Type`} label={coverType} />
              <UsageSelect placeholder={`Excess/Flood`} label={excess} />
            </div>
          </form>
        </div>
        <div className="w-[93%]  mx-[20px] border-t-[#DFDEDE] pl-[10px] mt-[40px] border-t-[1.5px] rounded-[8] ">
          <div className=" flex justify-end mx-2 my-6 items-end ">
            <button className="w-[100px] rounded mr-[20px] text-[16px] h-[42px] bg-[#e5e7ed]" onClick={handleQuickQuotes}>
              Close
            </button>{" "}
            <button className="w-[100px] rounded text-[16px] text-[#fff] h-[42px] bg-[#50b848]">Get Quote</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstIcon;
