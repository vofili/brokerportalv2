import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";

function ForgotPassword() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="mobile:hidden lg:flex pt-[70px] justify-center flex items-center ">
        <div>
          <div className=" mb-[16px] w-[100%] flex justify-center items-center h-[47px]">
            <img className="w-[210px]  " src={logo} alt="logo" />
          </div>
          <div className=" w-[504px] z-[2] relative  pt-[37px] pl-[32px] h-[556px] bg-white rounded-[16px] ">
            <div>
              <h3 className="text-[32px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Forgot Password</h3>
              <p className=" tracking-[0.88px] mt-[16px] text-[#282828] font-[300] text-[16px] text-left opacity-[1] ">Please enter your registered email to restore password</p>
              <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[52px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="email" placeholder="Email Address" />

              <Link onClick={() => window.scroll(0, 0)} to="/otp">
                <button className="w-[440px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">Retrieve Password</button>
              </Link>
            </div>
            <p className=" mt-[89px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
              Remember Password?{" "}
              <Link onClick={() => window.scroll(0, 0)} to="/login">
                <span className="text-[#009677]">Login</span>
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
            <div className=" w-[100%] z-[2] relative  mt-[20px] pt-[30px] pl-[40px] h-fit pb-[40px] bg-white rounded-[16px] ">
              <h3 className="text-[32px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Forgot Password</h3>
              <p className=" tracking-[0.88px] mt-[16px] text-[#282828] font-[300] text-[16px] text-left opacity-[1] ">Please enter your registered email to restore password</p>
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[52px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="email" placeholder="Email Address" />

              <Link onClick={() => window.scroll(0, 0)} to="/otp">
                <button className="w-[90%] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#50B848] opacity-[1] rounded-[4px] ">Retrieve Password</button>
              </Link>

              <p className=" mt-[89px] text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
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
    </>
  );
}

export default ForgotPassword;
