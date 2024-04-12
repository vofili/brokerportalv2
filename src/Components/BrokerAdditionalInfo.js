import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import leaf from "./images/signin.png";
function BrokerAdditionalInfo() {
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
          <div className=" h-[1290px]  w-[43%]  ">
            <div className=" w-[210px] ml-[-20px] mb-[32px] h-[47px] ">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="text-[30px]  tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Guaranteed Insurance for individuals and Organization</h1>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[18px] text-left opacity-[1] ">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
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
            <div className=" w-[504px] z-[2] relative  pt-[37px] pl-[32px] h-fit pb-[50px] bg-white rounded-[16px] ">
              <div>
                <h3 className="text-[30px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Get Started</h3>
                <p className=" tracking-[0.88px]  mt-[37px] text-[#282828] font-[300] text-[18px] text-left opacity-[1] ">Kindly provide the details below to create a Broker Profile</p>
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Office Address" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="City/Town" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="State" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="email" placeholder="Contact Email Address" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Contact Full Name" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Contact Full Name" />
                <input className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="number" placeholder="Contact Phone Number" />
                <div className=" font-medium w-[440px] items-center flex justify-between h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pr-[24px] rounded-[4px] opacity-[1] border-[#9C9898] ">
                  <input className="w-[385px] pl-[24px] h-[46px] outline-none " type="text" placeholder="Bank" />
                  <span style={{ cursor: "pointer" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <input
                  className=" outline-none font-medium w-[440px] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pr-[24px] pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898]  appearance-none"
                  type="number"
                  placeholder="Bank Account Number"
                />

                <div className="w-[440px] mt-[43.25px] flex justify-between items-center">
                  <Link onClick={() => window.scroll(0, 0)} to="/brokerdetails">
                    <button className="w-[204px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">Previous</button>
                  </Link>
                  <Link onClick={() => window.scroll(0, 0)} to="/cacdocument">
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
        <img className=" z-[1] absolute top-[75rem] right-[30rem] " src={leaf} alt="leaf" />

        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[10px] pb-[100px]">
          <p className=" text-[18px] font-normal text-[#2E3D56CC]">
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
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Office Address" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="City/Town" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="State" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="email" placeholder="Contact Email Address" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Contact Full Name" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="text" placeholder="Contact Full Name" />
              <input className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898] " type="number" placeholder="Contact Phone Number" />
              <div className=" font-medium w-[90%] items-center flex justify-between h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pr-[24px] rounded-[4px] opacity-[1] border-[#9C9898] ">
                <input className="w-full pl-[24px] h-[46px] outline-none " type="text" placeholder="Bank" />
                <span style={{ cursor: "pointer" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </div>
              <input
                className=" outline-none font-medium w-[90%] h-[52px] border-[0.5px] mt-[32px] text-[16px] text-[#9C9898]  pr-[24px] pl-[24px] rounded-[4px] opacity-[1] border-[#9C9898]  appearance-none"
                type="number"
                placeholder="Bank Account Number"
              />
              <div className="w-[90%] mb-[34px]  mt-[43.25px] flex justify-between items-center">
                <Link onClick={() => window.scroll(0, 0)} to="/brokerdetails">
                  <button className="w-[110px] h-[52px] text-[#50B848] text-[16px] tracking-[0.26px] font-[600]  border-[1px] border-[#50B848] opacity-[1] rounded-[8px] ">Previous</button>
                </Link>
                <Link onClick={() => window.scroll(0, 0)} to="/cacdocument">
                  <button className="w-[110px] h-[52px] text-[#fff] text-[16px] tracking-[0.26px] font-[600]  bg-[#50B848] opacity-[1] rounded-[8px] ">Next</button>
                </Link>
              </div>

              <p className=" text-center text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
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

export default BrokerAdditionalInfo;
