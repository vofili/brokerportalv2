import { useState } from "react";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";
import { Link } from "react-router-dom";
function Otp() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");

  const handleInputChange = (e) => {
    // Remove non-numeric characters using a regular expression
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setInputValue1(numericValue);
  };
  const handleInputChange2 = (e) => {
    // Remove non-numeric characters using a regular expression
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setInputValue2(numericValue);
  };
  const handleInputChange3 = (e) => {
    // Remove non-numeric characters using a regular expression
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setInputValue3(numericValue);
  };
  const handleInputChange4 = (e) => {
    // Remove non-numeric characters using a regular expression
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setInputValue4(numericValue);
  };

  return (
    <>
      {/* LARGE SCREENS */}
      <div className="mobile:hidden lg:flex pt-[70px] justify-center flex items-center ">
        <div>
          <div className=" mb-[16px] w-[100%] flex justify-center items-center h-[47px]">
            <img className="w-[210px]  " src={logo} alt="logo" />
          </div>
          <div className=" w-[544px] z-[2] relative   p-[52px] h-[576px] bg-white rounded-[16px] ">
            <div className="w-[500px]">
              <h3 className="text-[32px] tracking-[0.51px] opacity-[1] font-bold text-[#009677] ">Enter OTP</h3>
              <p className=" tracking-[0.26px]  mt-[16px] font-medium text-[#282828]  text-[16px] text-left opacity-[1] ">
                We sent an email to your registered email
                <span className="text-[#009677]"> sample@mail.com</span> and phone number <span className="text-[#009677]">+234 81 62** **9.</span>{" "}
              </p>
              <p className=" tracking-[0.26px] mt-[20px] text-[#282828] font-medium text-[16px] text-left opacity-[1] ">Please enter the OTP CODE sent to your email address.</p>
              <div className=" flex w-[440px] justify-center items-center ">
                <div className="mt-[52px] w-[350px] flex justify-between items-center ">
                  <input value={inputValue1} onChange={handleInputChange} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                  <input value={inputValue2} onChange={handleInputChange2} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                  <input value={inputValue3} onChange={handleInputChange3} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                  <input value={inputValue4} onChange={handleInputChange4} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                </div>
              </div>

              <Link onClick={() => window.scroll(0, 0)} to="/setnewpassword">
                <button className="w-[440px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">Next</button>
              </Link>
            </div>
            <p className=" mt-[89px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
              Didn't get the mail?{" "}
              <Link onClick={() => window.scroll(0, 0)} to="/forgotpassword">
                <span className="text-[#009677]">Resend</span>
              </Link>
            </p>
          </div>
          <img className=" z-[1] absolute top-[38rem] right-[50rem] " src={leaf} alt="leaf" />
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className="w-full pt-[40px] h-fit mobile:flex lg:hidden justify-center items-center ">
        <div className="w-[90%] flex justify-between items-center flex-col ">
          <div className=" w-[150px]  mb-[42px] h-[25px] ">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <div className=" w-[100%] z-[2] relative  mt-[20px] pt-[30px] px-[25px] h-fit pb-[40px] bg-white rounded-[16px] ">
              <h3 className="text-[32px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Enter OTP</h3>
              <p className=" tracking-[0.88px] mt-[16px] text-[#282828] font-[300] text-[16px] text-left opacity-[1] ">
                {" "}
                We sent an email to your registered email
                <span className="text-[#009677]"> sample@mail.com</span> and phone number <span className="text-[#009677]">+234 81 62** **9.</span>{" "}
              </p>
              <p className=" tracking-[0.26px] mt-[20px] text-[#282828] font-medium text-[16px] text-left opacity-[1] ">Please enter the OTP CODE sent to your email address.</p>
              <div className=" flex w-[90%] justify-center items-center ">
                <div className="mt-[52px] w-[90%] flex justify-between items-center ">
                  <input value={inputValue1} onChange={handleInputChange} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                  <input value={inputValue2} onChange={handleInputChange2} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                  <input value={inputValue3} onChange={handleInputChange3} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                  <input value={inputValue4} onChange={handleInputChange4} className=" outline-none  w-[64px] h-[65px] border-[0.5px]  text-[16px] text-[#9C9898]  pl-[24px] rounded-[10px] opacity-[1] border-[#9C9898] " type="tel" />
                </div>
              </div>
              <Link onClick={() => window.scroll(0, 0)} to="/setnewpassword">
                <button className="w-[90%] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">Next</button>
              </Link>

              <p className=" mt-[89px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                Didn't get the mail?{" "}
                <Link onClick={() => window.scroll(0, 0)} to="/forgotpassword">
                  <span className="text-[#009677]">Resend</span>
                </Link>
              </p>
            </div>
            <img className=" z-[1] w-[130px] ml-[-30px] mt-[-55px]  " src={leaf} alt="leaf" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
