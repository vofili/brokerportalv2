import { useState } from "react";
import SideMenu from "../SideMenu";
import { Link } from "react-router-dom";
import DropDown from "../ProfileDropdown/DropDown";

export default function GroupLife() {
  const [isOpen, setIsOpen] = useState(false);
  const [creditIndividual, setCreditIndividual] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const handleCreditIndividual = () => {
    setCreditIndividual(!creditIndividual);
  };

  return (
    <>
      <SideMenu />
      {/* LARGE SCREENS */}
      <div className=" mobile:hidden lg:block pl-[23rem] h-[150vh]   w-[100%]">
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
            Dashboard /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Group Life Insurance</span>
          </h3>
        </div>
        {/* Title */}
        <div className=" mt-[54px] w-[75%]">
          <div className="text-left">
            <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  ">Group Life Insurance</h3>
            <p className="text-[18px] font-normal mt-[8px] text-[#1A1A1A] ">Quotes and Booking for Group Life Insurance</p>
          </div>
        </div>

        <div className=" w-[95%] h-[700px] pl-[25px] pt-[37px] rounded-[8px] mt-[44px] bg-white ">
          {/* Credit Life Individual and Corporate Insurance Header Container */}
          <div className="w-[98%]  border-b-[#DFDEDE]  border-b-[2px] rounded-[8] ">
            <div className=" w-[380px] flex justify-between items-center  ">
              <h3
                onClick={handleCreditIndividual}
                className={`pb-[10px] 
 ${
   creditIndividual
     ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
     : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
 }`}
              >
                Group Life(Corporate)
              </h3>
            </div>
          </div>
          {/* Credit Life Individual and Corporate Insurance Table */}
          {creditIndividual && (
            <div className="w-[98%] h-[450px] rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
              <table className="  w-[100%] h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
                <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
                  <tr className="text-[18px] text-left font-[400px] text-[#575757] tracking-[0.36px] ">
                    <th className=" w-[43%] pt-[30px] pl-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
                    <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Premium</th>
                    <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Rate</th>
                    <th className="  pt-[30px] pl-[10px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
                    <th className="  pt-[30px] pl-[10px]  pb-[10px]    ">Action</th>
                  </tr>
                </thead>
                <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
                  <tr className="  ">
                    <td className="w-[30%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                      Group life insurance is a type of life insurance in which a single contract covers an entire group of people. Typically, the policy owner is an employer or an entity such as a labor organization, and the policy covers the
                      employees or members of the group. <br />
                      <span className="text-[#1A987B]">
                        Group life insurance is often provided as part of a complete employee benefit package. In most cases, the cost of group coverage is far less than what the employees or members would pay for a similar amount of individual
                        protection.{" "}
                      </span>
                    </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">0.0 - 0.5% </td>
                    <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
                    <td className="pl-[10px] pr-[10px]">
                      <Link to="/grouplifecorporategetquote">
                        <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                          GET A QUOTE
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
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
              Dashboard /<span className="text-[18px] text-[#009677] tracking-[0.32px] "> Group Life Insurance</span>
            </h3>
          </div>
          <div className=" mt-[40px]">
            <div className="text-left">
              <h3 className="text-[28px] font-[600] text-[#1a1a1a] tracking-[0.56px]  ">Group Life Insurance</h3>
              <p className="text-[14px] font-normal mt-[8px] text-[#1A1A1A] ">Quotes and Booking for Group Life Insurance</p>
            </div>
          </div>
          <div className=" w-full h-fit px-[25px] py-[37px] rounded-[8px] mt-[44px] bg-white ">
            {/* Credit Life Individual and Corporate Insurance Header Container */}
            <div className="w-[98%]  border-b-[#DFDEDE]  border-b-[2px] rounded-[8] ">
              <div className=" w-[380px] flex justify-between items-center  ">
                <h3
                  onClick={handleCreditIndividual}
                  className={`pb-[10px] 
 ${
   creditIndividual
     ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
     : "text-[16px] hover:text-[#2778C3] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
 }`}
                >
                  Group Life(Corporate)
                </h3>
              </div>
            </div>
            {/* Credit Life Individual and Corporate Insurance Table */}
            {creditIndividual && (
              <div className="w-[98%]  lg:hidden overflow-x-scroll h-fit rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
                <table className="  w-[100%] h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
                  <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
                    <tr className="text-[18px] text-left font-[400px] text-[#575757] tracking-[0.36px] ">
                      <th className=" w-[43%] pt-[30px] pl-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
                      <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Premium</th>
                      <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Rate</th>
                      <th className="  pt-[30px] pl-[10px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
                      <th className="  pt-[30px] pl-[10px]  pb-[10px]    ">Action</th>
                    </tr>
                  </thead>
                  <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
                    <tr className="  ">
                      <td className="w-[30%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                        Group life insurance is a type of life insurance in which a single contract covers an entire group of people. Typically, the policy owner is an employer or an entity such as a labor organization, and the policy covers the
                        employees or members of the group. <br />
                        <span className="text-[#1A987B]">
                          Group life insurance is often provided as part of a complete employee benefit package. In most cases, the cost of group coverage is far less than what the employees or members would pay for a similar amount of individual
                          protection.{" "}
                        </span>
                      </td>
                      <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
                      <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">0.0 - 0.5% </td>
                      <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
                      <td className="pl-[10px] pr-[10px]">
                        <Link to="/grouplifecorporategetquote">
                          <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                            GET A QUOTE
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Book Box */}
      {isHovered && (
        <div className=" absolute left-[90.7%]  w-[70px] text-center h-[40px] top-[78%] transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white rounded shadow-md">
          <div className="left-[35px] absolute   bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-800 border-r border-b border-indigo-500"></div> Book
        </div>
      )}
      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
    </>
  );
}
