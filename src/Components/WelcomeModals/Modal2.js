function Modal2({ handleCloseModal1, handleOpenModal, handleOpenModal2, setModalOpen2 }) {
  return (
    <>
      {/* LARGE SCREEN */}
      <div onClick={() => setModalOpen2(false)} className=" mobile:hidden lg:flex top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100%] ">
        <div className="w-3/4 h-fit  rounded-[8px] p-[40px] flex flex-col justify-between items-center  bg-white opacity-[1]  ">
          <div className=" w-[100%]  flex justify-end ">
            <h3 onClick={() => setModalOpen2(false)} className="text-[14px] cursor-pointer text-[#50B848] font-normal ">
              Skip intro
            </h3>
          </div>
          <div className=" w-[100%] flex justify-center items-center ">
            <div className="  w-[600px] flex-col flex items-center justify-center">
              <div className="mt-[7px]">
                <h3 className=" tracking-[0.14px]  font-medium text-[24px] text-[#1A1A1A] ">Quotes</h3>
                <p className="text-[16px] mt-[16px] text-left tracking-[0.19px] text-[#222222] font-normal ">Backups are taken with every new change to ensure complete piece of mind. They are kept safe for immediate restores. </p>
              </div>
              <div className="mt-[24px]">
                <h3 className=" tracking-[0.14px]  font-medium text-[24px] text-[#1A1A1A] ">Claims</h3>
                <p className="text-[16px] mt-[16px] text-left tracking-[0.19px] text-[#222222] font-normal ">They are sent automatically to your clients with the completion of every project, so you don't have to worry about getting paid.</p>
              </div>
              <div onClick={handleOpenModal2} className="mb-[40px] ">
                <button className="w-[225px] h-[44px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                  Complete Profile
                  <svg className="ml-[10px]" width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 7L19.2929 11.2929C19.6262 11.6262 19.7929 11.7929 19.7929 12C19.7929 12.2071 19.6262 12.3738 19.2929 12.7071L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className=" w-[80px] flex justify-between items-center h-[17px]  ">
                <h3 onClick={handleOpenModal} className=" text-[50px] cursor-pointer text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 className=" text-[50px] cursor-pointer text-[#707070] ">&#x2022;</h3>
                <h3 onClick={handleOpenModal2} className=" text-[50px] cursor-pointer text-[#dcddde] ">
                  &#x2022;
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div onClick={() => setModalOpen2(false)} className=" mobile:flex lg:hidden top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100%] ">
        <div className="w-[80%] h-fit  rounded-[8px] py-[30px] px-[20px] flex flex-col justify-between items-center  bg-white opacity-[1]  ">
          <div className=" w-[95%]  flex justify-end ">
            <h3 onClick={() => setModalOpen2(false)} className="text-[14px] cursor-pointer text-[#50B848] font-normal ">
              Skip intro
            </h3>
          </div>
          <div className=" w-full flex mt-[20px] justify-center items-center ">
            <div className="  w-full flex-col flex  items-center justify-center">
              <div className="mt-[7px]">
                <h3 className=" tracking-[0.14px]  font-medium text-[24px] text-[#1A1A1A] ">Quotes</h3>
                <p className="text-[16px] mt-[16px] text-left tracking-[0.19px] text-[#222222] font-normal ">Backups are taken with every new change to ensure complete piece of mind. They are kept safe for immediate restores. </p>
              </div>
              <div className="mt-[24px]">
                <h3 className=" tracking-[0.14px]  font-medium text-[24px] text-[#1A1A1A] ">Claims</h3>
                <p className="text-[16px] mt-[16px] text-left tracking-[0.19px] text-[#222222] font-normal ">They are sent automatically to your clients with the completion of every project, so you don't have to worry about getting paid.</p>
              </div>
              <div onClick={handleOpenModal2} className="mb-[30px] ">
                <button className="w-[200px] h-[44px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                  Complete Profile
                  <svg className="ml-[10px]" width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 7L19.2929 11.2929C19.6262 11.6262 19.7929 11.7929 19.7929 12C19.7929 12.2071 19.6262 12.3738 19.2929 12.7071L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className=" w-[80px] flex justify-between items-center h-[17px]  ">
                <h3 onClick={handleOpenModal} className=" text-[50px] cursor-pointer text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 className=" text-[50px] cursor-pointer text-[#707070] ">&#x2022;</h3>
                <h3 onClick={handleOpenModal2} className=" text-[50px] cursor-pointer text-[#dcddde] ">
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

export default Modal2;
