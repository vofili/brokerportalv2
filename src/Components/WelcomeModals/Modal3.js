function Modal3({ setModalOpen3, handleCloseModal1, handleOpenModal }) {
  return (
    <>
      {/* LARGE SCREENS */}
      <div onClick={() => setModalOpen3(false)} className="mobile:hidden lg:flex top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100vh]  ">
        <div className="w-[800px] h-[400px] rounded-[8px] p-[27px]  bg-white opacity-[1]  ">
          <div className=" w-[100%]  flex justify-end ">
            <h3 onClick={() => setModalOpen3(false)} className="text-[14px] cursor-pointer text-[#50B848] font-normal ">
              Skip intro
            </h3>
          </div>
          <div className=" w-[100%] flex justify-center items-center ">
            <div className="  w-[600px] flex-col flex items-center justify-center">
              <div className="mt-[24px] flex flex-col justify-center items-center ">
                <svg width="63" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H12C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5H4.5V19.5H19.5V12Z"
                    fill="#50B848"
                  />
                  <path
                    d="M11.0145 12.9899L12.252 12.8129L19.854 5.21239C19.9256 5.1432 19.9827 5.06044 20.0221 4.96894C20.0614 4.87744 20.082 4.77902 20.0829 4.67944C20.0838 4.57985 20.0648 4.48109 20.0271 4.38892C19.9894 4.29675 19.9337 4.21301 19.8633 4.14259C19.7929 4.07217 19.7091 4.01648 19.6169 3.97877C19.5248 3.94106 19.426 3.92208 19.3264 3.92295C19.2268 3.92381 19.1284 3.9445 19.0369 3.98381C18.9454 4.02312 18.8627 4.08025 18.7935 4.15189L11.19 11.7524L11.013 12.9899H11.0145ZM20.9145 3.08989C21.1236 3.29884 21.2894 3.54694 21.4026 3.82002C21.5158 4.09309 21.574 4.38579 21.574 4.68139C21.574 4.97698 21.5158 5.26968 21.4026 5.54276C21.2894 5.81583 21.1236 6.06394 20.9145 6.27289L13.137 14.0504C13.0223 14.1655 12.8733 14.2402 12.7125 14.2634L10.2375 14.6174C10.1221 14.634 10.0045 14.6234 9.89395 14.5866C9.78339 14.5498 9.68293 14.4877 9.60053 14.4053C9.51813 14.3229 9.45607 14.2225 9.41926 14.1119C9.38245 14.0013 9.37191 13.8837 9.38848 13.7684L9.74248 11.2934C9.7652 11.1327 9.83942 10.9838 9.95398 10.8689L17.733 3.09139C18.1549 2.66958 18.7271 2.43262 19.3237 2.43262C19.9203 2.43262 20.4925 2.66958 20.9145 3.09139V3.08989Z"
                    fill="#50B848"
                  />
                </svg>
                <h3 className=" tracking-[0.14px] mt-[26px]  font-medium text-[24px] text-[#1A1A1A] ">Finally, Contact Support</h3>
              </div>

              <div className="mb-[40px] ">
                <button onClick={() => setModalOpen3(false)} className="w-[225px] h-[44px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                  Get Started
                  <svg className="ml-[15px]" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
              <div className=" w-[80px] flex justify-between items-center h-[17px]  ">
                <h3 onClick={handleOpenModal} className=" text-[50px] cursor-pointer text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 onClick={handleCloseModal1} className=" text-[50px] cursor-pointer text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 className=" text-[50px] cursor-pointer text-[#707070]  ">&#x2022;</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div onClick={() => setModalOpen3(false)} className=" mobile:flex lg:hidden top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100%] ">
        <div className="w-[80%] h-fit  rounded-[8px] py-[30px] px-[20px] flex flex-col justify-between items-center  bg-white opacity-[1]  ">
          <div className=" w-[100%]  flex justify-end ">
            <h3 onClick={() => setModalOpen3(false)} className="text-[14px] cursor-pointer text-[#50B848] font-normal ">
              Skip intro
            </h3>
          </div>
          <div className=" w-full flex mt-[20px] justify-center items-center ">
            <div className="  w-full flex-col flex items-center justify-center">
              <div className="mt-[24px]  flex flex-col justify-center items-center ">
                <svg width="63" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H12C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5H4.5V19.5H19.5V12Z"
                    fill="#50B848"
                  />
                  <path
                    d="M11.0145 12.9899L12.252 12.8129L19.854 5.21239C19.9256 5.1432 19.9827 5.06044 20.0221 4.96894C20.0614 4.87744 20.082 4.77902 20.0829 4.67944C20.0838 4.57985 20.0648 4.48109 20.0271 4.38892C19.9894 4.29675 19.9337 4.21301 19.8633 4.14259C19.7929 4.07217 19.7091 4.01648 19.6169 3.97877C19.5248 3.94106 19.426 3.92208 19.3264 3.92295C19.2268 3.92381 19.1284 3.9445 19.0369 3.98381C18.9454 4.02312 18.8627 4.08025 18.7935 4.15189L11.19 11.7524L11.013 12.9899H11.0145ZM20.9145 3.08989C21.1236 3.29884 21.2894 3.54694 21.4026 3.82002C21.5158 4.09309 21.574 4.38579 21.574 4.68139C21.574 4.97698 21.5158 5.26968 21.4026 5.54276C21.2894 5.81583 21.1236 6.06394 20.9145 6.27289L13.137 14.0504C13.0223 14.1655 12.8733 14.2402 12.7125 14.2634L10.2375 14.6174C10.1221 14.634 10.0045 14.6234 9.89395 14.5866C9.78339 14.5498 9.68293 14.4877 9.60053 14.4053C9.51813 14.3229 9.45607 14.2225 9.41926 14.1119C9.38245 14.0013 9.37191 13.8837 9.38848 13.7684L9.74248 11.2934C9.7652 11.1327 9.83942 10.9838 9.95398 10.8689L17.733 3.09139C18.1549 2.66958 18.7271 2.43262 19.3237 2.43262C19.9203 2.43262 20.4925 2.66958 20.9145 3.09139V3.08989Z"
                    fill="#50B848"
                  />
                </svg>
                <h3 className=" tracking-[0.14px] mt-[26px] text-center font-medium text-[24px] text-[#1A1A1A] ">Finally, Contact Support</h3>
              </div>

              <div className="mb-[30px] ">
                <button onClick={() => setModalOpen3(false)} className="w-[200px] h-[44px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                  Get Started
                  <svg className="ml-[15px]" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>
              <div className=" w-[80px] flex justify-between items-center h-[17px]  ">
                <h3 onClick={handleOpenModal} className=" text-[50px] cursor-pointer text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 onClick={handleCloseModal1} className=" text-[50px] cursor-pointer text-[#dcddde] ">
                  &#x2022;
                </h3>
                <h3 className=" text-[50px] cursor-pointer text-[#707070]  ">&#x2022;</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal3;
