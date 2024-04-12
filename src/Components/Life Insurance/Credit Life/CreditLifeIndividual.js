import { Link } from "react-router-dom";

export default function CreditLifeIndividual({ setIsHovered }) {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="w-[98%] mobile:hidden lg:block h-[450px] rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
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
              <td className="w-[30%] 3xl:pt-[0] lg:pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                Credit life insurance is insurance that provides security should you be unable to repay your debt due to retrenchment, disability or death.
                <br />
                <span className="text-[#1A987B]">
                  The credit life insurance policy will pay the debt either in part or in full to the bank. It protects both you and your loved ones from the strain of having to service debt when life happens.Whether it’s a personal loan, a revolving
                  loan, a credit card or a student loan, you are likely paying for credit life insurance as part of your debt repayment.
                </span>
              </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">0.0 - 0.5% </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
              <td className="pl-[10px] pr-[10px]">
                <Link to="/individualgetquote">
                  <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                    GET A QUOTE
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* SMALL SCREENS */}
      <div className="w-[98%] mobile:block lg:hidden overflow-x-scroll h-fit rounded-[8px] mt-[50px] bg-[#F1F2F2] ">
        <table className="  w-[100%]  h-[450px] border-[1px] rounded-[8px] border-[#E4E7ED] justify-between items-center ">
          <thead className=" border-b-[1px] pb-[10px] border-b-[#E4E7ED]">
            <tr className="text-[18px] whitespace-nowrap text-left font-[400px] text-[#575757] tracking-[0.36px] ">
              <th className=" w-[43%] pt-[30px] px-[20px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">About This Plan</th>
              <th className="  pt-[30px] px-[20px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Premium</th>
              <th className="  pt-[30px] px-[10px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Rate</th>
              <th className="  pt-[30px] px-[10px] whitespace-nowrap w-[18%] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Cover Term</th>
              <th className="  pt-[30px] px-[10px]  pb-[10px]    ">Action</th>
            </tr>
          </thead>
          <tbody className=" text-[16px] font-normal  text-[#575757] bg-[#FAFAFA] w-full h-[355px]  ">
            <tr className="  ">
              <td className="w-[30%] pt-[20px] border-r-[1px] pr-[15px] pl-[15px]  border-r-[#E4E7ED] ">
                Credit life insurance is insurance that provides security should you be unable to repay your debt due to retrenchment, disability or death.
                <br />
                <span className="text-[#1A987B]">
                  The credit life insurance policy will pay the debt either in part or in full to the bank. It protects both you and your loved ones from the strain of having to service debt when life happens.Whether it’s a personal loan, a revolving
                  loan, a credit card or a student loan, you are likely paying for credit life insurance as part of your debt repayment.
                </span>
              </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">NGN0- NGN70,000,000 </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">0.0 - 0.5% </td>
              <td className="border-r-[1px] pl-[10px]  border-r-[#E4E7ED]">(Custom)</td>
              <td className="pl-[10px] pr-[10px]">
                <Link to="/individualgetquote">
                  <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className=" w-[90px] border-[1px] border-[#9CCD65] hover:bg-[#9CCD65] text-center h-[60px] rounded-[4px]  ">
                    GET A QUOTE
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
