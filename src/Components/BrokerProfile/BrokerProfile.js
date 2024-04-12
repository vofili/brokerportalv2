import { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";
import DropDown from "../ProfileDropdown/DropDown";
import Footer from "../Footer";

function BrokerProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        // Close the modal
        setIsOpen(false);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  return (
    <>
      <SideMenu />
      <div className=" sm:pl-[30px] lg:pl-[23rem] h-fit pb-[40px] bg-white  w-[100%]">
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
            Dashboard /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Broker Profile</span>
          </h3>
        </div>
        <div className="flex justify-between mt-[54px] items-center  w-[75%]">
          <img className="w-[66px] h-[66px] " src={avatar} alt="avatar" />
          <div className="text-left">
            <h3 className="text-[28px] font-bold text-[#1a1a1a] tracking-[0.56px]  ">Broker Profile</h3>
            <p className="text-[18px] font-normal mt-[8px] text-[#1A1A1A] ">Make Desired Changes To Your User Details And Login Information</p>
          </div>
        </div>
        {/* Broker Input Boxes */}
        <div className="w-[85%] mt-[90px] border-b-[0.5px] pb-[30px] border-b-[#9C9898]">
          <h3 className="text-[18px] font-bold text-[#282828] tracking-[0.36px]  border-b-[0.5px]  border-b-[#9C9898] pb-[15px]  ">
            {" "}
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 6.5C21 8.15685 19.6569 9.5 18 9.5C16.3431 9.5 15 8.15685 15 6.5C15 4.84315 16.3431 3.5 18 3.5C19.6569 3.5 21 4.84315 21 6.5Z" stroke="#6C757D" strokeWidth="3" />
              <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke="#6C757D" strokeWidth="3" />
              <path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" stroke="#6C757D" strokeWidth="3" />
              <path d="M8.72852 10.7495L15.2285 7.75M8.72852 13.25L15.2285 16.2495" stroke="#6C757D" strokeWidth="1.5" />
            </svg> */}
            Broker Profile
          </h3>
          <div className="mt-[57px] pl-[20px]">
            <div className="flex items-center justify-between">
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Broker Name</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">Valentine Ofili</h2>
                </div>
              </div>
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">NCRIB Number</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">5662652656565ff</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-[32px] justify-between">
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">RC Number</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">2652565888hh</h2>
                </div>
              </div>
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Contact First Name</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">Blessing</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-[32px] justify-between">
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Contact Last Name</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">Ladejobi</h2>
                </div>
              </div>
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Contact Phone Number</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">07089568525</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-[32px] justify-between">
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Contact Email Address</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">sample@gmail.com</h2>
                </div>
              </div>
              <div className="border-[0.5px] rounded-[4px] opacity-[1] pl-[24px] pt-[4px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Bank Account No</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">07089568525</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-[32px] justify-between">
              <div className="border-[0.5px] flex justify-between items-center rounded-[4px] opacity-[1] pl-[24px] pr-[24px]  w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Bank</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">Access</h2>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="border-[0.5px] flex justify-between items-center  rounded-[4px] opacity-[1] pl-[24px] pr-[24px] w-[375px] h-[52px] border-[#9C9898]">
                <div>
                  <h4 className="text-[12px] text-[#CCCCCC]  tracking-[0.19px] font-medium opacity-[1] ">Profile Status</h4>
                  <h2 className="text-[16px] text-[#1A1A1AB8] tracking-[0.26px] font-medium opacity-[1] ">Pending</h2>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <Link onClick={() => setModalOpen(true)} to="">
              <button className="w-[224px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[62px] bg-[#50B848] opacity-[1] rounded-[8px] ">Add User</button>
            </Link>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
      {/* Modal 1 */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} className=" top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100vh]  ">
          <div className="w-[600px] h-[350px] rounded-[8px] p-[27px] flex justify-center items-center bg-white opacity-[1]  ">
            <div className="  w-[600px] flex-col flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="#9DE0F6" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M30 35V17.5M30 38.75V42.5" stroke="#3EC3EE" strokeWidth="3" strokeLinejoin="round" />
                </g>
              </svg>

              <h3 className=" tracking-[0.14px] mt-[25px] font-semibold text-[40px] text-[#1A1A1A] ">Profile Update</h3>

              <div onClick={() => setModalOpen(false)} className="mb-[20px] cursor-pointer ">
                <button className="w-[80px]   h-[50px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#2778C3] opacity-[1] rounded-[4px] ">OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BrokerProfile;
