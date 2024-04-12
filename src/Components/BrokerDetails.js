import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";
// import classNames from "classnames";

function BrokerDetails() {
  const [progress, setProgress] = useState(0);
  const simulateRegistration = () => {
    // Simulate registration progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 1000);
  };
  const options = [
    { id: 1, label: " Brokers' Details " },
    { id: 2, label: "Broker's Address" },
    { id: 3, label: "Broker's Contact Details" },
    { id: 4, label: "Upload CAC Documents" },
  ];

  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });

  //     // Automatically move to the next step when the user fills the current form
  //     if (formData.step < 4) {
  //       setFormData((prevData) => ({ ...prevData, step: prevData.step + 1 }));
  //     }
  //   };
  return (
    <>
      {/* Desktop View */}
      <div className="mobile:hidden lg:block ">
        <div className=" w-[100%] p-[90px] flex justify-between items-center ">
          {/* Welcome Note */}
          <div className="  w-[43%]  ">
            <div className=" w-[210px] ml-[-20px] mb-[32px] h-[47px] ">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-[30px] w-[95%] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[20px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
            <div className=" mt-[45px] h-[500px] ">
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
          <div className=" w-[43%]">
            {/* Progress Bar */}
            <div className="flex h-2 mb-4 overflow-hidden text-xs bg-[#009677]">
              <div style={{ width: `${progress}%` }} className="" />
            </div>

            <div className=" w-[480px] z-[2] relative  pt-[37px] pl-[32px] h-fit pb-[50px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[30px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Get Started</h3>
                <p className=" tracking-[0.88px]  mt-[37px] text-[#282828] font-[300] text-[18px] text-left opacity-[1] ">Kindly provide the details below to create a Broker Profile</p>
                <input className=" outline-none font-medium w-[400px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="CAC RC No" />
                <input className=" outline-none font-medium w-[400px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker ID (RB No)" />
                <input className=" outline-none font-medium w-[400px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker Name" />
                <input className=" outline-none font-medium w-[400px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Issue Date" />
                <input className=" outline-none font-medium w-[400px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Expiry Date" />

                <div className="w-[400px] mt-[43.25px] flex justify-between items-center">
                  <Link onClick={() => window.scroll(0, 0)} to="/">
                    <button onClick={simulateRegistration} className="w-[180px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">
                      Previous
                    </button>
                  </Link>
                  <Link to="/brokeradditionalinfo">
                    <button className="w-[180px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600]  bg-[#50B848] opacity-[1] rounded-[8px] ">Next</button>
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
        <img className=" z-[1] absolute top-[51rem] right-[30rem] " src={leaf} alt="leaf" />

        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[100px] pb-[100px]">
          <p className=" text-[20px] font-normal text-[#2E3D56CC]">
            Having troubles? <span className="text-[#009677] font-bold underline ">Contact Support</span>
          </p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="lg:hidden pt-[40px] mobile:flex justify-center items-center h-fit w-full ">
        <div className=" w-[80%]  flex flex-col justify-between  ">
          <div className=" w-[150px]  mb-[42px] h-[25px] ">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="text-[34px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
          <p className=" tracking-[1.06px] mt-[22px] text-[#808285] font-normal text-[14px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
          <div>
            <div className=" w-[100%] z-[2] relative  mt-[20px] pt-[30px] pl-[40px] h-fit pb-[40px] bg-white rounded-[16px] ">
              <h3 className="text-[28px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Get Started</h3>
              <p className=" tracking-[0.88px] w-[90%]  mt-[37px] text-[#282828] font-[300] text-[14px] text-left opacity-[1] ">Kindly provide the details below to create a Broker Profile</p>
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="CAC RC No" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker ID (RB No)" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Broker Name" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Issue Date" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="License Expiry Date" />
              <div className="w-[90%] mb-[38px] mt-[43.25px] flex justify-between items-center">
                <Link onClick={() => window.scroll(0, 0)} to="/">
                  <button className="w-[110px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">Previous</button>
                </Link>
                <Link to="/brokeradditionalinfo">
                  <button className="w-[110px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600]  bg-[#50B848] opacity-[1] rounded-[8px] ">Next</button>
                </Link>
              </div>
              <p className="  text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
                Already have an account?{" "}
                <Link onClick={() => window.scroll(0, 0)} to="/login">
                  <span className="text-[#009677]">Sign In </span>
                </Link>
              </p>
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

export default BrokerDetails;
