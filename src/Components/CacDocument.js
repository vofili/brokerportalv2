import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";

function CacDocument() {
  const [file, setFile] = useState(null);
  const [fileText, setFileText] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(file);
    // Read the file content
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      setFileText(fileContent);
    };
    reader.readAsText(selectedFile);
    const manipulatedText = fileText.replace(/old/g, "Upload");
    setFileText(manipulatedText);
  };

  const options = [
    { id: 1, label: " Brokers' Details " },
    { id: 2, label: "Broker's Address" },
    { id: 3, label: "Broker's Contact Details" },
    { id: 4, label: "Upload CAC Documents" },
    // Add more options as needed
  ];
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="mobile:hidden lg:block ">
        <div className=" w-[100%] p-[90px] flex justify-between items-center ">
          {/* Welcome Note */}
          <div className=" h-[620px]  w-[45%]  ">
            <div className=" w-[150px] ml-[-20px] mb-[32px] h-[40px] ">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-[30px]  tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[18px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
            <div className=" mt-[45px] h-[300px] ">
              <form>
                {options.map((option) => (
                  <label key={option.id} className="flex mb-[35px]  items-center space-x-2">
                    <input type="radio" name="radioGroup" value={option.id} className="appearance-none h-[32px] w-[32px] opacity-[1] border border-[#8DC63F] rounded-full checked:bg-[#009677] checked:border-transparent focus:outline-none" />
                    <span className="text-[20px] pl-[10px] font-normal text-[#2E3D56CC] ">{option.label}</span>
                  </label>
                ))}
              </form>
            </div>
          </div>
          {/* Form starts */}
          <div className=" w-[45%]">
            <div className=" w-[504px] z-[2] relative  pt-[37px] pl-[32px] h-fit pb-[50px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[30px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Get Started</h3>
                <p className=" tracking-[0.88px] w-[440px] mt-[21px] text-[#282828] font-[300] text-[18px] text-left opacity-[1] ">Kindly upload your CAC Documents</p>
                <div className="mt-[32px]">
                  <label className="text-[14px] font-normal text-[#707070] " htmlFor="fileInput">
                    CAC Form C07
                    <div className=" flex justify-start items-center pl-[16px] outline-none w-[440px] h-[52px]  mt-[8px]  text-[16px] text-[#9C9898]   rounded-[4px] opacity-[1] bg-[#F9F9F9] ">
                      <div className="flex">
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
                        <span value={fileText} onChange={(event) => setFileText(event.target.value)} className="text-[16px] font-medium text-[#9C9898]">
                          Required File
                        </span>
                      </div>
                      <input
                        id="fileInput"
                        onChange={handleFileChange}
                        className=" outline-none  cursor-pointer file:bg-[#F9F9F9] file:text-[#F9F9F9]   w-2/4 h-[50px]     pl-[16px]  opacity-[1]  file:border-none  file:h-[32px] file:w-[85px] bg-[#F9F9F9] "
                        type="file"
                      />
                    </div>
                  </label>
                </div>
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="email" placeholder="Contact Email Address" />

                <div className="w-[440px] mt-[43.25px] flex justify-between items-center">
                  <Link onClick={() => window.scroll(0, 0)} to="/brokeradditionalinfo">
                    <button className="w-[204px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">Previous</button>
                  </Link>
                  <Link onClick={() => window.scroll(0, 0)} to="/directorinfo">
                    <button className="w-[204px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600]  bg-[#50B848] opacity-[1] rounded-[8px] ">Next</button>
                  </Link>
                </div>

                <p className=" mt-[24px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                  Already have an account?{" "}
                  <Link onClick={() => window.scroll(0, 0)} to="/login">
                    <span className="text-[#009677]">Sign In </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className=" z-[1] absolute top-[35rem] right-[30rem] " src={leaf} alt="leaf" />
        <div className=" w-[499px] ml-[44rem] ">
          <p className=" mt-[px] text-left text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
            By clicking on sign in button, you agree to our <span className="text-[#009677]">terms of use & privacy policy</span>{" "}
          </p>
        </div>
        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[50px] pb-[100px]">
          <p className=" text-[18px] font-normal text-[#2E3D56CC]">
            Having troubles? <span className="text-[#009677] font-bold underline ">Contact Support</span>
          </p>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className="w-full pt-[40px] h-fit mobile:flex lg:hidden justify-center items-center ">
        <div className=" w-[90%] flex flex-col justify-between  ">
          <div className=" w-[150px]  mb-[42px] h-[25px] ">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="text-[34px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
          <p className=" tracking-[1.06px] mt-[22px] text-[#808285] font-normal text-[14px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
          <div>
            <div className=" w-[100%] z-[2] relative  mt-[20px] pt-[30px] pl-[40px] h-fit pb-[40px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[28px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Sign In</h3>
                <p className=" tracking-[0.88px] w-[95%] mt-[30px] text-[#282828] font-[300] text-[14px] text-left opacity-[1] ">Kindly Provide your registered details to access your dashboard.</p>
                <div className="mt-[32px]">
                  <label className="text-[14px] font-normal text-[#707070] " htmlFor="fileInput">
                    CAC Form C07
                    <div className=" flex justify-start items-center pl-[16px] outline-none w-[90%] h-[52px]  mt-[8px]  text-[16px] text-[#9C9898]   rounded-[4px] opacity-[1] bg-[#F9F9F9] ">
                      <div className="flex">
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
                        <span value={fileText} onChange={(event) => setFileText(event.target.value)} className="text-[16px] font-medium text-[#9C9898]">
                          Required File
                        </span>
                      </div>
                      <input
                        id="fileInput"
                        onChange={handleFileChange}
                        className=" outline-none  cursor-pointer file:bg-[#F9F9F9] file:text-[#F9F9F9]   w-2/4 h-[50px]     pl-[16px]  opacity-[1]  file:border-none  file:h-[32px] file:w-[85px] bg-[#F9F9F9] "
                        type="file"
                      />
                    </div>
                  </label>
                </div>
                <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="email" placeholder="Contact Email Address" />

                <div className="w-[90%] mb-[34px] mt-[43.25px] flex justify-between items-center">
                  <Link onClick={() => window.scroll(0, 0)} to="/brokeradditionalinfo">
                    <button className="w-[120px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">Previous</button>
                  </Link>
                  <Link onClick={() => window.scroll(0, 0)} to="/directorinfo">
                    <button className="w-[120px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600]  bg-[#50B848] opacity-[1] rounded-[8px] ">Next</button>
                  </Link>
                </div>

                <p className=" ] text-center  text-[14px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                  Don't have an account?
                  <Link onClick={() => window.scroll(0, 0)} to="/brokerdetails">
                    <span className="text-[#009677]"> Sign Up</span>{" "}
                  </Link>
                </p>
              </div>
            </div>

            <img className=" z-[1] w-[130px] ml-[-30px]  mt-[-55px]  " src={leaf} alt="leaf" />
          </div>
          <p className=" mt-[25px] text-left text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
            By clicking on sign in button, you agree to our <span className="text-[#009677]">terms of use & privacy policy</span>{" "}
          </p>
          <div className="  tracking-[0.38px] opacity-[1] mt-[60px] pb-[100px]">
            <p className=" text-[20px] font-normal text-[#2E3D56CC]">
              Having troubles? <span className="text-[#009677] font-bold underline ">Contact Support</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CacDocument;
