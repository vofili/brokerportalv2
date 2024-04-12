import { Link } from "react-router-dom";

function DropDown() {
  return (
    <>
      <div className=" w-[190px] phone:left-[22rem] sm:left-[27rem] md:left-[34.5rem] absolute pl-[15px] pb-[15px] pt-[15px] pr-[15px] lg:left-[65.5rem] 3xl:left-[80rem] top-[4.5rem] h-[230px] bg-white border-[0.5px] border-[#AFAFAF] rounded-[2px] opacity-1 ">
        <ul className=" flex flex-col h-[100%] justify-between text-left ">
          <li className="text-[16px] border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] font-semibold text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">
            <Link to="/brokerprofile">My Profile</Link>
          </li>
          <li className="text-[16px] font-semibold  border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">
            <Link to="/manageuser">Manage Users</Link>
          </li>
          <li className="text-[16px] font-semibold  border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">
            <Link to="/addnewuser">Add New User</Link>
          </li>
          <li className="text-[16px] flex justify-between font-semibold  border-b-[0.5px] pb-[5px] border-b-[#AFAFAF] text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">
            Messages
            <div className="w-[24px] h-[24px] rounded-[30px] bg-[#50B848] flex justify-center items-center text-center ">
              <h3 className=" text-[#fff] text-[10px] ">1</h3>
            </div>
          </li>
          <Link to="/login">
            <li className="text-[16px] font-semibold text-[#1A1A1AB8] tracking-[0.26px] opacity-[1]  ">Sign Out</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default DropDown;
