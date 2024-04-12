import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };
  return (
    <>
      {/* LARGE SCREENS */}
      <div className=" w-full mobile:hidden lg:block">
        <div className=" w-[100%] p-[90px] flex justify-between items-center ">
          {/* Welcome Note */}
          <div className="  w-[45%] h-[700px] ">
            <div className=" w-[210px] ml-[-20px] mb-[32px] h-[47px] ">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-[30px]  tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[18px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
          </div>
          {/* Form starts */}
          <div className="   w-[45%]">
            <div className=" w-[430px] z-[2] relative  pt-[37px] pl-[32px] h-fit pb-[50px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[28px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Sign In</h3>
                <p className=" tracking-[0.88px] mt-[20px] text-[#282828] font-[300] text-[18px] text-left opacity-[1] ">Kindly Provide your registered details to access your dashboard.</p>
                <input className=" outline-none font-medium w-[350px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Username" />
                <div className=" font-medium w-[350px] items-center flex justify-between h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pr-[24px] rounded-[4px] opacity-[1] border-[#9C9898] ">
                  <input className="w-[95%] pl-[24px] h-[46px] outline-none " type={inputType} placeholder="Password" />
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
                <div className=" flex justify-between items-center  w-[154px] ">
                  <input className="w-[24px]  h-[24px] border-[#9C9898] border-[1px] rounded-[4px] mt-[32px]" type="checkbox" />
                  <div className="text-[16px]  mt-[35px]  text-[#009677] font-medium  ">Remember Me</div>
                </div>
                <Link onClick={() => window.scroll(0, 0)} to="/dashboard">
                  <button className="w-[350px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">Sign In</button>
                </Link>
                <p className=" mt-[24px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                  Don't have an account?
                  <Link onClick={() => window.scroll(0, 0)} to="/brokerdetails">
                    <span className="text-[#009677]"> Sign Up</span>{" "}
                  </Link>
                </p>
                <Link onClick={() => window.scroll(0, 0)} to="/forgotpassword">
                  <p className=" mt-[15px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#009677] font-normal ">Forgot Password</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img className=" z-[1] absolute top-[40.5rem] right-[38%] " src={leaf} alt="leaf" />
        <div className=" w-[350px] float-right mr-[190px] ">
          <p className="  text-left text-[14px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
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
            <div className=" w-[100%] z-[2] relative  mt-[20px] pt-[30px] pl-[20px] h-fit pb-[40px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[28px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Sign In</h3>
                <p className=" tracking-[0.88px] w-[95%] mt-[30px] text-[#282828] font-[300] text-[14px] text-left opacity-[1] ">Kindly Provide your registered details to access your dashboard.</p>
                <input className=" outline-none font-medium w-[90%] h-[42px] border-[0.5px] mt-[32px] text-[14px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Username" />
                <div className=" font-medium w-[90%] items-center flex justify-between h-[42px] border-[0.5px] mt-[32px] text-[14px] text-[#9C9898]  pr-[20px] rounded-[4px] opacity-[1] border-[#9C9898] ">
                  <input className="w-[95%] rounded-[4px] pl-[24px] h-full outline-none " type={inputType} placeholder="Password" />
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
                <div className=" flex justify-between items-center  w-[154px] ">
                  <input className="w-[24px]  h-[24px] border-[#9C9898] border-[1px] rounded-[4px] mt-[32px]" type="checkbox" />
                  <div className="text-[16px]  mt-[35px]  text-[#009677] font-medium  ">Remember Me</div>
                </div>
                <Link onClick={() => window.scroll(0, 0)} to="/dashboard">
                  <button className="w-[90%] h-[42px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">Sign In</button>
                </Link>
                <p className=" mt-[24px]  text-[14px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                  Don't have an account?
                  <Link onClick={() => window.scroll(0, 0)} to="/brokerdetails">
                    <span className="text-[#009677]"> Sign Up</span>{" "}
                  </Link>
                </p>
                <Link onClick={() => window.scroll(0, 0)} to="/forgotpassword">
                  <p className=" mt-[15px] text-center text-[15px] tracking-[0.26px] opacity-[1] text-[#009677] font-normal ">Forgot Password</p>
                </Link>
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

export default Login;
