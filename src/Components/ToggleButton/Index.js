import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className=" w-full bg-white h-fit pb-[50px]">
        <div className="bg-[#F6F7F9] w-full h-[80px] flex justify-start pl-[20px] items-center ">
          <div className="flex  items-center">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
              <div className="relative">
                {/* Hidden input */}
                <input type="checkbox" id="toggle" className="sr-only" checked={isChecked} onChange={handleToggle} />
                {/* Visual switch */}
                <div className={`block  w-10 h-6 rounded-full ${isChecked ? "bg-[#9CCD65]" : "bg-[#EEEEEE]"}`} />
                {/* Switch ball */}
                <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform ${isChecked ? "translate-x-full " : "translate-x-0 "}`} />
              </div>
              {/* Switch label */}

              <div className=" items-center ml-6  flex justify-between text-[#6A6A6A] text-[20px] font-normal w-[290px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.01188 5V4.25H2.41764L2.28175 4.82849L3.01188 5ZM11.9978 22.0001L11.8404 22.7334L11.9978 22.7672L12.1552 22.7334L11.9978 22.0001ZM20.9838 5L21.7139 4.82849L21.578 4.25H20.9838V5ZM11.9978 1.25C10.0309 1.25 8.49636 2.10185 7.14156 2.84177C5.74911 3.60226 4.5376 4.25 3.01188 4.25V5.75C4.97407 5.75 6.50651 4.89774 7.86055 4.15823C9.25224 3.39815 10.4667 2.75 11.9978 2.75V1.25ZM12.1552 21.2668C5.66823 19.8748 1.81818 13.3613 3.74201 5.17151L2.28175 4.82849C0.212173 13.6387 4.3474 21.1255 11.8404 22.7334L12.1552 21.2668ZM11.9978 2.75C13.5362 2.75 14.7521 3.39851 16.1416 4.15809C17.494 4.89737 19.0232 5.75 20.9838 5.75V4.25C19.4604 4.25 18.2527 3.60263 16.8611 2.84191C15.5066 2.10149 13.9715 1.25 11.9978 1.25V2.75ZM12.1552 22.7334C19.6482 21.1255 23.7835 13.6387 21.7139 4.82849L20.2537 5.17151C22.1775 13.3613 18.3274 19.8748 11.8404 21.2668L12.1552 22.7334Z"
                    fill="currentColor"
                  />
                  <path d="M13.3662 14L12.4562 12.572L11.5812 14H10.9162L12.1552 12.096L10.9162 10.164H11.6372L12.5472 11.585L13.4152 10.164H14.0802L12.8482 12.061L14.0872 14H13.3662Z" fill="currentColor" />
                </svg>
                <h3>Police Report available </h3>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M11.992 17H12.001" stroke="currentColor" strokWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </label>
          </div>
        </div>{" "}
        {isChecked && (
          <div className=" w-full  p-[30px] bg-white ">
            <div className="flex  flex-wrap mt-6 gap-[30px] items-center justify-between">
              <section className="">
                <label className="text-[#808080] " htmlFor="">
                  Police Report Interim
                </label>
                <div className="w-[350px]  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                  <div className="bg-[#F6F7F9] border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_16_204)">
                        <path
                          d="M19.822 10.1109C19.3533 9.81725 18.7395 9.95817 18.4458 10.4269L13.1372 18.8996C11.6712 21.2392 8.58684 21.9508 6.24324 20.4824C3.89964 19.014 3.19456 15.9281 4.66048 13.5885L11.0319 3.41961C11.9104 2.01742 13.7608 1.5892 15.1669 2.47025C16.5731 3.35129 16.9948 5.20312 16.1163 6.6053L10.8051 15.082C10.5115 15.5507 9.89369 15.6891 9.42894 15.3979C8.96419 15.1068 8.8193 14.4905 9.11298 14.0217L13.3614 7.2412C13.6551 6.77248 13.5102 6.15619 13.0454 5.865C12.5767 5.57132 11.9629 5.71224 11.6692 6.18096L7.42082 12.9615C6.53978 14.3677 6.96402 16.2155 8.37018 17.0966C9.77634 17.9776 11.6242 17.5534 12.5052 16.1472L17.8139 7.67449C19.2759 5.33238 18.5668 2.24401 16.2272 0.778087C13.8875 -0.68783 10.8031 0.0237135 9.33722 2.36334L2.96583 12.5322C0.912549 15.8093 1.90742 20.1277 5.18052 22.1785C8.45361 24.2293 12.776 23.2369 14.8268 19.9638L20.138 11.4871C20.4317 11.0184 20.2907 10.4046 19.822 10.1109Z"
                          fill="#009677"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_16_204">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div {...getRootProps()} className="bg-[#F6F7F9] cursor-pointer border-l-[#9C9898] flex justify-center items-center rounded-r  h-[50px] border-l-[0.5px] w-[100px] ">
                    <input {...getInputProps()} />
                    <p className="text-[#7E7F7F]">Browse</p>
                  </div>
                </div>
              </section>
              <section className="">
                <label className="text-[#808080] " htmlFor="">
                  Police Report Final
                </label>
                <div className="w-[350px]  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                  <div className="bg-[#F6F7F9] border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_16_204)">
                        <path
                          d="M19.822 10.1109C19.3533 9.81725 18.7395 9.95817 18.4458 10.4269L13.1372 18.8996C11.6712 21.2392 8.58684 21.9508 6.24324 20.4824C3.89964 19.014 3.19456 15.9281 4.66048 13.5885L11.0319 3.41961C11.9104 2.01742 13.7608 1.5892 15.1669 2.47025C16.5731 3.35129 16.9948 5.20312 16.1163 6.6053L10.8051 15.082C10.5115 15.5507 9.89369 15.6891 9.42894 15.3979C8.96419 15.1068 8.8193 14.4905 9.11298 14.0217L13.3614 7.2412C13.6551 6.77248 13.5102 6.15619 13.0454 5.865C12.5767 5.57132 11.9629 5.71224 11.6692 6.18096L7.42082 12.9615C6.53978 14.3677 6.96402 16.2155 8.37018 17.0966C9.77634 17.9776 11.6242 17.5534 12.5052 16.1472L17.8139 7.67449C19.2759 5.33238 18.5668 2.24401 16.2272 0.778087C13.8875 -0.68783 10.8031 0.0237135 9.33722 2.36334L2.96583 12.5322C0.912549 15.8093 1.90742 20.1277 5.18052 22.1785C8.45361 24.2293 12.776 23.2369 14.8268 19.9638L20.138 11.4871C20.4317 11.0184 20.2907 10.4046 19.822 10.1109Z"
                          fill="#009677"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_16_204">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div {...getRootProps()} className="bg-[#F6F7F9] cursor-pointer border-l-[#9C9898] flex justify-center items-center rounded-r  h-[50px] border-l-[0.5px] w-[100px] ">
                    <input {...getInputProps()} />
                    <p className="text-[#7E7F7F]">Browse</p>
                  </div>
                </div>
              </section>{" "}
            </div>
          </div>
        )}
        <button className="w-[350px] ml-8 mt-8 text-[#fff] rounded h-[52px] justify-center flex items-center bg-[#50B848]  ">
          <svg className="mr-3" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V17M17 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          Log Claim
        </button>
      </div>
    </>
  );
};

export default ToggleSwitch;
