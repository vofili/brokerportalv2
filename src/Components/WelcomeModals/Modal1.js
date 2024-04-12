import React from "react";

function Modal1({ handleCloseModal1, handleOpenModal, handleOpenModal2, setModalOpen }) {
  return (
    <>
      {/* LARGE SCREENS */}
      <div onClick={() => setModalOpen(false)} className=" mobile:hidden lg:flex top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100%] ">
        <div className="w-3/4 h-fit  rounded-[8px] p-[40px] flex flex-col justify-between items-center  bg-white opacity-[1]  ">
          <div className=" w-[90%]  flex justify-end ">
            <h3 onClick={() => setModalOpen(false)} className="text-[14px] cursor-pointer text-[#50B848] font-normal ">
              Skip intro
            </h3>
          </div>
          <div className=" w-[90%] flex justify-center items-center ">
            <div className="  w-3/4 flex-col flex items-center  justify-center">
              <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.9167 36.9998C66.9167 19.9711 53.2986 6.1665 36.5 6.1665C19.7014 6.1665 6.08337 19.9711 6.08337 36.9998C6.08337 54.0285 19.7014 67.8332 36.5 67.8332C53.2986 67.8332 66.9167 54.0285 66.9167 36.9998Z" fill="#50B848" />
                <path d="M24.3334 38.5417L31.9375 46.25L48.6667 27.75" stroke="#FAFAFA" strokeWidth="4" />
              </svg>
              <h3 className=" tracking-[0.14px] mt-[28px]  font-medium text-[24px] text-[#1A1A1A] ">Welcome Digital Broker</h3>
              <p className="text-[16px] mt-[20px] text-center tracking-[0.19px] text-[#222222] font-normal ">
                The broker platform allows you manage claims, request quotes, buy insurance and upload bulk policy requests. It also allows you manage customer interaction and policy flow.
              </p>
              <div onClick={handleCloseModal1} className="mb-[40px] cursor-pointer ">
                <button className="w-[225px]  h-[44px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                  Key Features
                  <svg className="ml-[10px]" width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 7L19.2929 11.2929C19.6262 11.6262 19.7929 11.7929 19.7929 12C19.7929 12.2071 19.6262 12.3738 19.2929 12.7071L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className=" w-[70px] flex justify-between items-center h-[17px]  ">
                <h3 onClick={handleOpenModal} className=" text-[50px] text-[#707070] cursor-pointer ">
                  &#x2022;
                </h3>
                <h3 onClick={handleCloseModal1} className="cursor-pointer text-[50px] text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 onClick={handleOpenModal2} className=" text-[50px] text-[#dcddde] cursor-pointer ">
                  &#x2022;
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div onClick={() => setModalOpen(false)} className=" mobile:flex lg:hidden top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100%] ">
        <div className="w-[80%] h-fit  rounded-[8px] py-[30px] px-[20px] flex flex-col justify-between items-center  bg-white opacity-[1]  ">
          <div className=" w-[95%]  flex justify-end ">
            <h3 onClick={() => setModalOpen(false)} className="text-[14px] cursor-pointer text-[#50B848] font-normal ">
              Skip intro
            </h3>
          </div>
          <div className=" w-full flex mt-[20px] justify-center items-center ">
            <div className=" w-full flex-col flex items-center  justify-center">
              <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.9167 36.9998C66.9167 19.9711 53.2986 6.1665 36.5 6.1665C19.7014 6.1665 6.08337 19.9711 6.08337 36.9998C6.08337 54.0285 19.7014 67.8332 36.5 67.8332C53.2986 67.8332 66.9167 54.0285 66.9167 36.9998Z" fill="#50B848" />
                <path d="M24.3334 38.5417L31.9375 46.25L48.6667 27.75" stroke="#FAFAFA" strokeWidth="4" />
              </svg>
              <h3 className=" tracking-[0.14px] mt-[20px] text-center  font-medium text-[24px] text-[#1A1A1A] ">Welcome Digital Broker</h3>
              <p className="text-[16px] mt-[20px] text-center tracking-[0.19px] text-[#222222] font-normal ">
                The broker platform allows you manage claims, request quotes, buy insurance and upload bulk policy requests. It also allows you manage customer interaction and policy flow.
              </p>
              <div onClick={handleCloseModal1} className="mb-[30px] cursor-pointer ">
                <button className="w-[200px] h-[44px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                  Key Features
                  <svg className="ml-[10px]" width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 7L19.2929 11.2929C19.6262 11.6262 19.7929 11.7929 19.7929 12C19.7929 12.2071 19.6262 12.3738 19.2929 12.7071L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className=" w-[70px] flex justify-between items-center h-[17px]  ">
                <h3 onClick={handleOpenModal} className=" text-[50px] text-[#707070] cursor-pointer ">
                  &#x2022;
                </h3>
                <h3 onClick={handleCloseModal1} className="cursor-pointer text-[50px] text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 onClick={handleOpenModal2} className=" text-[50px] text-[#dcddde] cursor-pointer ">
                  &#x2022;
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal1;
