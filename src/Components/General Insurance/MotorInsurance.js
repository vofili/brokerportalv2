import React, { useState } from "react";
import SideMenu from "../SideMenu";
import DropDown from "../ProfileDropdown/DropDown";
import PrivateComprehensive from "./MotorInsurance/PrivateComprehensive";
import CommercialComprehensive from "./MotorInsurance/CommercialComprehensive";
import ThirdParty from "./MotorInsurance/ThirdParty";
import CommercialThirdParty from "./MotorInsurance/CommercialThirdParty";
import ComparePlan from "./MotorInsurance/ComparePlan";

function MotorInsurance() {
  const [isOpen, setIsOpen] = useState(false);
  const [privateComprehensive, setPrivateComprehensive] = useState(true);
  const [commercialComprehensive, setCommercialComprehensive] = useState(false);
  const [thirdPartyPrivate, setThirdPartyPrivate] = useState(false);
  const [commercialThirdParty, setCommercialThirdParty] = useState(false);
  const [comparePlan, setComparePlan] = useState(false);

  const handlePrivateComprehensive = () => {
    setPrivateComprehensive(!privateComprehensive);
    setCommercialComprehensive(false);
    setThirdPartyPrivate(false);
    setCommercialThirdParty(false);
    setComparePlan(false);
  };
  const handleCommercialComprehensive = () => {
    setPrivateComprehensive(false);
    setCommercialComprehensive(true);
    setThirdPartyPrivate(false);
    setCommercialThirdParty(false);
    setComparePlan(false);
  };
  const handleThirdPartyPrivate = () => {
    setPrivateComprehensive(false);
    setCommercialComprehensive(false);
    setThirdPartyPrivate(true);
    setCommercialThirdParty(false);
    setComparePlan(false);
  };
  const handleCommercialThirdParty = () => {
    setPrivateComprehensive(false);
    setCommercialComprehensive(false);
    setThirdPartyPrivate(false);
    setCommercialThirdParty(true);
    setComparePlan(false);
  };
  const handleComparePlan = () => {
    setPrivateComprehensive(false);
    setCommercialComprehensive(false);
    setThirdPartyPrivate(false);
    setCommercialThirdParty(false);
    setComparePlan(true);
  };
  return (
    <>
      <SideMenu />
      {/* LARGE SCREENS */}
      <div className=" mobile:hidden pl-[22rem] lg:block w-full  h-fit pb-[50px]  ">
        {/* notification container */}
        <div className="flex w-[100%] pr-[10px]  h-[50px] pt-[40px] justify-end items-center">
          <div className=" justify-between flex items-center">
            <div className="flex w-[50px]  justify-between items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.10831 12.8078C1.9311 13.9695 2.72338 14.7758 3.69342 15.1777C7.41238 16.7183 12.5877 16.7183 16.3066 15.1777C17.2767 14.7758 18.069 13.9695 17.8918 12.8078C17.7829 12.0939 17.2444 11.4994 16.8454 10.9189C16.3228 10.1493 16.2709 9.30967 16.2708 8.4165C16.2708 4.96472 13.4633 2.1665 10 2.1665C6.53682 2.1665 3.72932 4.96472 3.72932 8.4165C3.72923 9.30967 3.67731 10.1493 3.15472 10.9189C2.75574 11.4994 2.21722 12.0939 2.10831 12.8078Z"
                  stroke="#333333"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6.66663 16.3335C7.0487 17.7712 8.39621 18.8335 9.99996 18.8335C11.6037 18.8335 12.9512 17.7712 13.3333 16.3335" stroke="#333333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="w-[24px] h-[24px] rounded-[30px] bg-[#50B848] flex justify-center items-center text-center ">
                <h3 className=" text-[#fff] text-[10px] ">1</h3>
              </div>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? "flex w-[150px] bg-[#D1D7E1] h-[40px] mr-[30px] rounded-[20px] pl-[13px] cursor-pointer ml-[10px] justify-between items-center" : "flex w-[170px] cursor-pointer ml-[23.5px] justify-between items-center"}
            >
              <div className="flex justify-between items-center">
                <h3 className=" opacity-[1] text-[16px] pr-[24px] font-semibold text-[#1a1a1a] ">Valentine</h3>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="#808285" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Page Title */}
        <div className="mt-[10px]">
          <h3 className="text-[16px] font-medium text-[#808285] opacicty-[1] tracking-[0.26px] ">
            Dashboard /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Motor Insurance</span>
          </h3>
        </div>
        <div className=" mt-[54px] w-[75%]">
          <div className="text-left">
            <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  ">Motor Insurance</h3>
            <p className="text-[18px] font-normal mt-[8px] leading-7 text-[#1A1A1A] ">Book Private Comprehensive, Commercial Comprehensive, Private Third Party,Comprehensive Third Party</p>
          </div>
        </div>
        <div className=" w-[98%] h-[700px] px-[25px] pt-[37px] rounded-[8px] mt-[44px] bg-white ">
          {/* Motor Insurance Titles Container */}
          <div className="w-[100%]  border-b-[#DFDEDE]  border-b-[2px] rounded-[8] ">
            <div className=" w-full  flex justify-between items-center  ">
              <h3
                onClick={handlePrivateComprehensive}
                className={`pb-[10px] lg:break-words text-center 
${
  privateComprehensive
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
              >
                Private (Comprehensive)
              </h3>
              <h3
                onClick={handleCommercialComprehensive}
                className={`pb-[10px] lg:break-words text-center 
${
  commercialComprehensive
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
              >
                Commercial (Comprehensive)
              </h3>
              <h3
                onClick={handleThirdPartyPrivate}
                className={`pb-[10px] lg:break-words text-center 
${
  thirdPartyPrivate
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
              >
                Private (3rd Party)
              </h3>
              <h3
                onClick={handleCommercialThirdParty}
                className={`pb-[10px] lg:break-words text-center 
${
  commercialThirdParty
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
              >
                Commercial (3rd Party)
              </h3>
              <h3
                onClick={handleComparePlan}
                className={`pb-[10px] lg:break-words text-center 
${
  comparePlan
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
              >
                Compare Plan
              </h3>
            </div>
          </div>
          {/* Motor Insurance Table */}
          {privateComprehensive && <PrivateComprehensive />}
          {commercialComprehensive && <CommercialComprehensive />}
          {thirdPartyPrivate && <ThirdParty />}
          {commercialThirdParty && <CommercialThirdParty />}
          {comparePlan && <ComparePlan />}
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" mobile:flex h-fit pb-[50px] lg:hidden flex w-full justify-center items-center ">
        <div className="w-[85%] flex flex-col justify-between   ">
          <div className="flex w-full   h-[50px] pt-[40px] justify-center items-center">
            <div className=" justify-between w-full flex items-center">
              <div className="flex w-[50px]  justify-between items-center">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.10831 12.8078C1.9311 13.9695 2.72338 14.7758 3.69342 15.1777C7.41238 16.7183 12.5877 16.7183 16.3066 15.1777C17.2767 14.7758 18.069 13.9695 17.8918 12.8078C17.7829 12.0939 17.2444 11.4994 16.8454 10.9189C16.3228 10.1493 16.2709 9.30967 16.2708 8.4165C16.2708 4.96472 13.4633 2.1665 10 2.1665C6.53682 2.1665 3.72932 4.96472 3.72932 8.4165C3.72923 9.30967 3.67731 10.1493 3.15472 10.9189C2.75574 11.4994 2.21722 12.0939 2.10831 12.8078Z"
                    stroke="#333333"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M6.66663 16.3335C7.0487 17.7712 8.39621 18.8335 9.99996 18.8335C11.6037 18.8335 12.9512 17.7712 13.3333 16.3335" stroke="#333333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="w-[24px] h-[24px] rounded-[30px] bg-[#50B848] flex justify-center items-center text-center ">
                  <h3 className=" text-[#fff] text-[10px] ">1</h3>
                </div>
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className={isOpen ? "flex w-[150px] bg-[#D1D7E1] h-[40px]  rounded-[20px] pl-[13px] cursor-pointer ml-[10px] justify-between items-center" : "flex w-[170px] cursor-pointer ml-[23.5px] justify-between items-center"}
              >
                <div className="flex justify-between items-center">
                  <h3 className=" opacity-[1] text-[16px] pr-[24px] font-semibold text-[#1a1a1a] ">Valentine</h3>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="#808285" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <h3 className="text-[16px] font-medium text-[#808285] opacicty-[1] tracking-[0.26px] ">
              Dashboard /<span className="text-[18px] text-[#009677] tracking-[0.32px] "> Motor Insurance</span>
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="text-left">
              <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  ">Motor Insurance</h3>
              <p className="text-[14px] font-normal mt-[8px] text-[#1A1A1A] ">Book Private Comprehensive, Commercial Comprehensive, Private Third Party,Comprehensive Third Party</p>
            </div>
          </div>
          <div className=" w-full  pb-[50px] h-fit overflow-x-scroll px-[25px] pt-[37px] rounded-[8px] mt-[44px] bg-white ">
            {/* Motor Insurance Titles Container */}
            <div className="w-fit   border-b-[#DFDEDE]  border-b-[2px] rounded-[8] ">
              <div className=" w-full  gap-[40px] whitespace-nowrap flex justify-between items-center  ">
                <h3
                  onClick={handlePrivateComprehensive}
                  className={`pb-[10px] lg:break-words text-center 
${
  privateComprehensive
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
                >
                  Private (Comprehensive)
                </h3>
                <h3
                  onClick={handleCommercialComprehensive}
                  className={`pb-[10px] lg:break-words text-center 
${
  commercialComprehensive
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
                >
                  Commercial (Comprehensive)
                </h3>
                <h3
                  onClick={handleThirdPartyPrivate}
                  className={`pb-[10px] lg:break-words text-center 
${
  thirdPartyPrivate
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
                >
                  Private (3rd Party)
                </h3>
                <h3
                  onClick={handleCommercialThirdParty}
                  className={`pb-[10px] lg:break-words text-center 
${
  commercialThirdParty
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
                >
                  Commercial (3rd Party)
                </h3>
                <h3
                  onClick={handleComparePlan}
                  className={`pb-[10px] lg:break-words text-center 
${
  comparePlan
    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
    : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
}`}
                >
                  Compare Plan
                </h3>
              </div>
              {privateComprehensive && <PrivateComprehensive />}
              {commercialComprehensive && <CommercialComprehensive />}
              {thirdPartyPrivate && <ThirdParty />}
              {commercialThirdParty && <CommercialThirdParty />}
              {comparePlan && <ComparePlan />}
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
    </>
  );
}

export default MotorInsurance;
