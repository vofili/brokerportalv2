import React, { useState } from "react";
import { Link } from "react-router-dom";

function ComparePlan() {
  const [privateComprehensive, setPrivateComprehensive] = useState(false);
  const [commercialComprehensive, setCommercialComprehensive] = useState(false);
  const [commercialThirdParty, setCommercialThirdParty] = useState(false);
  const [thirdPartyPrivate, setThirdPartyPrivate] = useState(false);

  return (
    <>
      <div className="w-[100%] h-[450px]  rounded-[8px] mt-[30px] bg-[#Fff] ">
        <div className="  items-center  font-normal text-[#1A1A1AB8]  text-[16px]  ">
          <form className="justify-between leading-[3rem] w-[98%] flex-wrap whitespace-nowrap flex items-center ">
            <h3 className="text-[#282828]  font-bold ">Showing results:</h3>
            <label htmlFor="Private(Comprehensive)">
              <input onClick={() => setPrivateComprehensive(!privateComprehensive)} type="checkbox" /> Private(Comprehensive)
            </label>
            <label htmlFor="Commercial(Comprehensive)">
              <input onClick={() => setCommercialComprehensive(!commercialComprehensive)} type="checkbox" /> Commercial(Comprehensive)
            </label>
            <label htmlFor="Commercial(3rd Party)">
              <input onClick={() => setCommercialThirdParty(!commercialThirdParty)} type="checkbox" /> Commercial(3rd Party)
            </label>
            <label htmlFor="Private(3rd Party)">
              <input onClick={() => setThirdPartyPrivate(!thirdPartyPrivate)} type="checkbox" /> Private(3rd Party)
            </label>
          </form>
        </div>

        <div className=" w-[100%] mt-[40px] overflow-x-scroll flex  items-center ">
          <table className="border-[1px]  rounded-[8px] border-[#E4E7ED] justify-between items-center   h-fit ">
            <thead className="bg-[#F1F2F2]">
              <tr className="text-[18px] text-left w-[700px] font-[400px] text-[#575757] tracking-[0.36px] ">
                <th className=" whitespace-nowrap  pt-[30px] pl-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Plan Offers</th>
              </tr>
            </thead>
            <tbody className="tracking-[0.26px] font-medium text-[#282828] text-[16px] text-left  ">
              <tr className="border-b-[1px] h-[60px] whitespace-nowrap   border-b-[#E4E7ED]">
                <td className="pl-[15px] pr-[10px] ">N1 million 3rd party property damage</td>
              </tr>
              <tr className="border-b-[1px] h-[60px] whitespace-nowrap   border-b-[#E4E7ED]">
                <td className="pl-[15px] pr-[10px] ">N5 million 3rd party property damage</td>
              </tr>
              <tr className="border-b-[1px] h-[60px] whitespace-nowrap   border-b-[#E4E7ED]">
                <td className="pl-[15px] pr-[10px] ">N1 million 3rd party property damage</td>
              </tr>
              <tr className="border-b-[1px] h-[60px] whitespace-nowrap   border-b-[#E4E7ED]">
                <td className="pl-[15px] pr-[10px] ">N10 million 3rd party property damage</td>
              </tr>
              <tr className="border-b-[1px] h-[60px] whitespace-nowrap   border-b-[#E4E7ED]">
                <td className="pl-[15px] pr-[10px] ">N1 million 3rd party property damage</td>
              </tr>
              <tr className="border-b-[1px] h-[60px] w-[100%]  border-b-[#E4E7ED]">{/* <td className="pl-[15px]">N1 million 3rd party property damage</td> */}</tr>
            </tbody>
          </table>
          {privateComprehensive && (
            <table className="border-[1px]  rounded-[8px] border-[#E4E7ED] justify-between items-center  h-fit ">
              <thead className="bg-[#F1F2F2]">
                <tr className="text-[18px] text-center font-[400]  text-[#575757] tracking-[0.36px] ">
                  <th className="  pt-[30px] px-[15px]  border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Private(Comprehensive)</th>
                </tr>
              </thead>
              <tbody className="tracking-[0.26px] font-medium text-[#282828] text-[16px] text-center   ">
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]   ">
                    <svg className="  " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#960000" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#960000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    <Link to="/motorinsuranceprivate">
                      <button className=" w-[100px]  bg-[#0CE454] text-[#fff] text-center h-[40px] rounded-[4px]  ">Get Quote</button>{" "}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {commercialComprehensive && (
            <table className="border-[1px]  rounded-[8px] border-[#E4E7ED] justify-between items-center  h-fit ">
              <thead className="bg-[#F1F2F2]">
                <tr className="text-[18px] text-left font-[400px]  text-[#575757] tracking-[0.36px] ">
                  <th className=" whitespace-nowrap pt-[30px] px-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Commercial(Comprehensive)</th>
                </tr>
              </thead>
              <tbody className="tracking-[0.26px] font-medium text-[#282828] text-[16px] text-center   ">
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]  ">
                    <svg className="  " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#960000" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#960000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    <Link to="/motorinsuranceprivate">
                      <button className=" w-[100px]  bg-[#0CE454] text-[#fff] text-center h-[40px] rounded-[4px]  ">Get Quote</button>{" "}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {commercialThirdParty && (
            <table className="border-[1px]  rounded-[8px] border-[#E4E7ED] justify-between items-center  h-fit ">
              <thead className="bg-[#F1F2F2]">
                <tr className="text-[18px] text-left font-[400px]  text-[#575757] tracking-[0.36px] ">
                  <th className=" whitespace-nowrap pt-[30px] px-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Commercial(3rd Party)</th>
                </tr>
              </thead>
              <tbody className="tracking-[0.26px] font-medium text-[#282828] text-[16px] text-center   ">
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]  ">
                    <svg className="  " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#960000" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#960000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    <Link to="/motorinsuranceprivate">
                      <button className=" w-[100px]  bg-[#0CE454] text-[#fff] text-center h-[40px] rounded-[4px]  ">Get Quote</button>{" "}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {thirdPartyPrivate && (
            <table className="border-[1px]  rounded-[8px] border-[#E4E7ED] justify-between items-center  h-fit ">
              <thead className="bg-[#F1F2F2]">
                <tr className="text-[18px] text-left font-[400px]  text-[#575757] tracking-[0.36px] ">
                  <th className=" whitespace-nowrap pt-[30px] px-[15px] border-r-[1px] pb-[10px] border-r-[#E4E7ED]   ">Private(3rd Party)</th>
                </tr>
              </thead>
              <tbody className="tracking-[0.26px] font-medium text-[#282828] text-[16px] text-center   ">
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]  ">
                    <svg className="  " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#960000" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#960000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    {" "}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="#1A987B" strokeWidth="1.5" />
                      <path d="M8 12.5L10.5 15L16 9" stroke="#1A987B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b-[1px] flex justify-center items-center h-[60px]  border-b-[#E4E7ED]">
                  <td className="pl-[15px]">
                    <Link to="/motorinsuranceprivate">
                      <button className=" w-[100px]  bg-[#0CE454] text-[#fff] text-center h-[40px] rounded-[4px]  ">Get Quote</button>{" "}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default ComparePlan;
