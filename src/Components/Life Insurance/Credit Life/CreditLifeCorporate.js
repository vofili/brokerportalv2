import { Link } from "react-router-dom";

export default function CreditLifeCorporate({ setIsHovered }) {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="w-[98%] mobile:hidden lg:block h-[450px] rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
        <table className="  w-[100%] h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
          <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
            <tr className="text-[18px] text-left font-[400px] text-[#575757] tracking-[0.36px] ">
              <th className=" w-[43%] pt-[30px] pl-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
              <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED] w-[20%]   ">Loan Amount Cover</th>
              <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED] pr-[10px]  ">Rate</th>
              <th className="  pt-[30px] pl-[10px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
              <th className="  pt-[30px] pl-[10px]  pb-[10px]    ">Action</th>
            </tr>
          </thead>
          <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
            <tr className="  ">
              <td className="w-[30%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                Credit life insurance is a type of life insurance policy designed to pay off a borrower's outstanding debts if the borrower dies.
                <br />
                <span className="text-[#1A987B]">Credit life policies feature a term that corresponds with the loan maturity and decreasing death benefits that correspond with the reduced debt outstanding over time </span>
              </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED] ">0.0% - 0.1% </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
              <td className="pl-[10px] pr-[10px]">
                <Link to="/corporategetquote">
                  <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                    GET A QUOTE
                  </button>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* SMALL SCREENS */}
      <div className="w-[98%] mobile:block lg:hidden overflow-x-scroll h-fit rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
        <table className="  w-[100%] h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
          <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
            <tr className="text-[18px] whitespace-nowrap text-left font-[400px] text-[#575757] tracking-[0.36px] ">
              <th className=" w-[43%]  pt-[30px] px-[20px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
              <th className="  pt-[30px] px-[20px] border-r-[1px] pb-[10px] border-r-[#E4E7ED] w-[20%]   ">Loan Amount Cover</th>
              <th className="  pt-[30px] pl-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED] pr-[10px]  ">Rate</th>
              <th className="  pt-[30px] px-[20px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
              <th className="  pt-[30px] pl-[10px]  pb-[10px]    ">Action</th>
            </tr>
          </thead>
          <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
            <tr className="  ">
              <td className="w-[43%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                Credit life insurance is a type of life insurance policy designed to pay off a borrower's outstanding debts if the borrower dies.
                <br />
                <span className="text-[#1A987B]">Credit life policies feature a term that corresponds with the loan maturity and decreasing death benefits that correspond with the reduced debt outstanding over time </span>
              </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED] ">0.0% - 0.1% </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
              <td className="pl-[10px] pr-[10px]">
                <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                  GET A QUOTE
                </button>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
