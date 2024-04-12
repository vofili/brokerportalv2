import React, { useState } from "react";
import SideMenu from "../SideMenu";
import DropDown from "../ProfileDropdown/DropDown";
import paystack from "../images/paystack-logo-vector.png";
import logo from "../images/signin.png";
import oldmutual from "../images/smalloldmutual.png";
import card from "../images/addCard2.png";
import "./PaymentDashboard.css";

function PaymentDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [all, setAll] = useState(false);
  const [history, setHistory] = useState(false);
  const time = new Date().getFullYear();
  return (
    <>
      <SideMenu />
      {/* LARGE SCREENS */}
      <div className=" mobile:hidden lg:block pl-[22rem] h-fit pb-[50px]   w-[100%]">
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
            Dashboard /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Payments & Cards</span>
          </h3>
        </div>
        <div className=" mt-[54px] w-[75%]">
          <div className="text-left">
            <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  "> Payments & Cards</h3>
            <p className="text-[18px] font-normal mt-[8px] text-[#1A1A1A] ">Payments Dashboard</p>
          </div>
        </div>
        <div className=" w-[95%] h-fit py-[50px] px-[35px] rounded-[8px] mt-[44px] bg-white ">
          {/* Boxes */}
          <div className="flex justify-between flex-wrap items-center">
            <div className="transition-transform transform pt-4  scale-110 hover:shadow-lg ring-[#808285] shadow-3xl  flex-col flex justify-center items-center w-[230px] rounded-[12px] opacity-[1] h-[180px] ">
              <div className="flex w-full p-5 justify-between ">
                <div className="w-[50%] grid items-start ">
                  <h2 className=" font-medium text-[20px] text-[#002A80] mb-3 ">Paystack</h2>
                  <h3 className=" font-semibold text-[24px] text-[#171717] ">₦0.00</h3>
                  <img className=" h-[70px]" src={paystack} alt="Paystack logo" />
                </div>
                <div>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4.5H19" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M4 14.5H19" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M4 9.5H20" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M4 19.5H12" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="transition-transform transform pt-4 scale-110 hover:shadow-lg ring-[#808285] shadow-3xl  flex-col flex justify-center items-center w-[230px] rounded-[12px] opacity-[1] h-[180px] ">
              <div className="flex w-full p-5 justify-between ">
                <div className="w-[50%] grid items-start ">
                  <h2 className=" font-medium text-[20px] text-[#002A80] mb-3 ">Wallet</h2>
                  <h3 className=" font-semibold text-[24px] text-[#171717] ">₦0.00</h3>
                  <img className="h-[70px]" src={logo} alt="Paystack logo" />
                </div>
                <div className="w-[35%] h-[32px]">
                  <img src={oldmutual} alt="Paystack logo" />
                </div>
              </div>
            </div>
            <div className="transition-transform transform  scale-110 hover:shadow-lg ring-[#808285] shadow-3xl pt-4 w-[230px] px-2 rounded-[12px] opacity-[1] h-[180px] ">
              <div className="flex  w-full px-2 items-center justify-between ">
                <div className="w-[50%]  ">
                  <h2 className=" font-medium text-[20px] whitespace-nowrap text-[#002A80] mb-3 ">Credit Note</h2>
                </div>
                <div className="w-[35%] h-[32px]">
                  <img src={oldmutual} alt="Paystack logo" />
                </div>
              </div>
            </div>
            <div className="transition-transform transform pt-2 mt-[40px] scale-110 hover:shadow-lg ring-[#808285] shadow-3xl   w-[230px] rounded-[12px] opacity-[1] h-[180px] ">
              <div className="flex w-full p-5 justify-between ">
                <div className="w-[50%] grid items-start ">
                  <h2 className=" font-medium text-[20px] text-[#002A80] mb-3 whitespace-nowrap ">Add Card</h2>

                  <img className="h-[70px]" src={logo} alt="Paystack logo" />
                </div>
                <div className=" w-[30%] relative top-[5.5rem] ">
                  <img src={card} alt="card" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center mt-[3rem] ">
            <h3 className=" font-semibold text-[20px] text-[#171717] ">Payments History</h3>
            <div className="flex justify-between w-[190px] items-center">
              <div
                onClick={() => {
                  setAll(!all);
                  setHistory(false);
                }}
                className={`w-[70px] cursor-pointer h-[40px]  text-[#171717] flex justify-center items-center border-[2px] border-[#CBD2DD] rounded-[7px] ${all ? "bg-[#CBD2DD]" : "bg-[#F1F2F5]"} `}
              >
                <h3 className="text-[16px] font-medium  opacicty-[1] tracking-[0.26px] ">All</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" fill="currentColor" />
                </svg>
              </div>
              <div
                onClick={() => {
                  setHistory(!history);
                  setAll(false);
                }}
                className={`w-[110px] cursor-pointer h-[40px]  text-[#171717] flex justify-center items-center border-[2px] border-[#CBD2DD] rounded-[7px] ${history ? "bg-[#CBD2DD]" : "bg-[#F1F2F5]"} `}
              >
                <h3 className="text-[16px] font-medium  opacicty-[1] tracking-[0.26px] ">History</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div className="  w-full border-t-[1px] border-t-[#E4E7ED] rounded mt-[40px] ">
            <div className=" p-[30px] w-full mt-[40px] bg-[#F6F7F9] h-[100px] ">
              <div className=" w-full divide-x border-[1px] bg-white flex justify-between items-center border-[#D4DAE3] h-[45px] rounded ">
                <input className=" bg-transparent outline-none pl-[20px] text-[#6E777F] font-normal text-[16px] h-full w-[92%] " type="text" placeholder="Search Payments.." />
                <div className=" h-full w-[8%] text-[#212529] flex items-center justify-center  bg-[#F6F7F9]">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.1328 13.4096L18.4698 17.7336M15.9698 8.98364C15.9698 12.4354 13.1716 15.2336 9.71985 15.2336C6.26807 15.2336 3.46985 12.4354 3.46985 8.98364C3.46985 5.53186 6.26807 2.73364 9.71985 2.73364C13.1716 2.73364 15.9698 5.53186 15.9698 8.98364Z"
                      stroke="currentcolor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#F1F2F2] h-[60px] font-medium text-[15px] text-[#575757] items-center flex justify-between p-[30px] mt-[30px] ">
            <h3>Payment Ref</h3>
            <h3>Status</h3>
            <h3> Submitted</h3>
            <h3> Product</h3>
            <h3> Customer</h3>
            <h3> Value</h3>
          </div>
          <div className=" flex mt-[40px] justify-end items-end ">
            <div className="w-[140px] bg-[#F1F2F5] rounded-[5px] text-[#171717] text-[15px] flex items-center justify-evenly  h-[40px]">
              <div className=" bg-[#E5E7ED] w-[35px] text-center justify-center items-center flex h-full ">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1947 5.93146L9.02808 10.0981L13.1947 14.2648" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className=" bg-[#3F9CE8] w-[35px] text-center justify-center items-center flex h-full ">1</h3>
              <h3 className=" bg-transparent w-[35px] text-center justify-center items-center flex h-full ">2</h3>
              <div className=" bg-[#E5E7ED] w-[35px] text-center justify-center items-center flex h-full ">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.19478 5.93146L12.3615 10.0981L8.19478 14.2648" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Container */}
        <div className=" flex justify-end h-[100px] items-center mt-[20px] pr-[52px] ">
          <h3 className="text-[#009677] font-semibold ">OldMutual Broker Platform © -{time}Nubeero</h3>
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
              Dashboard /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Payments & Cards</span>
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="text-left">
              <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  ">Payments & Cards</h3>
              <p className="text-[14px] font-normal mt-[8px] text-[#1A1A1A] ">Payments Dashboard</p>
            </div>
          </div>
          <div className=" w-full h-fit py-[50px] px-[35px] rounded-[8px] mt-[44px] bg-white ">
            {/* Boxes */}
            <div className="flex gap-[40px] justify-between flex-wrap items-center">
              <div className="transition-transform transform pt-4  scale-110 hover:shadow-lg ring-[#808285] shadow-3xl  flex-col flex justify-center items-center w-[230px] rounded-[12px] opacity-[1] h-[180px] ">
                <div className="flex w-full p-5 justify-between ">
                  <div className="w-[50%] grid items-start ">
                    <h2 className=" font-medium text-[20px] text-[#002A80] mb-3 ">Paystack</h2>
                    <h3 className=" font-semibold text-[24px] text-[#171717] ">₦0.00</h3>
                    <img className=" h-[70px]" src={paystack} alt="Paystack logo" />
                  </div>
                  <div>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4.5H19" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M4 14.5H19" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M4 9.5H20" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M4 19.5H12" stroke="#0CA5DB" strokeWidth="3" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="transition-transform transform pt-4 scale-110 hover:shadow-lg ring-[#808285] shadow-3xl  flex-col flex justify-center items-center w-[230px] rounded-[12px] opacity-[1] h-[180px] ">
                <div className="flex w-full p-5 justify-between ">
                  <div className="w-[50%] grid items-start ">
                    <h2 className=" font-medium text-[20px] text-[#002A80] mb-3 ">Wallet</h2>
                    <h3 className=" font-semibold text-[24px] text-[#171717] ">₦0.00</h3>
                    <img className="h-[70px]" src={logo} alt="Paystack logo" />
                  </div>
                  <div className="w-[35%] h-[32px]">
                    <img src={oldmutual} alt="Paystack logo" />
                  </div>
                </div>
              </div>
              <div className="transition-transform transform  scale-110 hover:shadow-lg ring-[#808285] shadow-3xl pt-4 w-[230px] px-2 rounded-[12px] opacity-[1] h-[180px] ">
                <div className="flex  w-full px-2 items-center justify-between ">
                  <div className="w-[50%]  ">
                    <h2 className=" font-medium text-[20px] whitespace-nowrap text-[#002A80] mb-3 ">Credit Note</h2>
                  </div>
                  <div className="w-[35%] h-[32px]">
                    <img src={oldmutual} alt="Paystack logo" />
                  </div>
                </div>
              </div>
              <div className="transition-transform transform pt-2  scale-110 hover:shadow-lg ring-[#808285] shadow-3xl   w-[230px] rounded-[12px] opacity-[1] h-[180px] ">
                <div className="flex w-full p-5 justify-between ">
                  <div className="w-[50%] grid items-start ">
                    <h2 className=" font-medium text-[20px] text-[#002A80] mb-3 whitespace-nowrap ">Add Card</h2>

                    <img className="h-[70px]" src={logo} alt="Paystack logo" />
                  </div>
                  <div className=" w-[30%] relative top-[5.5rem] ">
                    <img src={card} alt="card" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-between items-center mt-[3rem] ">
              <h3 className=" font-semibold text-[20px] text-[#171717] ">Payments History</h3>
              <div className="flex justify-between w-[190px] items-center">
                <div
                  onClick={() => {
                    setAll(!all);
                    setHistory(false);
                  }}
                  className={`w-[70px] cursor-pointer h-[40px]  text-[#171717] flex justify-center items-center border-[2px] border-[#CBD2DD] rounded-[7px] ${all ? "bg-[#CBD2DD]" : "bg-[#F1F2F5]"} `}
                >
                  <h3 className="text-[16px] font-medium  opacicty-[1] tracking-[0.26px] ">All</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" fill="currentColor" />
                  </svg>
                </div>
                <div
                  onClick={() => {
                    setHistory(!history);
                    setAll(false);
                  }}
                  className={`w-[110px] cursor-pointer h-[40px]  text-[#171717] flex justify-center items-center border-[2px] border-[#CBD2DD] rounded-[7px] ${history ? "bg-[#CBD2DD]" : "bg-[#F1F2F5]"} `}
                >
                  <h3 className="text-[16px] font-medium  opacicty-[1] tracking-[0.26px] ">History</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="  w-full border-t-[1px] border-t-[#E4E7ED] rounded mt-[40px] ">
              <div className=" p-[30px] w-full mt-[40px] bg-[#F6F7F9] h-[100px] ">
                <div className=" w-full divide-x border-[1px] bg-white flex justify-between items-center border-[#D4DAE3] h-[45px] rounded ">
                  <input className=" bg-transparent outline-none pl-[20px] text-[#6E777F] font-normal text-[16px] h-full w-[92%] " type="text" placeholder="Search Payments.." />
                  <div className=" h-full w-[8%] text-[#212529] flex items-center justify-center  bg-[#F6F7F9]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.1328 13.4096L18.4698 17.7336M15.9698 8.98364C15.9698 12.4354 13.1716 15.2336 9.71985 15.2336C6.26807 15.2336 3.46985 12.4354 3.46985 8.98364C3.46985 5.53186 6.26807 2.73364 9.71985 2.73364C13.1716 2.73364 15.9698 5.53186 15.9698 8.98364Z"
                        stroke="currentcolor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full whitespace-nowrap gap-[30px] overflow-y-hidden overflow-x-scroll bg-[#F1F2F2] h-[60px] font-medium text-[15px] text-[#575757] items-center flex justify-between p-[30px] mt-[30px] ">
              <h3>Payment Ref</h3>
              <h3>Status</h3>
              <h3> Submitted</h3>
              <h3> Product</h3>
              <h3> Customer</h3>
              <h3> Value</h3>
            </div>
            <div className=" flex mt-[40px] justify-end items-end ">
              <div className="w-[140px] bg-[#F1F2F5] rounded-[5px] text-[#171717] text-[15px] flex items-center justify-evenly  h-[40px]">
                <div className=" bg-[#E5E7ED] w-[35px] text-center justify-center items-center flex h-full ">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1947 5.93146L9.02808 10.0981L13.1947 14.2648" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className=" bg-[#3F9CE8] w-[35px] text-center justify-center items-center flex h-full ">1</h3>
                <h3 className=" bg-transparent w-[35px] text-center justify-center items-center flex h-full ">2</h3>
                <div className=" bg-[#E5E7ED] w-[35px] text-center justify-center items-center flex h-full ">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.19478 5.93146L12.3615 10.0981L8.19478 14.2648" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {all && (
        <div className=" flex py-[15px]  mobile:right-[14%] md:top-[51rem] mobile:top-[78.5rem] justify-center items-center absolute  lg:left-[69.5%] lg:top-[50.5rem] bg-white border-[#F8F9FA] w-[190px] border-[2px] h-[320px] rounded ">
          <div className=" flex flex-col text-left h-full  w-[90%] justify-between">
            <section className=" flex items-center  w-full h-[50px] px-[23px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg className="animate-spin" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.6179 10.467C20.6179 10.6881 20.5301 10.9 20.3738 11.0563C20.2176 11.2126 20.0056 11.3004 19.7846 11.3004C19.5636 11.3004 19.3516 11.2126 19.1953 11.0563C19.039 10.9 18.9513 10.6881 18.9513 10.467C18.9488 8.25765 18.0701 6.13944 16.5078 4.57716C14.9455 3.01489 12.8273 2.13613 10.6179 2.13371C10.3969 2.13371 10.1849 2.04591 10.0287 1.88963C9.87238 1.73335 9.78459 1.52139 9.78459 1.30037C9.78459 1.07936 9.87238 0.867399 10.0287 0.711119C10.1849 0.554838 10.3969 0.467041 10.6179 0.467041C13.2692 0.469909 15.8111 1.5244 17.6858 3.39914C19.5606 5.27388 20.6151 7.81576 20.6179 10.467ZM2.14042 6.12037C1.9756 6.12037 1.81449 6.16925 1.67745 6.26082C1.5404 6.35238 1.43359 6.48253 1.37052 6.6348C1.30745 6.78708 1.29094 6.95463 1.3231 7.11628C1.35525 7.27793 1.43462 7.42642 1.55116 7.54296C1.66771 7.65951 1.81619 7.73887 1.97785 7.77103C2.1395 7.80318 2.30705 7.78668 2.45932 7.72361C2.61159 7.66053 2.74174 7.55372 2.83331 7.41668C2.92488 7.27964 2.97375 7.11853 2.97375 6.95371C2.97375 6.73269 2.88596 6.52073 2.72968 6.36445C2.5734 6.20817 2.36143 6.12037 2.14042 6.12037ZM2.28459 10.467C2.28459 10.3022 2.23571 10.1411 2.14415 10.0041C2.05258 9.86702 1.92243 9.76021 1.77016 9.69714C1.61788 9.63407 1.45033 9.61756 1.28868 9.64972C1.12703 9.68187 0.978542 9.76124 0.861998 9.87779C0.745454 9.99433 0.666087 10.1428 0.633933 10.3045C0.601778 10.4661 0.618281 10.6337 0.681354 10.7859C0.744427 10.9382 0.851237 11.0684 0.988278 11.1599C1.12532 11.2515 1.28644 11.3004 1.45125 11.3004C1.67227 11.3004 1.88423 11.2126 2.04051 11.0563C2.19679 10.9 2.28459 10.6881 2.28459 10.467ZM10.6179 18.8004C10.4531 18.8004 10.292 18.8492 10.1549 18.9408C10.0179 19.0324 9.91109 19.1625 9.84802 19.3148C9.78495 19.4671 9.76844 19.6346 9.8006 19.7963C9.83275 19.9579 9.91212 20.1064 10.0287 20.223C10.1452 20.3395 10.2937 20.4189 10.4553 20.451C10.617 20.4832 10.7846 20.4667 10.9368 20.4036C11.0891 20.3405 11.2192 20.2337 11.3108 20.0967C11.4024 19.9596 11.4513 19.7985 11.4513 19.6337C11.4513 19.4127 11.3635 19.2007 11.2072 19.0445C11.0509 18.8882 10.8389 18.8004 10.6179 18.8004ZM4.13542 3.13954C3.9706 3.13954 3.80949 3.18842 3.67245 3.27998C3.5354 3.37155 3.42859 3.5017 3.36552 3.65397C3.30245 3.80624 3.28594 3.9738 3.3181 4.13545C3.35025 4.2971 3.42962 4.44559 3.54616 4.56213C3.66271 4.67867 3.81119 4.75804 3.97285 4.79019C4.1345 4.82235 4.30205 4.80585 4.45432 4.74277C4.60659 4.6797 4.73674 4.57289 4.82831 4.43585C4.91988 4.29881 4.96875 4.13769 4.96875 3.97287C4.96875 3.75186 4.88096 3.5399 4.72468 3.38362C4.5684 3.22734 4.35643 3.13954 4.13542 3.13954ZM7.10042 1.16787C6.9356 1.16787 6.77449 1.21675 6.63744 1.30832C6.5004 1.39988 6.39359 1.53003 6.33052 1.6823C6.26745 1.83458 6.25094 2.00213 6.2831 2.16378C6.31525 2.32543 6.39462 2.47392 6.51116 2.59046C6.62771 2.70701 6.77619 2.78637 6.93784 2.81853C7.0995 2.85068 7.26705 2.83418 7.41932 2.77111C7.57159 2.70803 7.70174 2.60122 7.79331 2.46418C7.88488 2.32714 7.93375 2.16603 7.93375 2.00121C7.93375 1.78019 7.84596 1.56823 7.68968 1.41195C7.5334 1.25567 7.32143 1.16787 7.10042 1.16787ZM2.14042 13.147C1.9756 13.147 1.81449 13.1959 1.67745 13.2875C1.5404 13.3791 1.43359 13.5092 1.37052 13.6615C1.30745 13.8137 1.29094 13.9813 1.3231 14.143C1.35525 14.3046 1.43462 14.4531 1.55116 14.5696C1.66771 14.6862 1.81619 14.7655 1.97785 14.7977C2.1395 14.8298 2.30705 14.8133 2.45932 14.7503C2.61159 14.6872 2.74174 14.5804 2.83331 14.4433C2.92488 14.3063 2.97375 14.1452 2.97375 13.9804C2.97375 13.7594 2.88596 13.5474 2.72968 13.3911C2.5734 13.2348 2.36143 13.147 2.14042 13.147ZM4.13542 16.1279C3.9706 16.1279 3.80949 16.1767 3.67245 16.2683C3.5354 16.3599 3.42859 16.49 3.36552 16.6423C3.30245 16.7946 3.28594 16.9621 3.3181 17.1238C3.35025 17.2854 3.42962 17.4339 3.54616 17.5505C3.66271 17.667 3.81119 17.7464 3.97285 17.7785C4.1345 17.8107 4.30205 17.7942 4.45432 17.7311C4.60659 17.668 4.73674 17.5612 4.82831 17.4242C4.91988 17.2871 4.96875 17.126 4.96875 16.9612C4.96875 16.7402 4.88096 16.5282 4.72468 16.372C4.5684 16.2157 4.35643 16.1279 4.13542 16.1279ZM7.10042 18.0995C6.9356 18.0995 6.77449 18.1484 6.63744 18.24C6.5004 18.3316 6.39359 18.4617 6.33052 18.614C6.26745 18.7662 6.25094 18.9338 6.2831 19.0954C6.31525 19.2571 6.39462 19.4056 6.51116 19.5221C6.62771 19.6387 6.77619 19.718 6.93784 19.7502C7.0995 19.7823 7.26705 19.7658 7.41932 19.7028C7.57159 19.6397 7.70174 19.5329 7.79331 19.3958C7.88488 19.2588 7.93375 19.0977 7.93375 18.9329C7.93375 18.7119 7.84596 18.4999 7.68968 18.3436C7.5334 18.1873 7.32143 18.0995 7.10042 18.0995ZM19.0954 13.147C18.9306 13.147 18.7695 13.1959 18.6324 13.2875C18.4954 13.3791 18.3886 13.5092 18.3255 13.6615C18.2624 13.8137 18.2459 13.9813 18.2781 14.143C18.3103 14.3046 18.3896 14.4531 18.5062 14.5696C18.6227 14.6862 18.7712 14.7655 18.9328 14.7977C19.0945 14.8298 19.2621 14.8133 19.4143 14.7503C19.5666 14.6872 19.6967 14.5804 19.7883 14.4433C19.8799 14.3063 19.9288 14.1452 19.9288 13.9804C19.9288 13.8709 19.9072 13.7626 19.8653 13.6615C19.8234 13.5604 19.7621 13.4685 19.6847 13.3911C19.6073 13.3137 19.5154 13.2524 19.4143 13.2105C19.3132 13.1686 19.2049 13.147 19.0954 13.147ZM17.1004 16.1279C16.9356 16.1279 16.7745 16.1767 16.6374 16.2683C16.5004 16.3599 16.3936 16.49 16.3305 16.6423C16.2674 16.7946 16.2509 16.9621 16.2831 17.1238C16.3153 17.2854 16.3946 17.4339 16.5112 17.5505C16.6277 17.667 16.7762 17.7464 16.9378 17.7785C17.0995 17.8107 17.2671 17.7942 17.4193 17.7311C17.5716 17.668 17.7017 17.5612 17.7933 17.4242C17.8849 17.2871 17.9338 17.126 17.9338 16.9612C17.9338 16.8518 17.9122 16.7434 17.8703 16.6423C17.8284 16.5412 17.7671 16.4493 17.6897 16.372C17.6123 16.2946 17.5204 16.2332 17.4193 16.1913C17.3182 16.1494 17.2099 16.1279 17.1004 16.1279ZM14.1354 18.0995C13.9706 18.0995 13.8095 18.1484 13.6724 18.24C13.5354 18.3316 13.4286 18.4617 13.3655 18.614C13.3024 18.7662 13.2859 18.9338 13.3181 19.0954C13.3503 19.2571 13.4296 19.4056 13.5462 19.5221C13.6627 19.6387 13.8112 19.718 13.9728 19.7502C14.1345 19.7823 14.3021 19.7658 14.4543 19.7028C14.6066 19.6397 14.7367 19.5329 14.8283 19.3958C14.9199 19.2588 14.9688 19.0977 14.9688 18.9329C14.9688 18.8234 14.9472 18.7151 14.9053 18.614C14.8634 18.5129 14.8021 18.421 14.7247 18.3436C14.6473 18.2662 14.5554 18.2049 14.4543 18.163C14.3532 18.1211 14.2449 18.0995 14.1354 18.0995Z"
                  fill="#FECA28"
                  stroke="#FECA28"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-[16px] text-left w-[70%] tracking-[0.32px] font-medium  ">Pending</h3>
            </section>
            <section className=" flex items-center  w-full h-[50px] px-[23px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg className="animate-spin" width="25" height="25" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.3646 32.947C10.2624 32.128 10.2098 31.2938 10.2098 30.447C10.2098 19.4013 19.1641 10.447 30.2098 10.447C36.4613 10.447 42.0428 13.3152 45.7103 17.8074M45.7103 17.8074V10.447M45.7103 17.8074V17.9468L38.2103 17.947M50.0551 27.947C50.1573 28.766 50.2098 29.6003 50.2098 30.447C50.2098 41.4928 41.2556 50.447 30.2098 50.447C24.2364 50.447 18.8746 47.8283 15.2098 43.676M15.2098 43.676V42.947H22.7098M15.2098 43.676V50.447"
                  stroke="#27C6DA"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3 className="text-[16px]  text-left w-[70%] tracking-[0.32px] font-medium  ">Processing</h3>
            </section>
            <section className=" flex items-center  w-full h-[50px] px-[23px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.475 10.8703L16.285 14.6803C16.5325 14.9278 16.5325 15.3297 16.285 15.5772L14.9406 16.9216C14.6931 17.1691 14.2919 17.1691 14.0437 16.9216L10.2331 13.1116L6.42248 16.9216C6.17498 17.1691 5.77373 17.1691 5.52623 16.9216L4.18123 15.5772C3.93373 15.3297 3.93373 14.9284 4.18123 14.6803L7.99186 10.8703L4.18123 7.05969C3.93373 6.81219 3.93373 6.41031 4.18123 6.16281L5.52686 4.81844C5.77436 4.57094 6.17561 4.57094 6.42311 4.81844L10.2331 8.62906L14.0437 4.81844C14.2912 4.57094 14.6925 4.57094 14.9406 4.81844L16.285 6.16344C16.5325 6.41094 16.5325 6.81219 16.285 7.06031L12.475 10.8703Z"
                  fill="#F26462"
                />
              </svg>

              <h3 className="text-[16px] text-left w-[70%] tracking-[0.32px] font-medium  ">Canceled</h3>
            </section>
            <section className=" flex items-center  w-full h-[50px] px-[23px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_523_68)">
                  <path d="M20.2332 0.869629H0.233154V20.8696H20.2332V0.869629Z" fill="white" fillOpacity="0.01" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.89978 10.8696L3.98311 8.7863L8.14978 12.953L16.4831 4.61963L18.5664 6.70296L8.14978 17.1196L1.89978 10.8696Z" fill="#9CCD65" />
                </g>
                <defs>
                  <clipPath id="clip0_523_68">
                    <rect width="20" height="20" fill="white" transform="translate(0.233154 0.869629)" />
                  </clipPath>
                </defs>
              </svg>

              <h3 className="text-[16px] text-left w-[70%] tracking-[0.32px] font-medium  ">Completed</h3>
            </section>
            <div className=" flex items-center  w-full border-t-[1px] border-t-[#E4E7ED] rounded place-content-center">
              <section className=" flex items-center mt-[10px]  w-full h-[50px] px-[26px] rounded place-content-center bg-[#F1F2F5] justify-between ">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.7332 10.8696C17.7332 15.0118 14.3753 18.3696 10.2332 18.3696C6.09102 18.3696 2.73315 15.0118 2.73315 10.8696C2.73315 6.7275 6.09102 3.36963 10.2332 3.36963C14.3753 3.36963 17.7332 6.7275 17.7332 10.8696Z"
                    stroke="#575757"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="text-[16px] text-left w-[70%]  tracking-[0.32px] font-medium  ">All</h3>
              </section>
            </div>
          </div>
        </div>
      )}
      {history && (
        <div className=" flex py-[15px]  mobile:right-[7%] md:top-[51rem] mobile:top-[78.5rem] justify-center items-center absolute  lg:left-[79%] lg:top-[50.5rem] bg-white border-[#F8F9FA] w-[190px] border-[2px] h-[300px] rounded ">
          <div className=" flex flex-col text-left text-[#575757] h-full  w-[90%] justify-between">
            <section className=" flex items-center  w-full h-[50px] px-[20px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8999 9.20296V6.70296C16.8999 5.78249 16.1537 5.0363 15.2332 5.0363H13.5665M16.8999 9.20296V16.703C16.8999 17.6235 16.1537 18.3696 15.2332 18.3696H5.23319C4.31272 18.3696 3.56653 17.6235 3.56653 16.703V9.20296M16.8999 9.20296H3.56653M3.56653 9.20296V6.70296C3.56653 5.78249 4.31272 5.0363 5.23319 5.0363H6.89986M6.89986 3.36963V5.0363M6.89986 6.70296V5.0363M13.5665 3.36963V5.0363M13.5665 6.70296V5.0363M13.5665 5.0363H6.89986"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7.31649 10.8696H5.64982C5.4197 10.8696 5.23315 11.0562 5.23315 11.2863V12.953C5.23315 13.1831 5.4197 13.3696 5.64982 13.3696H7.31649C7.54661 13.3696 7.73315 13.1831 7.73315 12.953V11.2863C7.73315 11.0562 7.54661 10.8696 7.31649 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M7.23873 13.9131H5.57206C5.34194 13.9131 5.1554 14.0996 5.1554 14.3298V15.9964C5.1554 16.2265 5.34194 16.4131 5.57206 16.4131H7.23873C7.46885 16.4131 7.6554 16.2265 7.6554 15.9964V14.3298C7.6554 14.0996 7.46885 13.9131 7.23873 13.9131Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 10.8696H9.39982C9.1697 10.8696 8.98315 11.0562 8.98315 11.2863V12.953C8.98315 13.1831 9.1697 13.3696 9.39982 13.3696H11.0665C11.2966 13.3696 11.4832 13.1831 11.4832 12.953V11.2863C11.4832 11.0562 11.2966 10.8696 11.0665 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 13.8696H9.39982C9.1697 13.8696 8.98315 14.0562 8.98315 14.2863V15.953C8.98315 16.1831 9.1697 16.3696 9.39982 16.3696H11.0665C11.2966 16.3696 11.4832 16.1831 11.4832 15.953V14.2863C11.4832 14.0562 11.2966 13.8696 11.0665 13.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 10.8696H13.1498C12.9197 10.8696 12.7332 11.0562 12.7332 11.2863V12.953C12.7332 13.1831 12.9197 13.3696 13.1498 13.3696H14.8165C15.0466 13.3696 15.2332 13.1831 15.2332 12.953V11.2863C15.2332 11.0562 15.0466 10.8696 14.8165 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 13.8696H13.1498C12.9197 13.8696 12.7332 14.0562 12.7332 14.2863V15.953C12.7332 16.1831 12.9197 16.3696 13.1498 16.3696H14.8165C15.0466 16.3696 15.2332 16.1831 15.2332 15.953V14.2863C15.2332 14.0562 15.0466 13.8696 14.8165 13.8696Z"
                  fill="currentColor"
                />
              </svg>

              <h3 className="text-[16px] text-left w-[75%] tracking-[0.32px] font-medium  ">Today</h3>
            </section>
            <section className=" flex items-center  w-full h-[50px] px-[20px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8999 9.20296V6.70296C16.8999 5.78249 16.1537 5.0363 15.2332 5.0363H13.5665M16.8999 9.20296V16.703C16.8999 17.6235 16.1537 18.3696 15.2332 18.3696H5.23319C4.31272 18.3696 3.56653 17.6235 3.56653 16.703V9.20296M16.8999 9.20296H3.56653M3.56653 9.20296V6.70296C3.56653 5.78249 4.31272 5.0363 5.23319 5.0363H6.89986M6.89986 3.36963V5.0363M6.89986 6.70296V5.0363M13.5665 3.36963V5.0363M13.5665 6.70296V5.0363M13.5665 5.0363H6.89986"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7.31649 10.8696H5.64982C5.4197 10.8696 5.23315 11.0562 5.23315 11.2863V12.953C5.23315 13.1831 5.4197 13.3696 5.64982 13.3696H7.31649C7.54661 13.3696 7.73315 13.1831 7.73315 12.953V11.2863C7.73315 11.0562 7.54661 10.8696 7.31649 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M7.23873 13.9131H5.57206C5.34194 13.9131 5.1554 14.0996 5.1554 14.3298V15.9964C5.1554 16.2265 5.34194 16.4131 5.57206 16.4131H7.23873C7.46885 16.4131 7.6554 16.2265 7.6554 15.9964V14.3298C7.6554 14.0996 7.46885 13.9131 7.23873 13.9131Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 10.8696H9.39982C9.1697 10.8696 8.98315 11.0562 8.98315 11.2863V12.953C8.98315 13.1831 9.1697 13.3696 9.39982 13.3696H11.0665C11.2966 13.3696 11.4832 13.1831 11.4832 12.953V11.2863C11.4832 11.0562 11.2966 10.8696 11.0665 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 13.8696H9.39982C9.1697 13.8696 8.98315 14.0562 8.98315 14.2863V15.953C8.98315 16.1831 9.1697 16.3696 9.39982 16.3696H11.0665C11.2966 16.3696 11.4832 16.1831 11.4832 15.953V14.2863C11.4832 14.0562 11.2966 13.8696 11.0665 13.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 10.8696H13.1498C12.9197 10.8696 12.7332 11.0562 12.7332 11.2863V12.953C12.7332 13.1831 12.9197 13.3696 13.1498 13.3696H14.8165C15.0466 13.3696 15.2332 13.1831 15.2332 12.953V11.2863C15.2332 11.0562 15.0466 10.8696 14.8165 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 13.8696H13.1498C12.9197 13.8696 12.7332 14.0562 12.7332 14.2863V15.953C12.7332 16.1831 12.9197 16.3696 13.1498 16.3696H14.8165C15.0466 16.3696 15.2332 16.1831 15.2332 15.953V14.2863C15.2332 14.0562 15.0466 13.8696 14.8165 13.8696Z"
                  fill="currentColor"
                />
              </svg>

              <h3 className="text-[16px] text-left w-[75%] tracking-[0.32px] font-medium  ">This Week</h3>
            </section>
            <section className=" flex items-center  w-full h-[50px] px-[20px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8999 9.20296V6.70296C16.8999 5.78249 16.1537 5.0363 15.2332 5.0363H13.5665M16.8999 9.20296V16.703C16.8999 17.6235 16.1537 18.3696 15.2332 18.3696H5.23319C4.31272 18.3696 3.56653 17.6235 3.56653 16.703V9.20296M16.8999 9.20296H3.56653M3.56653 9.20296V6.70296C3.56653 5.78249 4.31272 5.0363 5.23319 5.0363H6.89986M6.89986 3.36963V5.0363M6.89986 6.70296V5.0363M13.5665 3.36963V5.0363M13.5665 6.70296V5.0363M13.5665 5.0363H6.89986"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7.31649 10.8696H5.64982C5.4197 10.8696 5.23315 11.0562 5.23315 11.2863V12.953C5.23315 13.1831 5.4197 13.3696 5.64982 13.3696H7.31649C7.54661 13.3696 7.73315 13.1831 7.73315 12.953V11.2863C7.73315 11.0562 7.54661 10.8696 7.31649 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M7.23873 13.9131H5.57206C5.34194 13.9131 5.1554 14.0996 5.1554 14.3298V15.9964C5.1554 16.2265 5.34194 16.4131 5.57206 16.4131H7.23873C7.46885 16.4131 7.6554 16.2265 7.6554 15.9964V14.3298C7.6554 14.0996 7.46885 13.9131 7.23873 13.9131Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 10.8696H9.39982C9.1697 10.8696 8.98315 11.0562 8.98315 11.2863V12.953C8.98315 13.1831 9.1697 13.3696 9.39982 13.3696H11.0665C11.2966 13.3696 11.4832 13.1831 11.4832 12.953V11.2863C11.4832 11.0562 11.2966 10.8696 11.0665 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 13.8696H9.39982C9.1697 13.8696 8.98315 14.0562 8.98315 14.2863V15.953C8.98315 16.1831 9.1697 16.3696 9.39982 16.3696H11.0665C11.2966 16.3696 11.4832 16.1831 11.4832 15.953V14.2863C11.4832 14.0562 11.2966 13.8696 11.0665 13.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 10.8696H13.1498C12.9197 10.8696 12.7332 11.0562 12.7332 11.2863V12.953C12.7332 13.1831 12.9197 13.3696 13.1498 13.3696H14.8165C15.0466 13.3696 15.2332 13.1831 15.2332 12.953V11.2863C15.2332 11.0562 15.0466 10.8696 14.8165 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 13.8696H13.1498C12.9197 13.8696 12.7332 14.0562 12.7332 14.2863V15.953C12.7332 16.1831 12.9197 16.3696 13.1498 16.3696H14.8165C15.0466 16.3696 15.2332 16.1831 15.2332 15.953V14.2863C15.2332 14.0562 15.0466 13.8696 14.8165 13.8696Z"
                  fill="currentColor"
                />
              </svg>

              <h3 className="text-[16px]  text-left w-[75%] tracking-[0.32px] font-medium  ">This Month</h3>
            </section>
            <section className=" flex items-center  w-full h-[50px] px-[20px] rounded place-content-center hover:bg-[#F1F2F5] justify-between ">
              <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.8999 9.20296V6.70296C16.8999 5.78249 16.1537 5.0363 15.2332 5.0363H13.5665M16.8999 9.20296V16.703C16.8999 17.6235 16.1537 18.3696 15.2332 18.3696H5.23319C4.31272 18.3696 3.56653 17.6235 3.56653 16.703V9.20296M16.8999 9.20296H3.56653M3.56653 9.20296V6.70296C3.56653 5.78249 4.31272 5.0363 5.23319 5.0363H6.89986M6.89986 3.36963V5.0363M6.89986 6.70296V5.0363M13.5665 3.36963V5.0363M13.5665 6.70296V5.0363M13.5665 5.0363H6.89986"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7.31649 10.8696H5.64982C5.4197 10.8696 5.23315 11.0562 5.23315 11.2863V12.953C5.23315 13.1831 5.4197 13.3696 5.64982 13.3696H7.31649C7.54661 13.3696 7.73315 13.1831 7.73315 12.953V11.2863C7.73315 11.0562 7.54661 10.8696 7.31649 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M7.23873 13.9131H5.57206C5.34194 13.9131 5.1554 14.0996 5.1554 14.3298V15.9964C5.1554 16.2265 5.34194 16.4131 5.57206 16.4131H7.23873C7.46885 16.4131 7.6554 16.2265 7.6554 15.9964V14.3298C7.6554 14.0996 7.46885 13.9131 7.23873 13.9131Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 10.8696H9.39982C9.1697 10.8696 8.98315 11.0562 8.98315 11.2863V12.953C8.98315 13.1831 9.1697 13.3696 9.39982 13.3696H11.0665C11.2966 13.3696 11.4832 13.1831 11.4832 12.953V11.2863C11.4832 11.0562 11.2966 10.8696 11.0665 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M11.0665 13.8696H9.39982C9.1697 13.8696 8.98315 14.0562 8.98315 14.2863V15.953C8.98315 16.1831 9.1697 16.3696 9.39982 16.3696H11.0665C11.2966 16.3696 11.4832 16.1831 11.4832 15.953V14.2863C11.4832 14.0562 11.2966 13.8696 11.0665 13.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 10.8696H13.1498C12.9197 10.8696 12.7332 11.0562 12.7332 11.2863V12.953C12.7332 13.1831 12.9197 13.3696 13.1498 13.3696H14.8165C15.0466 13.3696 15.2332 13.1831 15.2332 12.953V11.2863C15.2332 11.0562 15.0466 10.8696 14.8165 10.8696Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8165 13.8696H13.1498C12.9197 13.8696 12.7332 14.0562 12.7332 14.2863V15.953C12.7332 16.1831 12.9197 16.3696 13.1498 16.3696H14.8165C15.0466 16.3696 15.2332 16.1831 15.2332 15.953V14.2863C15.2332 14.0562 15.0466 13.8696 14.8165 13.8696Z"
                  fill="currentColor"
                />
              </svg>

              <h3 className="text-[16px]  text-left w-[75%] tracking-[0.32px] font-medium  ">This Year</h3>
            </section>
            <div className=" flex items-center  w-full border-t-[1px] border-t-[#E4E7ED] rounded place-content-center">
              <section className=" flex items-center mt-[10px]  w-full  px-[26px] rounded place-content-center  justify-between ">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.7332 10.8696C17.7332 15.0118 14.3753 18.3696 10.2332 18.3696C6.09102 18.3696 2.73315 15.0118 2.73315 10.8696C2.73315 6.7275 6.09102 3.36963 10.2332 3.36963C14.3753 3.36963 17.7332 6.7275 17.7332 10.8696Z"
                    stroke="#575757"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="text-[16px] text-left w-[70%]  tracking-[0.32px] font-medium  ">All</h3>
              </section>
            </div>
          </div>
        </div>
      )}
      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
    </>
  );
}

export default PaymentDashboard;
