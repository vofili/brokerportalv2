import { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";
import DropDown from "../ProfileDropdown/DropDown";
import Footer from "../Footer";

export default function ManageUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        // Close the modal
        setIsOpen(false);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  return (
    <>
      <SideMenu />
      <div className=" pl-[22.5rem] h-fit pb-[40px] bg-white  w-[100%]">
        {/* notification container */}
        <div className="flex w-[100%] pr-[10px]  h-[50px] pt-[40px] justify-end items-center">
          <div className=" justify-between flex items-center">
            <div className="flex w-[50px]  justify-between items-center">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.10831 12.8078C1.9311 13.9695 2.72338 14.7758 3.69342 15.1777C7.41238 16.7183 12.5877 16.7183 16.3066 15.1777C17.2767 14.7758 18.069 13.9695 17.8918 12.8078C17.7829 12.0939 17.2444 11.4994 16.8454 10.9189C16.3228 10.1493 16.2709 9.30967 16.2708 8.4165C16.2708 4.96472 13.4633 2.1665 10 2.1665C6.53682 2.1665 3.72932 4.96472 3.72932 8.4165C3.72923 9.30967 3.67731 10.1493 3.15472 10.9189C2.75574 11.4994 2.21722 12.0939 2.10831 12.8078Z"
                  stroke="#333333"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6.66663 16.3335C7.0487 17.7712 8.39621 18.8335 9.99996 18.8335C11.6037 18.8335 12.9512 17.7712 13.3333 16.3335" stroke="#333333" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div className="w-[24px] h-[24px] rounded-[30px] bg-[#50B848] flex justify-center items-center text-center ">
                <h3 className=" text-[#fff] text-[10px] ">1</h3>
              </div>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? "flex w-[150px] bg-[#D1D7E1] h-[40px] mr-[30px] rounded-[20px] pl-[13px] cursor-pointer ml-[10px] justify-between items-center" : "flex w-[170px] cursor-pointer ml-[23.5px] justify-between items-center"}
            >
              <div className="flex justify-between items-center">
                <h3 className=" opacity-[1] text-[16px] pr-[24px] font-semibold text-[#1a1a1a] ">Valentine</h3>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L11.2929 14.2929C11.6262 14.6262 11.7929 14.7929 12 14.7929C12.2071 14.7929 12.3738 14.6262 12.7071 14.2929L18 9" stroke="#808285" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Page Title */}
        <div className="mt-[10px]">
          <h3 className="text-[16px] font-medium text-[#808285] opacicty-[1] tracking-[0.26px] ">
            Dashboard /<span className="text-[20px] text-[#009677] tracking-[0.32px] "> Manage Users</span>
          </h3>
        </div>
        <div className="flex justify-between mt-[54px] items-center  w-[390px] ">
          <img className="w-[66px] h-[66px] " src={avatar} alt="avatar" />
          <div className="text-left">
            <h3 className="text-[28px] font-bold text-[#1a1a1a] tracking-[0.56px]  ">Manage Users</h3>
            <p className="text-[18px] font-normal mt-[8px] text-[#1A1A1A] ">Here is a list of all registered users</p>
          </div>
        </div>
        {/* Second line Boxes Starts Here */}
        <div className=" mt-[44px] flex justify-between w-[95%]  items-center ">
          {/* Box 1 */}
          <Link className=" text-[18px] text-[#808285] font-normal   " to="">
            <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[630px] 4xl:w-[720px]  rounded-[12px] opacity-[1] h-[118px] ">
              <div>
                <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Total No Of Users</h3>
                <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">-</h2>
              </div>

              <div className=" bg-[#A0E3FE] h-[42px] flex justify-center items-center rounded-[10px] w-[42px] ">
                <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_262_19)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.082 20.2565C28.009 21.0136 26.1331 22.0777 23.7084 22.7342C23.4137 21.1318 22.2596 19.8065 20.6449 19.3107C19.212 18.8695 17.7526 18.5554 16.2773 18.3471C17.4014 17.3977 18.1779 16.0689 18.402 14.5477C18.7443 14.5354 19.1026 14.5283 19.512 14.5283C22.1061 14.5424 24.6861 14.9395 27.1831 15.7071C28.3179 16.0565 29.082 17.0783 29.082 18.2518V20.2565ZM22.0231 25.5507C20.239 26.8124 16.8631 28.646 12.3173 28.646C10.2949 28.646 6.39315 28.2365 2.61138 25.5506V23.5389C2.61138 22.3671 3.37727 21.3436 4.51373 20.9942C7.05138 20.2177 9.67551 19.8242 12.3173 19.8242H12.4496C15.0526 19.8365 17.6343 20.2318 20.1279 20.9977C21.2608 21.3454 22.0232 22.3671 22.0232 23.5389V25.5507H22.0231ZM7.90549 13.646V11.8812C7.90549 9.44949 9.88374 7.46949 12.3173 7.46949C14.7508 7.46949 16.729 9.44949 16.729 11.8812V13.646C16.729 16.0795 14.7508 18.0577 12.3173 18.0577C9.88374 18.0577 7.90551 16.0795 7.90551 13.646H7.90549ZM19.3761 2.17536C20.5514 2.17536 21.6596 2.63596 22.4943 3.47066C23.3273 4.30536 23.7879 5.41183 23.7879 6.58713V8.35183C23.7879 10.7854 21.8096 12.7636 19.3761 12.7636C19.069 12.7636 18.7761 12.723 18.4937 12.663V11.8812C18.4937 9.43713 17.0555 7.33889 14.9908 6.3383C15.1214 4.02477 17.029 2.17536 19.3761 2.17536ZM27.702 14.0201C26.2743 13.5824 24.8184 13.2665 23.3308 13.0565C24.6773 11.9236 25.5526 10.2471 25.5526 8.35185V6.58711C25.5526 4.94064 24.9102 3.38946 23.742 2.22299C22.5737 1.05475 21.0243 0.410645 19.3761 0.410645C16.2402 0.410645 13.6708 2.77005 13.279 5.80358C12.9631 5.75241 12.6473 5.70475 12.3173 5.70475C8.91138 5.70475 6.1408 8.4771 6.1408 11.8812V13.6459C6.1408 15.5412 7.01609 17.2177 8.36432 18.3524C6.8908 18.5589 5.42432 18.8695 3.99668 19.3071C2.11374 19.886 0.84668 21.5871 0.84668 23.5389V26.4401L1.19962 26.7048C5.50021 29.9289 10.009 30.4107 12.3173 30.4107C17.6961 30.4107 21.5926 28.0883 23.4349 26.7048L23.7879 26.4401V24.5571C26.9943 23.7666 29.3449 22.2754 30.4937 21.4107L30.8467 21.146V18.2518C30.8467 16.2983 29.5814 14.5971 27.702 14.0201Z"
                      fill="#3B9FC9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_262_19">
                      <rect width="30" height="30" fill="white" transform="translate(0.84668 0.411133)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Link>
          {/* Box 2 */}
          <Link className=" text-[18px] text-[#808285] font-normal   " to="">
            <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[630px] 4xl:w-[720px]  rounded-[12px] opacity-[1] h-[118px] ">
              <div>
                <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Active Users</h3>
                <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">-</h2>
              </div>

              <div className=" bg-[#FDF09F] h-[42px] flex justify-center items-center rounded-[10px] w-[42px] ">
                <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_262_19)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.082 20.2565C28.009 21.0136 26.1331 22.0777 23.7084 22.7342C23.4137 21.1318 22.2596 19.8065 20.6449 19.3107C19.212 18.8695 17.7526 18.5554 16.2773 18.3471C17.4014 17.3977 18.1779 16.0689 18.402 14.5477C18.7443 14.5354 19.1026 14.5283 19.512 14.5283C22.1061 14.5424 24.6861 14.9395 27.1831 15.7071C28.3179 16.0565 29.082 17.0783 29.082 18.2518V20.2565ZM22.0231 25.5507C20.239 26.8124 16.8631 28.646 12.3173 28.646C10.2949 28.646 6.39315 28.2365 2.61138 25.5506V23.5389C2.61138 22.3671 3.37727 21.3436 4.51373 20.9942C7.05138 20.2177 9.67551 19.8242 12.3173 19.8242H12.4496C15.0526 19.8365 17.6343 20.2318 20.1279 20.9977C21.2608 21.3454 22.0232 22.3671 22.0232 23.5389V25.5507H22.0231ZM7.90549 13.646V11.8812C7.90549 9.44949 9.88374 7.46949 12.3173 7.46949C14.7508 7.46949 16.729 9.44949 16.729 11.8812V13.646C16.729 16.0795 14.7508 18.0577 12.3173 18.0577C9.88374 18.0577 7.90551 16.0795 7.90551 13.646H7.90549ZM19.3761 2.17536C20.5514 2.17536 21.6596 2.63596 22.4943 3.47066C23.3273 4.30536 23.7879 5.41183 23.7879 6.58713V8.35183C23.7879 10.7854 21.8096 12.7636 19.3761 12.7636C19.069 12.7636 18.7761 12.723 18.4937 12.663V11.8812C18.4937 9.43713 17.0555 7.33889 14.9908 6.3383C15.1214 4.02477 17.029 2.17536 19.3761 2.17536ZM27.702 14.0201C26.2743 13.5824 24.8184 13.2665 23.3308 13.0565C24.6773 11.9236 25.5526 10.2471 25.5526 8.35185V6.58711C25.5526 4.94064 24.9102 3.38946 23.742 2.22299C22.5737 1.05475 21.0243 0.410645 19.3761 0.410645C16.2402 0.410645 13.6708 2.77005 13.279 5.80358C12.9631 5.75241 12.6473 5.70475 12.3173 5.70475C8.91138 5.70475 6.1408 8.4771 6.1408 11.8812V13.6459C6.1408 15.5412 7.01609 17.2177 8.36432 18.3524C6.8908 18.5589 5.42432 18.8695 3.99668 19.3071C2.11374 19.886 0.84668 21.5871 0.84668 23.5389V26.4401L1.19962 26.7048C5.50021 29.9289 10.009 30.4107 12.3173 30.4107C17.6961 30.4107 21.5926 28.0883 23.4349 26.7048L23.7879 26.4401V24.5571C26.9943 23.7666 29.3449 22.2754 30.4937 21.4107L30.8467 21.146V18.2518C30.8467 16.2983 29.5814 14.5971 27.702 14.0201Z"
                      fill="#D0BB4A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_262_19">
                      <rect width="30" height="30" fill="white" transform="translate(0.84668 0.411133)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Link>
        </div>
        {/* Third line */}
        <div className="  mt-[44px]   flex justify-between  lg:w-[95%]  items-center ">
          {/* Box 3 */}
          <Link className=" text-[18px] text-[#808285] font-normal   " to="">
            <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[630px] 4xl:w-[720px]  rounded-[12px] opacity-[1] h-[118px] ">
              <div>
                <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Inactive Users</h3>
                <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">-</h2>
              </div>

              <div className=" bg-[#FEBD9E] h-[42px] flex justify-center items-center rounded-[10px] w-[42px] ">
                <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_262_19)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.082 20.2565C28.009 21.0136 26.1331 22.0777 23.7084 22.7342C23.4137 21.1318 22.2596 19.8065 20.6449 19.3107C19.212 18.8695 17.7526 18.5554 16.2773 18.3471C17.4014 17.3977 18.1779 16.0689 18.402 14.5477C18.7443 14.5354 19.1026 14.5283 19.512 14.5283C22.1061 14.5424 24.6861 14.9395 27.1831 15.7071C28.3179 16.0565 29.082 17.0783 29.082 18.2518V20.2565ZM22.0231 25.5507C20.239 26.8124 16.8631 28.646 12.3173 28.646C10.2949 28.646 6.39315 28.2365 2.61138 25.5506V23.5389C2.61138 22.3671 3.37727 21.3436 4.51373 20.9942C7.05138 20.2177 9.67551 19.8242 12.3173 19.8242H12.4496C15.0526 19.8365 17.6343 20.2318 20.1279 20.9977C21.2608 21.3454 22.0232 22.3671 22.0232 23.5389V25.5507H22.0231ZM7.90549 13.646V11.8812C7.90549 9.44949 9.88374 7.46949 12.3173 7.46949C14.7508 7.46949 16.729 9.44949 16.729 11.8812V13.646C16.729 16.0795 14.7508 18.0577 12.3173 18.0577C9.88374 18.0577 7.90551 16.0795 7.90551 13.646H7.90549ZM19.3761 2.17536C20.5514 2.17536 21.6596 2.63596 22.4943 3.47066C23.3273 4.30536 23.7879 5.41183 23.7879 6.58713V8.35183C23.7879 10.7854 21.8096 12.7636 19.3761 12.7636C19.069 12.7636 18.7761 12.723 18.4937 12.663V11.8812C18.4937 9.43713 17.0555 7.33889 14.9908 6.3383C15.1214 4.02477 17.029 2.17536 19.3761 2.17536ZM27.702 14.0201C26.2743 13.5824 24.8184 13.2665 23.3308 13.0565C24.6773 11.9236 25.5526 10.2471 25.5526 8.35185V6.58711C25.5526 4.94064 24.9102 3.38946 23.742 2.22299C22.5737 1.05475 21.0243 0.410645 19.3761 0.410645C16.2402 0.410645 13.6708 2.77005 13.279 5.80358C12.9631 5.75241 12.6473 5.70475 12.3173 5.70475C8.91138 5.70475 6.1408 8.4771 6.1408 11.8812V13.6459C6.1408 15.5412 7.01609 17.2177 8.36432 18.3524C6.8908 18.5589 5.42432 18.8695 3.99668 19.3071C2.11374 19.886 0.84668 21.5871 0.84668 23.5389V26.4401L1.19962 26.7048C5.50021 29.9289 10.009 30.4107 12.3173 30.4107C17.6961 30.4107 21.5926 28.0883 23.4349 26.7048L23.7879 26.4401V24.5571C26.9943 23.7666 29.3449 22.2754 30.4937 21.4107L30.8467 21.146V18.2518C30.8467 16.2983 29.5814 14.5971 27.702 14.0201Z"
                      fill="#E4A68D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_262_19">
                      <rect width="30" height="30" fill="white" transform="translate(0.84668 0.411133)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Link>
          {/* Box 4 */}
          <Link className=" text-[18px] text-[#808285] font-normal   " to="">
            <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[630px] 4xl:w-[720px]  rounded-[12px] opacity-[1] h-[118px] ">
              <div>
                <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Disabled Users</h3>
                <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">-</h2>
              </div>

              <div className=" bg-[#F39FFE] h-[42px] flex justify-center items-center rounded-[10px] w-[42px] ">
                <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_262_19)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.082 20.2565C28.009 21.0136 26.1331 22.0777 23.7084 22.7342C23.4137 21.1318 22.2596 19.8065 20.6449 19.3107C19.212 18.8695 17.7526 18.5554 16.2773 18.3471C17.4014 17.3977 18.1779 16.0689 18.402 14.5477C18.7443 14.5354 19.1026 14.5283 19.512 14.5283C22.1061 14.5424 24.6861 14.9395 27.1831 15.7071C28.3179 16.0565 29.082 17.0783 29.082 18.2518V20.2565ZM22.0231 25.5507C20.239 26.8124 16.8631 28.646 12.3173 28.646C10.2949 28.646 6.39315 28.2365 2.61138 25.5506V23.5389C2.61138 22.3671 3.37727 21.3436 4.51373 20.9942C7.05138 20.2177 9.67551 19.8242 12.3173 19.8242H12.4496C15.0526 19.8365 17.6343 20.2318 20.1279 20.9977C21.2608 21.3454 22.0232 22.3671 22.0232 23.5389V25.5507H22.0231ZM7.90549 13.646V11.8812C7.90549 9.44949 9.88374 7.46949 12.3173 7.46949C14.7508 7.46949 16.729 9.44949 16.729 11.8812V13.646C16.729 16.0795 14.7508 18.0577 12.3173 18.0577C9.88374 18.0577 7.90551 16.0795 7.90551 13.646H7.90549ZM19.3761 2.17536C20.5514 2.17536 21.6596 2.63596 22.4943 3.47066C23.3273 4.30536 23.7879 5.41183 23.7879 6.58713V8.35183C23.7879 10.7854 21.8096 12.7636 19.3761 12.7636C19.069 12.7636 18.7761 12.723 18.4937 12.663V11.8812C18.4937 9.43713 17.0555 7.33889 14.9908 6.3383C15.1214 4.02477 17.029 2.17536 19.3761 2.17536ZM27.702 14.0201C26.2743 13.5824 24.8184 13.2665 23.3308 13.0565C24.6773 11.9236 25.5526 10.2471 25.5526 8.35185V6.58711C25.5526 4.94064 24.9102 3.38946 23.742 2.22299C22.5737 1.05475 21.0243 0.410645 19.3761 0.410645C16.2402 0.410645 13.6708 2.77005 13.279 5.80358C12.9631 5.75241 12.6473 5.70475 12.3173 5.70475C8.91138 5.70475 6.1408 8.4771 6.1408 11.8812V13.6459C6.1408 15.5412 7.01609 17.2177 8.36432 18.3524C6.8908 18.5589 5.42432 18.8695 3.99668 19.3071C2.11374 19.886 0.84668 21.5871 0.84668 23.5389V26.4401L1.19962 26.7048C5.50021 29.9289 10.009 30.4107 12.3173 30.4107C17.6961 30.4107 21.5926 28.0883 23.4349 26.7048L23.7879 26.4401V24.5571C26.9943 23.7666 29.3449 22.2754 30.4937 21.4107L30.8467 21.146V18.2518C30.8467 16.2983 29.5814 14.5971 27.702 14.0201Z"
                      fill="#E884EA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_262_19">
                      <rect width="30" height="30" fill="white" transform="translate(0.84668 0.411133)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className=" mt-[40px] w-[95%] flex justify-end items-end">
          <div className="border-[0.5px] w-[300px] text-[14px] flex items-center justify-between px-[15px] text-[#808285] h-[50px] rounded-[6px] border-[#9C9898]">
            <input className=" w-[93%] outline-none rounded h-full" type="text" placeholder="Search for Users" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="mt-[40px] w-[95%] font-medium px-[25px] text-[#5E5E5E] text-[14px] rounded h-[60px] bg-[#eeee] flex justify-between items-center">
          <h3>#</h3>
          <h3>Username</h3>
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Email</h3>
          <h3>User Role</h3>
          <h3>Access</h3>
          <h3>Action</h3>
        </div>
        {/* Footer */}
        <Footer />
      </div>
      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
      {/* Modal 1 */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} className=" top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-[100vh]  ">
          <div className="w-[600px] h-[350px] rounded-[8px] p-[27px] flex justify-center items-center bg-white opacity-[1]  ">
            <div className="  w-[600px] flex-col flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="#9DE0F6" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M30 35V17.5M30 38.75V42.5" stroke="#3EC3EE" strokeWidth="3" strokeLinejoin="round" />
                </g>
              </svg>

              <h3 className=" tracking-[0.14px] mt-[25px] font-semibold text-[40px] text-[#1A1A1A] ">Profile Update</h3>

              <div onClick={() => setModalOpen(false)} className="mb-[20px] cursor-pointer ">
                <button className="w-[80px]   h-[50px] flex justify-center items-center text-[#fff] text-[16px] tracking-[0.26px] font-[600] mt-[44px] bg-[#2778C3] opacity-[1] rounded-[4px] ">OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
