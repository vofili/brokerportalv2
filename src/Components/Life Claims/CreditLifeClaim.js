import { useCallback, useState } from "react";
import DropDown from "../ProfileDropdown/DropDown";
import SideMenu from "../SideMenu";
import { useDropzone } from "react-dropzone";
import SelectInput from "../Select Inputs/SelectInput";
import form from "./form.pdf";

function CreditLifeClaims() {
  const [isOpen, setIsOpen] = useState(false);

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
  const claimType = [
    { value: "Permanent Disability", label: "Permanent Disability" },
    { value: "Critical Illness", label: "Critical Illness" },
    { value: "Funeral Expense", label: "Funeral Expense" },
    { value: "Death", label: "Death" },
  ];
  console.log(" public/form.pdff");
  return (
    <>
      <SideMenu />
      {/* LARGE SCREENS */}
      <div className=" lg:block mobile:hidden pl-[22rem] h-fit pb-[50px]   w-full">
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
            Dashboard / Claims /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Credit Life Claims</span>
          </h3>
        </div>

        {/* Claims Information Container */}
        <div className="w-[90%] mt-[28px]">
          <div className="bg-[#F6F7F9] w-full h-[80px] flex justify-start pl-[20px] items-center ">
            <div className=" flex justify-between text-[#171717] text-[20px] font-medium w-[230px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.01188 5V4.25H2.41764L2.28175 4.82849L3.01188 5ZM11.9978 22.0001L11.8404 22.7334L11.9978 22.7672L12.1552 22.7334L11.9978 22.0001ZM20.9838 5L21.7139 4.82849L21.578 4.25H20.9838V5ZM11.9978 1.25C10.0309 1.25 8.49636 2.10185 7.14156 2.84177C5.74911 3.60226 4.5376 4.25 3.01188 4.25V5.75C4.97407 5.75 6.50651 4.89774 7.86055 4.15823C9.25224 3.39815 10.4667 2.75 11.9978 2.75V1.25ZM12.1552 21.2668C5.66823 19.8748 1.81818 13.3613 3.74201 5.17151L2.28175 4.82849C0.212173 13.6387 4.3474 21.1255 11.8404 22.7334L12.1552 21.2668ZM11.9978 2.75C13.5362 2.75 14.7521 3.39851 16.1416 4.15809C17.494 4.89737 19.0232 5.75 20.9838 5.75V4.25C19.4604 4.25 18.2527 3.60263 16.8611 2.84191C15.5066 2.10149 13.9715 1.25 11.9978 1.25V2.75ZM12.1552 22.7334C19.6482 21.1255 23.7835 13.6387 21.7139 4.82849L20.2537 5.17151C22.1775 13.3613 18.3274 19.8748 11.8404 21.2668L12.1552 22.7334Z"
                  fill="currentColor"
                />
                <path d="M13.3662 14L12.4562 12.572L11.5812 14H10.9162L12.1552 12.096L10.9162 10.164H11.6372L12.5472 11.585L13.4152 10.164H14.0802L12.8482 12.061L14.0872 14H13.3662Z" fill="currentColor" />
              </svg>
              <h3>Claims Information</h3>
            </div>
          </div>
          <div className=" w-full p-[30px] bg-white h-fit ">
            <form className=" flex flex-wrap gap-[30px] items-center ">
              <section className="">
                <label className="text-[#808080] " htmlFor="">
                  Completed Claims Form
                </label>
                <div className="w-[350px] border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
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
                <div className="mt-3">
                  <p className="text-[14px]">
                    Claims Form{" "}
                    <a href={form} download className=" cursor-pointer text-[#009677] tracking-[0.32px] ">
                      {" "}
                      Download Here |
                    </a>
                    <a href={form} download className=" text-[#009677] tracking-[0.32px] ">
                      {" "}
                      Fill Claim Form
                    </a>
                  </p>
                </div>
              </section>
              <section className="">
                <label className="text-[#808080] " htmlFor="">
                  Claim Type
                </label>
                <SelectInput label={claimType} placeholder={`Choose Claim Type`} />
                <div className="h-[30px]">{/* intentional break*/}</div>
              </section>
              <section>
                <div className="h-[30px]">{/* intentional */}</div>
                <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[4px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                  <label htmlFor="">Policy</label>
                  <input className=" outline-none w-full h-2/4 bg-none" type="text" />
                </div>
              </section>
              <section>
                <div className="h-[30px]">{/* intentional */}</div>

                <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[20px] pt-[3px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                  <label htmlFor="">Claims Amount (NGN)</label>
                  <input className=" outline-none w-full h-2/4 bg-none" type="number" />
                </div>
              </section>
              <section>
                <div className="h-[30px]">{/* intentional */}</div>

                <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[20px] bg-[#E9ECEF] pt-[3px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                  <label htmlFor="">Policy Holder</label>
                  <input className=" bg-transparent outline-none w-full h-2/4 bg-none" type="text" />
                </div>
              </section>
              <section>
                <div className="h-[30px]">{/* intentional */}</div>

                <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[20px] bg-[#E9ECEF] pt-[3px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                  <label htmlFor="">Product Name</label>
                  <input className=" bg-transparent outline-none w-full h-2/4 bg-none" type="text" />
                </div>
              </section>
              <section className="">
                <label className="text-[#808080] " htmlFor="">
                  Credit Offer Letter
                </label>
                <div className="w-[350px] border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
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
                  Loan Repayment Schedule
                </label>
                <div className="w-[350px] border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
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
              <div className=" w-[350px]">
                <label className="  text-[#808080]" htmlFor="">
                  Earnings Payslip (previous 1 Month)
                </label>
                <div className="w-full  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                  <div className="bg-[#F6F7F9]  border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
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
              </div>
              <div className="w-[350px]">
                <label className="  text-[#808080]" htmlFor="">
                  Earnings Payslip (previous 2 Month)
                </label>
                <div className="w-full  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                  <div className="bg-[#F6F7F9]  border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
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
              </div>
              <div className=" w-[350px]">
                <label className="  text-[#808080]" htmlFor="">
                  Earnings Payslip (previous 3 Month)
                </label>
                <div className="w-full  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                  <div className="bg-[#F6F7F9]  border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
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
              </div>
              <section>
                <div className="h-[30px]">{/* intentional break */}</div>
                <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                  <label htmlFor="">Attending Physician Full Name</label>
                  <input className=" outline-none w-full h-2/4 bg-none" type="text" />
                </div>
              </section>
              <section>
                <div className="h-[30px]">{/* intentional break */}</div>

                <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                  <label htmlFor="">Email Address</label>
                  <input className=" outline-none w-full h-2/4 bg-none" type="email" />
                </div>
              </section>
              <section>
                <div className="h-[30px]">{/* intentional break */}</div>

                <div className="  px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                  <label htmlFor="">Phone Number</label>
                  <input className=" outline-none w-full h-2/4 bg-none" type="tel" />
                </div>
              </section>
            </form>
            <button className="w-[350px] mt-8 text-[#fff] rounded h-[52px] justify-center flex items-center bg-[#50B848]  ">
              <svg className="mr-3" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 7V17M17 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              Log Claim
            </button>
          </div>
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
          {/* Page Title */}
          <div className="mt-[40px]">
            <h3 className="text-[16px] font-medium text-[#808285] opacicty-[1] tracking-[0.26px] ">
              Dashboard / Claims /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Credit Life Claims</span>
            </h3>
          </div>
          {/* Claims Information Container */}
          <div className="w-[90%] mt-[28px]">
            <div className="bg-[#F6F7F9] w-full h-[80px] flex justify-start pl-[20px] items-center ">
              <div className=" flex justify-between text-[#171717] text-[20px] font-medium w-[230px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.01188 5V4.25H2.41764L2.28175 4.82849L3.01188 5ZM11.9978 22.0001L11.8404 22.7334L11.9978 22.7672L12.1552 22.7334L11.9978 22.0001ZM20.9838 5L21.7139 4.82849L21.578 4.25H20.9838V5ZM11.9978 1.25C10.0309 1.25 8.49636 2.10185 7.14156 2.84177C5.74911 3.60226 4.5376 4.25 3.01188 4.25V5.75C4.97407 5.75 6.50651 4.89774 7.86055 4.15823C9.25224 3.39815 10.4667 2.75 11.9978 2.75V1.25ZM12.1552 21.2668C5.66823 19.8748 1.81818 13.3613 3.74201 5.17151L2.28175 4.82849C0.212173 13.6387 4.3474 21.1255 11.8404 22.7334L12.1552 21.2668ZM11.9978 2.75C13.5362 2.75 14.7521 3.39851 16.1416 4.15809C17.494 4.89737 19.0232 5.75 20.9838 5.75V4.25C19.4604 4.25 18.2527 3.60263 16.8611 2.84191C15.5066 2.10149 13.9715 1.25 11.9978 1.25V2.75ZM12.1552 22.7334C19.6482 21.1255 23.7835 13.6387 21.7139 4.82849L20.2537 5.17151C22.1775 13.3613 18.3274 19.8748 11.8404 21.2668L12.1552 22.7334Z"
                    fill="currentColor"
                  />
                  <path d="M13.3662 14L12.4562 12.572L11.5812 14H10.9162L12.1552 12.096L10.9162 10.164H11.6372L12.5472 11.585L13.4152 10.164H14.0802L12.8482 12.061L14.0872 14H13.3662Z" fill="currentColor" />
                </svg>
                <h3>Claims Information</h3>
              </div>
            </div>
            <div className=" w-full p-[30px] bg-white h-fit ">
              <form className=" flex flex-wrap gap-[30px] items-center ">
                <section className="">
                  <label className="text-[#808080] " htmlFor="">
                    Completed Claims Form
                  </label>
                  <div className="w-[350px] border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
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
                  <div className="mt-3">
                    <p className="text-[14px]">
                      Claims Form{" "}
                      <a href={form} download className=" cursor-pointer text-[#009677] tracking-[0.32px] ">
                        {" "}
                        Download Here |
                      </a>
                      <a href={form} download className=" text-[#009677] tracking-[0.32px] ">
                        {" "}
                        Fill Claim Form
                      </a>
                    </p>
                  </div>
                </section>
                <section className="">
                  <label className="text-[#808080] " htmlFor="">
                    Claim Type
                  </label>
                  <SelectInput label={claimType} placeholder={`Choose Claim Type`} />
                  <div className="h-[0px]">{/* intentional break*/}</div>
                </section>
                <section>
                  <div className="h-[30px]">{/* intentional */}</div>
                  <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[4px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                    <label htmlFor="">Policy</label>
                    <input className=" outline-none w-full h-2/4 bg-none" type="text" />
                  </div>
                </section>
                <section>
                  <div className="h-[30px]">{/* intentional */}</div>

                  <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[20px] pt-[3px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                    <label htmlFor="">Claims Amount (NGN)</label>
                    <input className=" outline-none w-full h-2/4 bg-none" type="number" />
                  </div>
                </section>
                <section>
                  <div className="h-[30px]">{/* intentional */}</div>

                  <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[20px] bg-[#E9ECEF] pt-[3px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                    <label htmlFor="">Policy Holder</label>
                    <input className=" bg-transparent outline-none w-full h-2/4 bg-none" type="text" />
                  </div>
                </section>
                <section>
                  <div className="h-[30px]">{/* intentional */}</div>

                  <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[20px] bg-[#E9ECEF] pt-[3px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                    <label htmlFor="">Product Name</label>
                    <input className=" bg-transparent outline-none w-full h-2/4 bg-none" type="text" />
                  </div>
                </section>
                <section className="">
                  <label className="text-[#808080] " htmlFor="">
                    Credit Offer Letter
                  </label>
                  <div className="w-[350px] border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
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
                    Loan Repayment Schedule
                  </label>
                  <div className="w-[350px] border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
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
                <div className=" w-[350px]">
                  <label className="  text-[#808080]" htmlFor="">
                    Earnings Payslip (previous 1 Month)
                  </label>
                  <div className="w-full  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                    <div className="bg-[#F6F7F9]  border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
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
                </div>
                <div className="w-[350px]">
                  <label className="  text-[#808080]" htmlFor="">
                    Earnings Payslip (previous 2 Month)
                  </label>
                  <div className="w-full  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                    <div className="bg-[#F6F7F9]  border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
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
                </div>
                <div className=" w-[350px]">
                  <label className="  text-[#808080]" htmlFor="">
                    Earnings Payslip (previous 3 Month)
                  </label>
                  <div className="w-full  border-[0.5px] rounded h-[52px] flex justify-between items-center  border-solid border-[#9C9898]  mt-[10px]">
                    <div className="bg-[#F6F7F9]  border-r-[#9C9898] flex justify-center items-center rounded-l h-[49px] border-r-[0.5px] w-[70px] ">
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
                </div>
                <section>
                  <div className="h-[30px]">{/* intentional break */}</div>
                  <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                    <label htmlFor="">Attending Physician Full Name</label>
                    <input className=" outline-none w-full h-2/4 bg-none" type="text" />
                  </div>
                </section>
                <section>
                  <div className="h-[30px]">{/* intentional break */}</div>

                  <div className=" px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                    <label htmlFor="">Email Address</label>
                    <input className=" outline-none w-full h-2/4 bg-none" type="email" />
                  </div>
                </section>
                <section>
                  <div className="h-[30px]">{/* intentional break */}</div>

                  <div className="  px-3 border-solid border-[0.5px] border-[#9C9898] text-[#cccccc] pb-[10px] pt-[10px] rounded w-[350px] flex flex-col justify-between h-[52px] ">
                    <label htmlFor="">Phone Number</label>
                    <input className=" outline-none w-full h-2/4 bg-none" type="tel" />
                  </div>
                </section>
              </form>
              <button className="w-[350px] mt-8 text-[#fff] rounded h-[52px] justify-center flex items-center bg-[#50B848]  ">
                <svg className="mr-3" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7V17M17 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                Log Claim
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
    </>
  );
}

export default CreditLifeClaims;
