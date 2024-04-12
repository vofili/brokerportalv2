import { useState } from "react";
import { Link } from "react-router-dom";

function ThirdParty() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="w-[100%] h-[450px] rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
        <table className="  w-[100%] h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
          <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
            <tr className="text-[18px] text-left font-[400px] text-[#575757] tracking-[0.36px] ">
              <th className=" w-[43%] pt-[30px] pl-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
              <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Premium</th>
              <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Rate</th>
              <th className="  pt-[30px] pl-[10px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
              <th className="  pt-[30px] pl-[10px]  pb-[10px]    ">Action</th>
            </tr>
          </thead>
          <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
            <tr className="  ">
              <td className="w-[30%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                The Third party Commercial motor policy covers death or bodily injuries and damages to the property of a third party caused by the use of the insured car. <br />
                <span className="text-[#1A987B]">Vehicle damages up to NGN 1,000,000 Compensation for bodily harm or death is unlimited, but can be capped at reasonable amount.</span>
              </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">N7,000 - N25,000 </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">3.0% - 5.0% </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">12 Months</td>
              <td className="pl-[10px] pr-[10px]">
                <Link to="/motorinsuranceprivate">
                  <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                    GET A QUOTE
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isHovered && (
        <div className=" absolute left-[90.7%]  w-[70px] text-center h-[40px] top-[81%] transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white rounded shadow-md">
          <div className="left-[35px] absolute   bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-gray-800 border-r border-b border-indigo-500"></div> Book
        </div>
      )}
    </>
  );
}

export default ThirdParty;
