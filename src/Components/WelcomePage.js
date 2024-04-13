import { Link } from "react-router-dom";
import oldMutual from "./images/brokerdasboard@2x.png";

function WelcomePage() {
  return (
    <>
      {/* Desktop View */}
      <div className=" mobile:hidden lg:block  ">
        <div className=" w-full  p-[70px] flex justify-between items-center ">
          <div className="  w-[47%] ">
            <h1 className="text-[34px] w-[600px] tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Welcome to OldMutual Brokers Platform.</h1>
            <p className=" tracking-[1.06px] mt-[20px] text-[#808285] font-normal text-[20px] text-left opacity-[1] ">
              An end to end insurance broker digital solution. Broker plaform saves time and prevents all sorts of process bottlenecks to allow brokers to request Quotes,Buy insurance, create claims, manage renewals and handle correspondence with the
              Insurer.
            </p>
            <div className=" mt-[40px] flex justify-between w-[380px] items-center ">
              <Link to="/brokerdetails">
                <div className=" transition ease-out duration-[0.3s] text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] opacity-[1] w-[180px] h-[51px] text-[16px] font-normal text-[#fff] bg-[#50B848]  ">Get Started</div>
              </Link>
              <Link to="/login">
                <div className=" text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] opacity-[1] w-[180px] h-[51px] text-[16px] font-normal text-[#50B848] border-[1px] border-[#50B848]  ">Sign In</div>
              </Link>
            </div>
            <p className=" mt-[64px] w-[700px] text-[14px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
              By clicking on sign in button, you agree to our<span className="text-[#009677]"> terms of use & privacy policy</span>{" "}
            </p>
          </div>
          <div className=" flex justify-center items-center h-[613px] w-[50%] ">
            <img className=" w-[600px]  " src={oldMutual} alt="old Mutual" />
          </div>
        </div>
        <div className=" pl-[70px] tracking-[0.38px] opacity-[1] mt-[80px]">
          <p className=" text-[20px] font-normal text-[#2E3D56CC]">
            Having troubles? <span className="text-[#009677] font-bold ">Contact Support</span>
          </p>
        </div>
      </div>
      {/* Mobile View */}
      <div className=" lg:hidden h-fit mt-[60px] pb-[40px]  mobile:flex justify-center items-center ">
        <div className=" w-[80%]   flex justify-between items-center ">
          <div className=" w-[90%]  ">
            <h1 className="text-[34px]  tracking-[1.94px] opacity-[1] font-bold text-[#009677] ">Welcome to OldMutual Brokers' Platform.</h1>
            <div className=" flex justify-center mt-[10px] items-center h-[300] w-full ">
              <img className=" w-full h-full  " src={oldMutual} alt="old Mutual" />
            </div>
            <p className=" tracking-[1.06px] mt-[32px] text-[#808285] font-normal text-[14px] text-left opacity-[1] ">
              An end to end insurance broker digital solution. Broker plaform saves time and prevents all sorts of process bottlenecks to allow brokers to request Quotes,Buy insurance, create claims, manage renewals and handle correspondence with the
              Insurer.
            </p>

            <div className=" mt-[44px] phone:max-w-[250px]  flex justify-between w-full items-center ">
              <Link to="/brokerdetails">
                <div className=" transition ease-out duration-[0.3s] text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] w-[120px] opacity-[1]  h-[49px] text-[16px] font-normal text-[#fff] bg-[#50B848]  ">Get Started</div>
              </Link>
              <Link to="/login">
                <div className=" text-center tracking-[0.26px] flex justify-center items-center rounded-[8px] opacity-[1] h-[49px] text-[14px] w-[120px] font-normal text-[#50B848] border-[1px] border-[#50B848]  ">Sign In</div>
              </Link>
            </div>
            <p className=" mt-[64px] w-full text-[16px] tracking-[0.26px] opacity-[1] text-[#808285] font-normal ">
              By clicking on sign in button, you agree to our<span className="text-[#009677]"> terms of use & privacy policy</span>{" "}
            </p>
            <div className="  tracking-[0.38px] opacity-[1] mt-[60px]">
              <p className=" text-[20px] font-normal text-[#2E3D56CC]">
                Having troubles? <span className="text-[#009677] font-bold ">Contact Support</span>
              </p>
            </div>
          </div>
          {/* <div className=" flex justify-center items-center h-4/6 w-[50%] ">
            <img className=" w-[600px]  " src={oldMutual} alt="old Mutual" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
