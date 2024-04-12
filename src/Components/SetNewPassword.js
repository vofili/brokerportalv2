import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";

function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [isOpen, setIsOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="mobile:hidden lg:flex pt-[70px] h-fit justify-center flex items-center ">
        <div>
          <div className=" mb-[16px] w-[100%] flex justify-center items-center h-[47px]">
            <img className="w-[210px]  " src={logo} alt="logo" />
          </div>
          <div className=" w-[504px] z-[2] relative  pt-[37px] pl-[32px] h-fit pb-[50px] bg-white rounded-[16px] ">
            <div>
              <h3 className="text-[32px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Setup New Password</h3>
              <p className=" tracking-[0.88px] mt-[16px] text-[#282828] font-[300] text-[16px] text-left opacity-[1] ">Please setup your new password to have access to your account.</p>
              <div className=" font-medium w-[440px] items-center flex justify-between h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pr-[24px] rounded-[4px] opacity-[1] border-[#9C9898] ">
                <input className="w-[385px] pl-[24px] h-[46px] outline-none " type={inputType} placeholder="Password" />
                <span onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                  {showPassword ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 5C17.5228 5 22 12 22 12C22 12 17.5228 19 12 19C6.47715 19 2 12 2 12C2 12 6.47715 5 12 5Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M50.74 37.1956C54.0105 33.4411 55.74 30.1118 55.74 30.1118C55.74 30.1118 46.649 12.6118 30.74 12.6118C29.887 12.6118 29.0535 12.6621 28.24 12.7574C27.3845 12.8575 26.551 13.0074 25.74 13.2006M30.74 22.6118C31.6165 22.6118 32.458 22.7622 33.24 23.0386C35.371 23.7918 37.06 25.4808 37.8132 27.6118C38.0895 28.3938 38.24 29.2353 38.24 30.1118M8.23999 7.61182L53.24 52.6118M30.74 37.6118C29.8635 37.6118 29.022 37.4613 28.24 37.1851C26.109 36.4318 24.4199 34.7428 23.6667 32.6118C23.5246 32.2098 23.4158 31.7921 23.3437 31.3618M11.1075 22.6118C10.3369 23.4731 9.64584 24.3178 9.03659 25.1118C6.87214 27.9323 5.73999 30.1118 5.73999 30.1118C5.73999 30.1118 14.8309 47.6118 30.74 47.6118C31.593 47.6118 32.4265 47.5616 33.24 47.4663"
                        stroke="currentColor"
                        strokeWidth="3.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="password" placeholder="Retype Password" />

              <button onClick={() => setIsOpen(true)} className="w-[440px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                Confirm New Password
              </button>
            </div>
            <p className=" mt-[29px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
              Remember Password?{" "}
              <Link onClick={() => window.scroll(0, 0)} to="/login">
                <span className="text-[#009677]">Login</span>
              </Link>
            </p>
          </div>
          <img className=" z-[1] absolute top-[35rem] right-[50rem] " src={leaf} alt="leaf" />
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className="w-full pt-[40px] h-fit mobile:flex lg:hidden justify-center items-center ">
        <div className="w-[90%] flex justify-between items-center flex-col ">
          <div className=" w-[150px]  mb-[42px] h-[25px] ">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <div className=" w-[100%] z-[2] relative  mt-[20px] pt-[30px] pl-[40px] pr-[10px] h-fit pb-[40px] bg-white rounded-[16px] ">
              <h3 className="text-[30px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Setup New Password</h3>
              <p className=" tracking-[0.88px] mt-[16px] text-[#282828] font-[300] text-[16px] text-left opacity-[1] ">Please setup your new password to have access to your account.</p>
              <div className=" font-medium w-[90%] items-center flex justify-between h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pr-[24px] rounded-[4px] opacity-[1] border-[#9C9898] ">
                <input className="w-[95%] pl-[24px] h-[46px] outline-none " type={inputType} placeholder="Password" />
                <span onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 5C17.5228 5 22 12 22 12C22 12 17.5228 19 12 19C6.47715 19 2 12 2 12C2 12 6.47715 5 12 5Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M50.74 37.1956C54.0105 33.4411 55.74 30.1118 55.74 30.1118C55.74 30.1118 46.649 12.6118 30.74 12.6118C29.887 12.6118 29.0535 12.6621 28.24 12.7574C27.3845 12.8575 26.551 13.0074 25.74 13.2006M30.74 22.6118C31.6165 22.6118 32.458 22.7622 33.24 23.0386C35.371 23.7918 37.06 25.4808 37.8132 27.6118C38.0895 28.3938 38.24 29.2353 38.24 30.1118M8.23999 7.61182L53.24 52.6118M30.74 37.6118C29.8635 37.6118 29.022 37.4613 28.24 37.1851C26.109 36.4318 24.4199 34.7428 23.6667 32.6118C23.5246 32.2098 23.4158 31.7921 23.3437 31.3618M11.1075 22.6118C10.3369 23.4731 9.64584 24.3178 9.03659 25.1118C6.87214 27.9323 5.73999 30.1118 5.73999 30.1118C5.73999 30.1118 14.8309 47.6118 30.74 47.6118C31.593 47.6118 32.4265 47.5616 33.24 47.4663"
                        stroke="currentColor"
                        strokeWidth="3.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="password" placeholder="Retype Password" />

              <button onClick={() => setIsOpen(true)} className="w-[90%] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">
                Confirm New Password
              </button>
              <p className=" mt-[29px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                Remember Password?{" "}
                <Link onClick={() => window.scroll(0, 0)} to="/login">
                  <span className="text-[#009677]">Login</span>
                </Link>
              </p>
            </div>
            <img className=" z-[1] w-[130px] ml-[-30px] mt-[-55px]  " src={leaf} alt="leaf" />
          </div>
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className=" top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-full h-[100%]  ">
          <div className="w-3/4 h-fit pb-[60px] pt-[51.41px] flex justify-center items-center rounded-[8px]  bg-white opacity-[1]  ">
            <div className=" w-[80%]   flex-col flex items-center justify-center">
              <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.9167 36.9998C66.9167 19.9711 53.2986 6.1665 36.5 6.1665C19.7014 6.1665 6.08337 19.9711 6.08337 36.9998C6.08337 54.0285 19.7014 67.8332 36.5 67.8332C53.2986 67.8332 66.9167 54.0285 66.9167 36.9998Z" fill="#50B848" />
                <path d="M24.3334 38.5417L31.9375 46.25L48.6667 27.75" stroke="#FAFAFA" strokeWidth="4" />
              </svg>
              <h3 className=" tracking-[0.14px] mt-[26px] text-center font-medium mobile:text-[24px] md:text-[28px] text-[#1A1A1A] ">Reset Password Successful!</h3>
              <p className="text-[16px] mt-[20px] tracking-[0.19px] text-center text-[#222222] font-normal ">Your password has been updated, click the button below to login.</p>
              <Link onClick={() => window.scroll(0, 0)} to="/login">
                <button className="md:w-[225px] mobile:w-[120px] h-[44px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">Login</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SetNewPassword;
