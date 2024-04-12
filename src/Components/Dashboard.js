import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { Link, NavLink } from "react-router-dom";
import FirstIcon from "./QuickQuoteModal/FirstIcon";
import SecondIcon from "./QuickQuoteModal/SecondIcon";
import DropDown from "./ProfileDropdown/DropDown";
import Modal1 from "./WelcomeModals/Modal1";
import Modal2 from "./WelcomeModals/Modal2";
import Modal3 from "./WelcomeModals/Modal3";
import ThirdIcon from "./QuickQuoteModal/ThirdIcon";
import FourthIcon from "./QuickQuoteModal/FourthIcon";
import FifthIcon from "./QuickQuoteModal/FifthIcon";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [lifeInsurance, setLifeInsurance] = useState(true);
  const [generalInsurance, setGeneralInsurance] = useState(false);
  const [quickquotes, setQuickQuotes] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [firstIcon, setFirstIcon] = useState(true);
  const [secondIcon, setSecondIcon] = useState(false);
  const [thirdIcon, setThirdIcon] = useState(false);
  const [fourthIcon, setFourthIcon] = useState(false);
  const [fifthIcon, setFifthIcon] = useState(false);

  // const [selectedOption, setSelectedOption] = useState(null);
  const motorInsurance = () => {
    setFirstIcon(true);
    setSecondIcon(false);
    setThirdIcon(false);
    setFourthIcon(false);
    setFifthIcon(false);
  };
  const marineInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(true);
    setThirdIcon(false);
    setFourthIcon(false);
    setFifthIcon(false);
  };
  const fireInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(false);
    setThirdIcon(true);
    setFourthIcon(false);
    setFifthIcon(false);
  };
  const creditLifeInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(false);
    setThirdIcon(false);
    setFourthIcon(true);
    setFifthIcon(false);
  };
  const groupLifeInsurance = () => {
    setFirstIcon(false);
    setSecondIcon(false);
    setThirdIcon(false);
    setFourthIcon(false);
    setFifthIcon(true);
  };
  const time = new Date().getFullYear();

  // For The Welcome Modal
  useEffect(() => {
    setModalOpen(true);
    setModalOpen2(false);
    setModalOpen3(false);
  }, []);
  const handleQuickQuotes = () => {
    setQuickQuotes(false);
  };
  const handleOpenModal = () => {
    setModalOpen(true);
    setModalOpen2(false);
  };
  const handleOpenModal2 = () => {
    setModalOpen(false);
    setModalOpen2(false);
    setModalOpen3(true);
  };
  const handleCloseModal1 = () => {
    setModalOpen(false);
    setModalOpen2(true);
    setModalOpen3(false);
  };
  const handleLifeInsurance = () => {
    setLifeInsurance(true);
    setGeneralInsurance(false);
  };

  const handleGeneralInsurance = () => {
    setGeneralInsurance(true);
    setLifeInsurance(false);
  };
  const lifeClaims = [
    {
      path: "/grouplifeclaim",
      name: "Group Life ",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.5617 24.0718C33.0734 25.7768 34.8334 28.0868 34.8334 31.1668V36.6668H42.1667V31.1668C42.1667 27.1702 35.6217 24.8052 30.5617 24.0718ZM27.5 22.0002C31.5517 22.0002 34.8334 18.7185 34.8334 14.6668C34.8334 10.6152 31.5517 7.3335 27.5 7.3335C26.6384 7.3335 25.8317 7.51683 25.0617 7.7735C26.6393 9.72456 27.5 12.1577 27.5 14.6668C27.5 17.1759 26.6393 19.6091 25.0617 21.5602C25.8317 21.8168 26.6384 22.0002 27.5 22.0002ZM16.5 22.0002C20.5517 22.0002 23.8334 18.7185 23.8334 14.6668C23.8334 10.6152 20.5517 7.3335 16.5 7.3335C12.4484 7.3335 9.16671 10.6152 9.16671 14.6668C9.16671 18.7185 12.4484 22.0002 16.5 22.0002ZM16.5 11.0002C18.5167 11.0002 20.1667 12.6502 20.1667 14.6668C20.1667 16.6835 18.5167 18.3335 16.5 18.3335C14.4834 18.3335 12.8334 16.6835 12.8334 14.6668C12.8334 12.6502 14.4834 11.0002 16.5 11.0002ZM16.5 23.8335C11.605 23.8335 1.83337 26.2902 1.83337 31.1668V36.6668H31.1667V31.1668C31.1667 26.2902 21.395 23.8335 16.5 23.8335ZM27.5 33.0002H5.50004V31.1852C5.86671 29.8652 11.55 27.5002 16.5 27.5002C21.45 27.5002 27.1334 29.8652 27.5 31.1668V33.0002Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      path: "/creditlifeclaim",
      name: "Credit Life",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.125 6.81938H28.9101V4.18213C28.9101 1.90719 27.06 0.0571289 24.7851 0.0571289H19.3009C17.0259 0.0571289 15.1759 1.90719 15.1759 4.18213V6.81938H6.875C5.35631 6.81938 4.125 8.05069 4.125 9.56938V41.193C4.125 42.7117 5.35631 43.943 6.875 43.943H37.125C38.6437 43.943 39.875 42.7117 39.875 41.193V9.56938C39.875 8.05069 38.6437 6.81938 37.125 6.81938ZM17.9259 4.18213C17.9259 3.42313 18.5419 2.80713 19.3009 2.80713H24.7851C25.5441 2.80713 26.1601 3.42313 26.1601 4.18213V6.81938H17.9259V4.18213ZM37.125 41.193H6.87504V9.56938H15.1759V12.3984C15.1759 12.3984 15.1395 13.772 16.5427 13.772C18.0896 13.772 17.926 12.3984 17.926 12.3984V9.56938H26.1601V12.3984C26.1601 12.3984 26.0687 13.7789 27.5296 13.7789C28.9046 13.7789 28.9101 12.3984 28.9101 12.3984V9.56938H37.1251L37.125 41.193Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];
  const generalClaims = [
    {
      path: "/grouplifeclaim",
      name: "Group Life ",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.5617 24.0718C33.0734 25.7768 34.8334 28.0868 34.8334 31.1668V36.6668H42.1667V31.1668C42.1667 27.1702 35.6217 24.8052 30.5617 24.0718ZM27.5 22.0002C31.5517 22.0002 34.8334 18.7185 34.8334 14.6668C34.8334 10.6152 31.5517 7.3335 27.5 7.3335C26.6384 7.3335 25.8317 7.51683 25.0617 7.7735C26.6393 9.72456 27.5 12.1577 27.5 14.6668C27.5 17.1759 26.6393 19.6091 25.0617 21.5602C25.8317 21.8168 26.6384 22.0002 27.5 22.0002ZM16.5 22.0002C20.5517 22.0002 23.8334 18.7185 23.8334 14.6668C23.8334 10.6152 20.5517 7.3335 16.5 7.3335C12.4484 7.3335 9.16671 10.6152 9.16671 14.6668C9.16671 18.7185 12.4484 22.0002 16.5 22.0002ZM16.5 11.0002C18.5167 11.0002 20.1667 12.6502 20.1667 14.6668C20.1667 16.6835 18.5167 18.3335 16.5 18.3335C14.4834 18.3335 12.8334 16.6835 12.8334 14.6668C12.8334 12.6502 14.4834 11.0002 16.5 11.0002ZM16.5 23.8335C11.605 23.8335 1.83337 26.2902 1.83337 31.1668V36.6668H31.1667V31.1668C31.1667 26.2902 21.395 23.8335 16.5 23.8335ZM27.5 33.0002H5.50004V31.1852C5.86671 29.8652 11.55 27.5002 16.5 27.5002C21.45 27.5002 27.1334 29.8652 27.5 31.1668V33.0002Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      path: "/fireandspecialperil",
      name: "Fire and Perils",
      icon: (
        <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.832 16.969C24.56 16.322 24.25 15.589 23.949 14.684C23.159 12.315 25.683 9.731 25.707 9.707L24.293 8.293C24.153 8.433 20.87 11.771 22.051 15.316C22.377 16.294 22.703 17.066 22.989 17.746C23.6564 19.0646 24.0028 20.5222 24 22C23.8828 23.1912 23.4255 24.3235 22.6826 25.262C21.9396 26.2005 20.9425 26.9055 19.81 27.293C20.1678 25.8907 20.1624 24.4203 19.7945 23.0207C19.4266 21.621 18.7081 20.3381 17.707 19.293L16.663 18.249L16.081 19.606C14.245 23.89 12.06 25.76 10.775 26.54C9.98615 26.0569 9.32326 25.3934 8.84083 24.6041C8.3584 23.8149 8.07022 22.9224 8 22C8.06898 20.7412 8.38463 19.5081 8.929 18.371C9.5746 17.0002 9.93878 15.5139 10 14V12.222C10.874 12.582 12 13.525 12 16V18.603L13.743 16.669C16.855 13.215 16.206 9.102 14.949 6.361C15.9045 6.6795 16.725 7.31027 17.2784 8.15176C17.8319 8.99325 18.086 9.99651 18 11H20C20 5.463 15.421 4 13 4H11L12.2 5.599C12.337 5.784 15.062 9.526 13.553 13.287C13.2172 12.3419 12.6018 11.5213 11.7886 10.9342C10.9754 10.3471 10.0028 10.0213 9 10H8V14C7.93102 15.2588 7.61537 16.4919 7.071 17.629C6.4254 18.9998 6.06122 20.4861 6 22C6 25.848 9.823 30 16 30C22.177 30 26 25.848 26 22C26.0015 20.2556 25.6019 18.5343 24.832 16.969ZM12.835 27.526C14.6797 25.999 16.1698 24.0888 17.202 21.928C17.7531 22.8178 18.0661 23.8343 18.1111 24.8799C18.1561 25.9255 17.9316 26.9652 17.459 27.899C16.9754 27.9641 16.488 27.9978 16 28C14.9268 28.0074 13.859 27.8475 12.835 27.526Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      path: "/marineinsurance",
      name: "Marine",
      icon: (
        <svg width="44" height="44" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 11.1249C0.99985 11.9419 1.25789 12.738 1.73727 13.3995C2.21664 14.061 2.89282 14.5541 3.66921 14.8083C4.44559 15.0625 5.28245 15.0648 6.06024 14.8149C6.83802 14.5651 7.51694 14.0758 8 13.4169C8.48306 14.0758 9.16197 14.5651 9.93976 14.8149C10.7175 15.0648 11.5544 15.0625 12.3308 14.8083C13.1072 14.5541 13.7834 14.061 14.2627 13.3995C14.7421 12.738 15.0002 11.9419 15 11.1249V7.00194L13.72 8.28194L12.23 9.76994C12.0893 9.91064 12.0103 10.1015 12.0103 10.3004C12.0103 10.4994 12.0893 10.6902 12.23 10.8309C12.3707 10.9716 12.5615 11.0507 12.7605 11.0507C12.9595 11.0507 13.1503 10.9716 13.291 10.8309L13.499 10.6229V11.1249C13.499 11.4368 13.4376 11.7457 13.3182 12.0338C13.1989 12.322 13.0239 12.5838 12.8034 12.8043C12.5828 13.0249 12.321 13.1998 12.0329 13.3192C11.7447 13.4385 11.4359 13.4999 11.124 13.4999C10.8121 13.4999 10.5033 13.4385 10.2151 13.3192C9.92698 13.1998 9.66516 13.0249 9.44462 12.8043C9.22408 12.5838 9.04914 12.322 8.92979 12.0338C8.81043 11.7457 8.749 11.4368 8.749 11.1249V5.88494C9.31906 5.70575 9.80612 5.32837 10.122 4.82112C10.4379 4.31388 10.5617 3.7103 10.4711 3.11966C10.3804 2.52901 10.0813 1.99034 9.62783 1.60117C9.17437 1.212 8.59656 0.998047 7.999 0.998047C7.40144 0.998047 6.82363 1.212 6.37017 1.60117C5.91672 1.99034 5.61759 2.52901 5.52694 3.11966C5.4363 3.7103 5.56012 4.31388 5.876 4.82112C6.19188 5.32837 6.67894 5.70575 7.249 5.88494V11.1249C7.249 11.7548 6.99878 12.3589 6.55338 12.8043C6.10798 13.2497 5.50389 13.4999 4.874 13.4999C4.24411 13.4999 3.64002 13.2497 3.19462 12.8043C2.74922 12.3589 2.499 11.7548 2.499 11.1249V10.6229L2.707 10.8309C2.77566 10.9046 2.85846 10.9637 2.95046 11.0047C3.04246 11.0457 3.14177 11.0678 3.24248 11.0695C3.34318 11.0713 3.44321 11.0528 3.5366 11.0151C3.62999 10.9773 3.71482 10.9212 3.78604 10.85C3.85726 10.7788 3.9134 10.6939 3.95112 10.6005C3.98884 10.5072 4.00737 10.4071 4.00559 10.3064C4.00381 10.2057 3.98177 10.1064 3.94078 10.0144C3.89979 9.9224 3.84069 9.8396 3.767 9.77094L2.28 8.28094L1 7.00194V11.1249ZM9 3.49994C9 3.23473 8.89464 2.98037 8.70711 2.79284C8.51957 2.6053 8.26522 2.49994 8 2.49994C7.73478 2.49994 7.48043 2.6053 7.29289 2.79284C7.10536 2.98037 7 3.23473 7 3.49994C7 3.76516 7.10536 4.01951 7.29289 4.20705C7.48043 4.39459 7.73478 4.49994 8 4.49994C8.26522 4.49994 8.51957 4.39459 8.70711 4.20705C8.89464 4.01951 9 3.76516 9 3.49994Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      path: "/motorinsurance",
      name: "Motor ",
      icon: (
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_712_7579)">
            <path
              d="M22.7206 6.54346C10.5898 6.54346 0.720947 16.4129 0.720947 28.5437C0.720947 30.232 0.913447 31.9153 1.29389 33.5477C1.33763 33.735 1.38782 33.9088 1.44385 34.0697C2.10678 36.1899 4.10345 37.6633 6.33069 37.6633H39.1042C41.1756 37.6633 43.0441 36.3927 43.8307 34.5112C43.9259 34.3239 44.0052 34.116 44.0657 33.8842C44.0889 33.796 44.1249 33.6487 44.1789 33.4092C44.5381 31.8212 44.7209 30.1831 44.7209 28.5436C44.7209 16.413 34.8515 6.54346 22.7206 6.54346ZM41.6068 32.8293C41.5187 33.2201 41.4903 33.314 41.4839 33.314L41.4896 33.2349C41.182 34.2962 40.2094 35.0268 39.1042 35.0268H6.33069C5.22803 35.0268 4.25796 34.3002 3.94773 33.2419L3.96578 33.3636C3.96191 33.3636 3.93742 33.2754 3.86145 32.9497C3.53188 31.5343 3.35742 30.0596 3.35742 28.5437C3.35742 17.849 12.0265 9.17993 22.7206 9.17993C33.4147 9.17993 42.0844 17.849 42.0844 28.5437C42.0845 30.0165 41.919 31.4506 41.6068 32.8293Z"
              fill="currentColor"
            />
            <path
              d="M23.7153 25.6446C23.4031 25.5377 23.069 25.4766 22.7208 25.4766C21.0272 25.4766 19.6543 26.8495 19.6543 28.5437C19.6543 30.2372 21.0272 31.6101 22.7208 31.6101C24.2708 31.6101 25.5492 30.4592 25.7551 28.9659C25.7744 28.8268 25.7872 28.6872 25.7872 28.5437C25.7872 27.1984 24.9202 26.0578 23.7153 25.6446Z"
              fill="currentColor"
            />
            <path
              d="M35.0714 16.8427C34.8018 16.5512 34.3145 16.5447 33.9322 16.8272L23.3108 24.6479C23.5425 24.6833 23.773 24.7381 23.9995 24.8159C25.3717 25.2871 26.3547 26.4644 26.6013 27.8566L35.0051 17.9813C35.3148 17.6184 35.3431 17.1311 35.0714 16.8427Z"
              fill="currentColor"
            />
            <path
              d="M29.9742 15.8221C30.4506 16.0984 31.0594 15.9341 31.335 15.4579C31.6105 14.9808 31.4469 14.372 30.9707 14.0958C30.4943 13.8217 29.8841 13.9851 29.6086 14.4608C29.3343 14.9384 29.4966 15.5479 29.9742 15.8221Z"
              fill="currentColor"
            />
            <path
              d="M22.9993 13.9539C23.5503 13.9539 23.9957 13.5065 23.9957 12.9575C23.9957 12.4065 23.5503 11.9604 22.9993 11.9604C22.4496 11.9604 22.0029 12.4065 22.0029 12.9575C22.0029 13.5065 22.4496 13.9539 22.9993 13.9539Z"
              fill="currentColor"
            />
            <path
              d="M7.26723 27.6807C6.68921 27.6807 6.21802 28.1506 6.21802 28.7299C6.21802 29.3092 6.68913 29.7778 7.26723 29.7778C7.84653 29.7778 8.31515 29.3092 8.31515 28.7299C8.31515 28.1506 7.84653 27.6807 7.26723 27.6807Z"
              fill="currentColor"
            />
            <path
              d="M10.5558 19.5657C10.0795 19.2902 9.46928 19.4549 9.19376 19.9313C8.91962 20.4075 9.08307 21.0165 9.55805 21.2926C10.0357 21.5681 10.6458 21.404 10.9214 20.9276C11.1956 20.4513 11.0321 19.8412 10.5558 19.5657Z"
              fill="currentColor"
            />
            <path
              d="M15.0292 14.0959C14.5516 14.372 14.3894 14.9809 14.6649 15.4579C14.9392 15.9342 15.5493 16.0984 16.0257 15.8222C16.502 15.5481 16.6655 14.9371 16.3912 14.4609C16.1158 13.9851 15.5056 13.8217 15.0292 14.0959Z"
              fill="currentColor"
            />
            <path d="M35.443 19.5657C34.9667 19.8412 34.8032 20.4514 35.0787 20.9277C35.3542 21.4053 35.9632 21.5682 36.4407 21.2927C36.917 21.0166 37.0805 20.4076 36.805 19.9313C36.5308 19.4549 35.9205 19.2902 35.443 19.5657Z" fill="currentColor" />
            <path d="M37.9444 28.8978C38.4954 28.8978 38.9408 28.4523 38.9408 27.902C38.9408 27.351 38.4954 26.9043 37.9444 26.9043C37.3934 26.9043 36.948 27.351 36.948 27.902C36.948 28.4523 37.3934 28.8978 37.9444 28.8978Z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_712_7579">
              <rect width="44" height="44" fill="white" transform="translate(0.720947 0.103516)" />
            </clipPath>
          </defs>
        </svg>
      ),
    },

    {
      path: "/creditlifeclaim",
      name: "Credit Life",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M37.125 6.81938H28.9101V4.18213C28.9101 1.90719 27.06 0.0571289 24.7851 0.0571289H19.3009C17.0259 0.0571289 15.1759 1.90719 15.1759 4.18213V6.81938H6.875C5.35631 6.81938 4.125 8.05069 4.125 9.56938V41.193C4.125 42.7117 5.35631 43.943 6.875 43.943H37.125C38.6437 43.943 39.875 42.7117 39.875 41.193V9.56938C39.875 8.05069 38.6437 6.81938 37.125 6.81938ZM17.9259 4.18213C17.9259 3.42313 18.5419 2.80713 19.3009 2.80713H24.7851C25.5441 2.80713 26.1601 3.42313 26.1601 4.18213V6.81938H17.9259V4.18213ZM37.125 41.193H6.87504V9.56938H15.1759V12.3984C15.1759 12.3984 15.1395 13.772 16.5427 13.772C18.0896 13.772 17.926 12.3984 17.926 12.3984V9.56938H26.1601V12.3984C26.1601 12.3984 26.0687 13.7789 27.5296 13.7789C28.9046 13.7789 28.9101 12.3984 28.9101 12.3984V9.56938H37.1251L37.125 41.193Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];
  // handle dropdown scroll
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
      {/* LARGE SCREENS */}
      <div className=" mobile:hidden lg:block w-full bg-white ">
        <SideMenu />
        <div className="3xl:pl-[30rem] lg:pl-[23rem] h-fit pb-[50px] bg-white 3xl:max-w-[85%]  w-[100%]">
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
          {/* Green container */}
          <div className="bg-[#009677] flex justify-between items-center p-[40px] h-[210px] w-[98%] mt-[30px] rounded-[24px] ">
            <div>
              <h2 className="text-[32px] opacity-[1] font-medium text-[#fff] tracking-[0.51px] text-left ">Good Day, Valentine</h2>
              <p className=" text-[16px] w-[95%] mt-[16px] opacity-[1] font-normal text-[#fff] tracking-[0.26px] text-left">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
            </div>
            <button onClick={() => setQuickQuotes(true)}>
              <div className="w-[210px] flex justify-center items-center opacity-[1] h-[52px] rounded-[8px] bg-[#50B848] ">
                <p className=" text-[18px] opacity-[1] text-center font-normal text-[#fff] tracking-[0.51px] ">
                  <span className="text-[20px] ">+</span> {"  "}Quick Quotes
                </p>
              </div>
            </button>
          </div>
          {/* Life and General Insurance Container */}
          <div className="w-[98%]  border-b-[#DFDEDE] mt-[40px] border-b-[2px] rounded-[8] ">
            <div className=" w-[300px] flex justify-between items-center  ">
              <h3
                onClick={handleLifeInsurance}
                className={`pb-[10px] ${
                  lifeInsurance
                    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
                    : "text-[16px] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
                }`}
              >
                Life Insurance
              </h3>
              <h3
                onClick={handleGeneralInsurance}
                className={`pb-[10px] ${
                  generalInsurance
                    ? "text-[16px] text-[#009677] mb-[-2px] border-b-[2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
                    : "text-[16px] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
                }`}
              >
                General Insurance
              </h3>
            </div>
          </div>
          {/* Life and General Boxes Container */}
          <div className="">
            {lifeInsurance && (
              <div className="mt-[35px] flex w-[470px] justify-between items-center">
                {lifeClaims.map((item, id) => (
                  <NavLink className=" text-[18px] text-[#808285] font-normal   " to={item.path} key={id}>
                    <div className="transition-transform transform hover:scale-110 hover:shadow-lg border-[#AFAFAF] flex-col flex justify-center items-center border-[0.5px] w-[217px] rounded-[12px] opacity-[1] h-[138px] ">
                      <span>{item.icon}</span>
                      <h3 className="mt-[16px]">{item.name}</h3>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
            {generalInsurance && (
              <div className=" flex w-[98%]  flex-wrap justify-between items-center">
                {generalClaims.map((item, id) => (
                  <NavLink className=" text-[18px] text-[#808285] font-normal items-center flex justify-between  " to={item.path} key={id}>
                    <div className=" transition-transform transform hover:scale-110 hover:shadow-lg border-[#AFAFAF] mt-[35px] flex-col flex justify-center items-center border-[0.5px] w-[217px] rounded-[12px] opacity-[1] h-[138px] ">
                      <span>{item.icon}</span>
                      <h3 className="mt-[16px]">{item.name}</h3>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* Second line Boxes Starts Here */}
          <div className=" mt-[44px] flex flex-wrap justify-between lg:w-[98%]  gap-[40px]  items-center ">
            {/* Box 1 */}
            <Link className=" text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[400px]   rounded-[12px] opacity-[1] h-[138px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Policies</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">0</h2>
                </div>

                <div className=" bg-[#A0E3FE] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="30" height="30" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_714_7591)">
                      <path
                        d="M49.0784 0.103516H12.3633C11.2906 0.103516 10.4211 0.972943 10.4211 2.04565V58.1614C10.4211 58.9365 10.8821 59.6372 11.5935 59.9445C12.3052 60.252 13.1313 60.1063 13.6954 59.5748L30.7207 43.5302L47.7461 59.5748C48.1138 59.9212 48.5927 60.1035 49.0786 60.1035C49.3382 60.1035 49.6002 60.0515 49.8479 59.9445C50.5594 59.6374 51.0203 58.9365 51.0203 58.1614V2.04565C51.0205 0.972943 50.1511 0.103516 49.0784 0.103516ZM47.1363 3.98778V6.82718H14.3054V3.98778H47.1363ZM32.053 39.4481C31.6791 39.0957 31.2 38.9194 30.7209 38.9194C30.2419 38.9194 29.763 39.0957 29.3889 39.4481L14.3056 53.6625V10.7114H47.1365V53.6625L32.053 39.4481Z"
                        fill="#68BBE0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_714_7591">
                        <rect width="60" height="60" fill="" transform="translate(0.720947 0.103516)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
            {/* Box 2 */}
            <Link className=" text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[400px]  rounded-[12px] opacity-[1] h-[138px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Claims</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">0</h2>
                </div>

                <div className=" bg-[#FDF09F] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="30" height="30" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9743 4.75781H19.458C21.9084 4.75779 23.8492 4.75777 25.3681 4.962C26.9313 5.17216 28.1967 5.61499 29.1945 6.6128C30.1923 7.61063 30.6351 8.87589 30.8453 10.4391C30.9659 11.3363 31.0153 12.3806 31.0355 13.5902C31.0447 13.6447 31.0495 13.7007 31.0495 13.7578C31.0495 13.8049 31.0463 13.851 31.04 13.8963C31.0495 14.6506 31.0495 15.4669 31.0495 16.3493V16.4997C31.0495 18.9501 31.0495 20.8909 30.8453 22.4098C30.6351 23.973 30.1923 25.2383 29.1945 26.2362C28.1967 27.2339 26.9313 27.6767 25.3681 27.887C23.8492 28.0911 21.9084 28.0911 19.458 28.0911H13.9743C11.5239 28.0911 9.58307 28.0911 8.06412 27.887C6.50089 27.6767 5.23563 27.2339 4.2378 26.2362C3.23999 25.2383 2.79716 23.973 2.587 22.4098C2.38277 20.8909 2.38279 18.9501 2.38281 16.4997V16.3493C2.3828 15.4669 2.3828 14.6506 2.39233 13.8963C2.38605 13.851 2.38281 13.8047 2.38281 13.7578C2.38281 13.7007 2.3876 13.6447 2.3968 13.5902C2.417 12.3806 2.46637 11.3363 2.587 10.4391C2.79716 8.87589 3.23999 7.61063 4.2378 6.6128C5.23563 5.61499 6.50089 5.17216 8.06412 4.962C9.58307 4.75777 11.5239 4.75779 13.9743 4.75781ZM4.38547 14.7578C4.38293 15.2757 4.38281 15.8299 4.38281 16.4245C4.38281 18.9669 4.38493 20.7731 4.56916 22.1434C4.74951 23.4847 5.08773 24.2577 5.65201 24.8219C6.21629 25.3862 6.98916 25.7245 8.33061 25.9047C9.70083 26.089 11.5071 26.0911 14.0495 26.0911H19.3828C21.9252 26.0911 23.7315 26.089 25.1017 25.9047C26.4431 25.7245 27.216 25.3862 27.7803 24.8219C28.3445 24.2577 28.6828 23.4847 28.8631 22.1434C29.0473 20.7731 29.0495 18.9669 29.0495 16.4245C29.0495 15.8299 29.0493 15.2757 29.0468 14.7578H4.38547ZM29.0147 12.7578H4.41757C4.44367 11.9755 4.48931 11.2996 4.56916 10.7056C4.74951 9.36416 5.08773 8.59129 5.65201 8.02701C6.21629 7.46273 6.98916 7.12451 8.33061 6.94416C9.70083 6.75993 11.5071 6.75781 14.0495 6.75781H19.3828C21.9252 6.75781 23.7315 6.75993 25.1017 6.94416C26.4431 7.12451 27.216 7.46273 27.7803 8.02701C28.3445 8.59129 28.6828 9.36416 28.8631 10.7056C28.9429 11.2996 28.9887 11.9755 29.0147 12.7578ZM7.71615 21.7578C7.71615 21.2055 8.16387 20.7578 8.71615 20.7578H14.0495C14.6017 20.7578 15.0495 21.2055 15.0495 21.7578C15.0495 22.3101 14.6017 22.7578 14.0495 22.7578H8.71615C8.16387 22.7578 7.71615 22.3101 7.71615 21.7578ZM16.3828 21.7578C16.3828 21.2055 16.8305 20.7578 17.3828 20.7578H19.3828C19.9351 20.7578 20.3828 21.2055 20.3828 21.7578C20.3828 22.3101 19.9351 22.7578 19.3828 22.7578H17.3828C16.8305 22.7578 16.3828 22.3101 16.3828 21.7578Z"
                      fill="#BDA519"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Box 3 */}
            <Link className=" text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[400px]    rounded-[12px] opacity-[1] h-[138px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Renewals</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">0</h2>
                </div>

                <div className=" bg-[#FEBD9E] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="30" height="30" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7161 47.9243V37.0493L8.21606 47.9243V12.9243L25.7161 24.3243V12.9243L53.2161 30.8493L25.7161 47.9243Z" stroke="#BD4E1B" strokeWidth="2.5" strokeinecap="round" />
                  </svg>
                </div>
              </div>
            </Link>
            {/* Box 4 */}
            <Link className=" text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] lg:w-[420px] 2xl:w-[550px] 3xl:w-[400px]   rounded-[12px] opacity-[1] h-[138px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Quotes</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">8</h2>
                </div>

                <div className=" bg-[#F39FFE] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.46606 6.04932V24.7993C9.46606 25.8349 10.3055 26.6743 11.3411 26.6743H20.1053C21.1408 26.6743 21.9803 25.8349 21.9803 24.7993V6.04932C21.9803 5.01378 21.1408 4.17432 20.1053 4.17432H11.3411C10.3055 4.17432 9.46606 5.01378 9.46606 6.04932ZM8.21606 6.04932C8.21606 4.32343 9.61517 2.92432 11.3411 2.92432H20.1053C21.8312 2.92432 23.2303 4.32343 23.2303 6.04932V24.7993C23.2303 26.5252 21.8312 27.9243 20.1053 27.9243H11.3411C9.61517 27.9243 8.21606 26.5252 8.21606 24.7993V6.04932ZM14.4661 24.1743C14.4661 23.4843 15.0261 22.9243 15.7161 22.9243C16.4061 22.9243 16.9661 23.4843 16.9661 24.1743C16.9661 24.8643 16.4061 25.4243 15.7161 25.4243C15.0261 25.4243 14.4661 24.8643 14.4661 24.1743Z"
                      fill="#BD19A3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className=" w-full flex justify-between items-center gap-[50px] flex-wrap ">
            {/* Quote Table */}
            <div className=" w-[98%] p-[32px] h-[650px] mt-[40px] border-[#AFAFAF] border-[0.5px] rounded-[12px] opacity-[1]">
              {/* Title container */}
              <div className="flex justify-between items-center ">
                <h2 className="text-[20px] text-[#1a1a1a] font-bold tracking-[0.4px] opacity-[1] text-center  ">Quote</h2>
                <span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.4483 10.8763L10.4483 10.0963C10.7783 10.0063 10.9883 9.67628 10.8983 9.31628C10.8083 8.98628 10.4783 8.77628 10.1183 8.86628L8.5583 9.28628C9.0683 8.62628 9.7283 8.08628 10.5383 7.72628C11.7683 7.18628 13.1183 7.15628 14.3783 7.63628C15.6083 8.11628 16.5983 9.07628 17.1383 10.2763C17.2883 10.6063 17.6483 10.7263 17.9783 10.6063C18.3083 10.4563 18.4283 10.0963 18.3083 9.76628C17.6483 8.23628 16.4183 7.06628 14.8583 6.43628C13.2983 5.83628 11.5883 5.86628 10.0583 6.52628C9.0383 6.97628 8.1983 7.66628 7.5383 8.53628L7.1483 7.06628C7.0583 6.73628 6.7283 6.52628 6.3683 6.61628C6.0383 6.70628 5.8283 7.03628 5.9183 7.39628L6.6983 10.3963C6.7883 10.8163 6.9983 10.9963 7.4483 10.8763ZM19.1783 17.2363L18.3983 14.2663C18.3983 14.2663 18.2783 13.6663 17.6783 13.8163L14.6783 14.5963C14.3483 14.6863 14.1383 15.0163 14.2283 15.3763C14.3183 15.7063 14.6483 15.9163 15.0083 15.8263L16.5683 15.4063C15.2483 17.1463 12.9083 17.8663 10.7783 17.0263C9.5483 16.5463 8.5583 15.5863 8.0183 14.3863C7.8683 14.0563 7.5083 13.9363 7.1783 14.0563C6.8483 14.2063 6.7283 14.5663 6.8483 14.8963C7.5083 16.4263 8.7383 17.5963 10.2983 18.2263C11.0483 18.5263 11.7983 18.6463 12.5783 18.6463C14.5583 18.6463 16.4183 17.7163 17.6183 16.0963L18.0083 17.5663C18.0683 17.8363 18.3383 18.0463 18.6083 18.0463C18.6683 18.0463 18.7283 18.0463 18.7583 18.0163C19.0583 17.8963 19.2683 17.5663 19.1783 17.2363Z"
                      fill="#1a1a1a"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-[24px]">
                <table className="w-[100%] h-auto ">
                  <thead>
                    <tr className=" justify-between  items-center h-[32px] bg-[#F0F0F0] rounded-[4px] ">
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Date</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Quote ID</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Insured Name</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Product</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Status</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  "> Amount Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                      <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Claims Table */}
            <div className=" w-[98%] p-[32px] h-[450px]  border-[#AFAFAF] border-[0.5px] rounded-[12px] opacity-[1]">
              {/* Title container */}
              <div className="flex justify-between items-center ">
                <h2 className="text-[20px] text-[#1a1a1a] font-bold tracking-[0.4px] opacity-[1] text-center  ">Claims</h2>
                <span>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.4483 10.8763L10.4483 10.0963C10.7783 10.0063 10.9883 9.67628 10.8983 9.31628C10.8083 8.98628 10.4783 8.77628 10.1183 8.86628L8.5583 9.28628C9.0683 8.62628 9.7283 8.08628 10.5383 7.72628C11.7683 7.18628 13.1183 7.15628 14.3783 7.63628C15.6083 8.11628 16.5983 9.07628 17.1383 10.2763C17.2883 10.6063 17.6483 10.7263 17.9783 10.6063C18.3083 10.4563 18.4283 10.0963 18.3083 9.76628C17.6483 8.23628 16.4183 7.06628 14.8583 6.43628C13.2983 5.83628 11.5883 5.86628 10.0583 6.52628C9.0383 6.97628 8.1983 7.66628 7.5383 8.53628L7.1483 7.06628C7.0583 6.73628 6.7283 6.52628 6.3683 6.61628C6.0383 6.70628 5.8283 7.03628 5.9183 7.39628L6.6983 10.3963C6.7883 10.8163 6.9983 10.9963 7.4483 10.8763ZM19.1783 17.2363L18.3983 14.2663C18.3983 14.2663 18.2783 13.6663 17.6783 13.8163L14.6783 14.5963C14.3483 14.6863 14.1383 15.0163 14.2283 15.3763C14.3183 15.7063 14.6483 15.9163 15.0083 15.8263L16.5683 15.4063C15.2483 17.1463 12.9083 17.8663 10.7783 17.0263C9.5483 16.5463 8.5583 15.5863 8.0183 14.3863C7.8683 14.0563 7.5083 13.9363 7.1783 14.0563C6.8483 14.2063 6.7283 14.5663 6.8483 14.8963C7.5083 16.4263 8.7383 17.5963 10.2983 18.2263C11.0483 18.5263 11.7983 18.6463 12.5783 18.6463C14.5583 18.6463 16.4183 17.7163 17.6183 16.0963L18.0083 17.5663C18.0683 17.8363 18.3383 18.0463 18.6083 18.0463C18.6683 18.0463 18.7283 18.0463 18.7583 18.0163C19.0583 17.8963 19.2683 17.5663 19.1783 17.2363Z"
                      fill="#1a1a1a"
                    />
                  </svg>
                </span>
              </div>
              <div className="mt-[24px]">
                <table className="w-[100%] h-auto ">
                  <thead>
                    <tr className=" justify-between  items-center h-[32px] bg-[#F0F0F0] rounded-[4px] ">
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Entry Date</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Product</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Policy ID</th>
                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Claim Amount</th>

                      <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  "> Amount </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                    <tr className=" justify-between items-center w-[100%] ">
                      <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                        2023-11-22
                        <span>11:14:50.84</span>
                      </td>
                      <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                      <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className=" flex justify-end items-center mt-[70px] pr-[20px] ">
            <h3 className="text-[#009677] font-semibold ">OldMutual Broker Platform © -{time}Nubeero</h3>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" mobile:flex bg-white lg:hidden pb-[50px] w-full h-fit justify-center items-center  ">
        <div className="w-[85%] max-w-[85%] ">
          <div className="flex w-full   h-[50px] pt-[40px] justify-center items-center">
            <div className=" justify-between w-full flex items-center">
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
                className={isOpen ? "flex w-[150px] bg-[#D1D7E1] h-[40px]  rounded-[20px] pl-[13px] cursor-pointer ml-[10px] justify-between items-center" : "flex w-[170px] cursor-pointer ml-[23.5px] justify-between items-center"}
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
          {/* Green container */}
          <div className="bg-[#009677] flex flex-col justify-between  p-[40px] h-fit w-full mt-[30px] rounded-[24px] ">
            <div>
              <h2 className="text-[32px] opacity-[1] font-medium text-[#fff] tracking-[0.51px] text-left ">Good Day, Valentine</h2>
              <p className=" text-[16px]  mt-[16px] opacity-[1] font-normal text-[#fff] tracking-[0.26px] text-left">OldMutual aims to offer the best type of insurance cover that meets your needs.</p>
            </div>
            <button onClick={() => setQuickQuotes(true)}>
              <div className="w-[210px] mt-[40px] flex justify-center items-center opacity-[1] h-[52px] rounded-[8px] bg-[#50B848] ">
                <p className=" text-[18px] opacity-[1] text-center font-normal text-[#fff] tracking-[0.51px] ">
                  <span className="text-[20px] ">+</span> {"  "}Quick Quotes
                </p>
              </div>
            </button>
          </div>
          {/* Life and General Insurance Container */}
          <div className="w-full  border-b-[#DFDEDE] mt-[40px] border-b-[2px] rounded-[8] ">
            <div className=" w-[300px] flex justify-between items-center  ">
              <h3
                onClick={handleLifeInsurance}
                className={`pb-[10px] ${
                  lifeInsurance
                    ? "text-[16px]  text-[#009677] border-b-[2px] mb-[-2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
                    : "text-[16px] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
                }`}
              >
                Life Insurance
              </h3>
              <h3
                onClick={handleGeneralInsurance}
                className={`pb-[10px] ${
                  generalInsurance
                    ? "text-[16px] text-[#009677] mb-[-2px] border-b-[2px] border-b-[#009677] cursor-pointer font-normal opacity-[1] tracking-[0.26px] "
                    : "text-[16px] cursor-pointer font-normal opacity-[1] tracking-[0.26px]  text-[#808285]"
                }`}
              >
                General Insurance
              </h3>
            </div>
          </div>
          {/* Life and General Boxes Container */}
          <div className=" w-full">
            {lifeInsurance && (
              <div className="mt-[35px] flex w-full  flex-wrap justify-between items-center">
                {lifeClaims.map((item, id) => (
                  <NavLink className=" text-[18px] text-[#808285] font-normal   " to={item.path} key={id}>
                    <div className="transition-transform transform hover:scale-110 hover:shadow-lg border-[#AFAFAF] flex-col flex justify-center items-center border-[0.5px] w-[300px] mb-[30px] rounded-[12px] opacity-[1] h-[138px] ">
                      <span>{item.icon}</span>
                      <h3 className="mt-[16px]">{item.name}</h3>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
            {generalInsurance && (
              <div className=" flex w-full  flex-wrap justify-between items-center">
                {generalClaims.map((item, id) => (
                  <NavLink className=" text-[18px] text-[#808285] font-normal items-center flex justify-between  " to={item.path} key={id}>
                    <div className=" transition-transform transform hover:scale-110 hover:shadow-lg border-[#AFAFAF] mt-[35px] flex-col flex justify-center items-center border-[0.5px] w-[300px]  rounded-[12px] opacity-[1] h-[138px] ">
                      <span>{item.icon}</span>
                      <h3 className="mt-[16px]">{item.name}</h3>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* Second line Boxes Starts Here */}
          <div className=" mt-[44px] justify-between w-full flex flex-col  items-center ">
            {/* Box 1 */}
            <Link className=" w-full text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] w-full rounded-[12px] opacity-[1] h-fit py-[40px] mb-[30px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Policies</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">0</h2>
                </div>

                <div className=" bg-[#A0E3FE] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="30" height="30" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_714_7591)">
                      <path
                        d="M49.0784 0.103516H12.3633C11.2906 0.103516 10.4211 0.972943 10.4211 2.04565V58.1614C10.4211 58.9365 10.8821 59.6372 11.5935 59.9445C12.3052 60.252 13.1313 60.1063 13.6954 59.5748L30.7207 43.5302L47.7461 59.5748C48.1138 59.9212 48.5927 60.1035 49.0786 60.1035C49.3382 60.1035 49.6002 60.0515 49.8479 59.9445C50.5594 59.6374 51.0203 58.9365 51.0203 58.1614V2.04565C51.0205 0.972943 50.1511 0.103516 49.0784 0.103516ZM47.1363 3.98778V6.82718H14.3054V3.98778H47.1363ZM32.053 39.4481C31.6791 39.0957 31.2 38.9194 30.7209 38.9194C30.2419 38.9194 29.763 39.0957 29.3889 39.4481L14.3056 53.6625V10.7114H47.1365V53.6625L32.053 39.4481Z"
                        fill="#68BBE0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_714_7591">
                        <rect width="60" height="60" fill="" transform="translate(0.720947 0.103516)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
            {/* Box 2 */}
            <Link className=" w-full text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] w-full rounded-[12px] opacity-[1] h-fit py-[40px] mb-[30px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Claims</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">0</h2>
                </div>

                <div className=" bg-[#FDF09F] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="30" height="30" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9743 4.75781H19.458C21.9084 4.75779 23.8492 4.75777 25.3681 4.962C26.9313 5.17216 28.1967 5.61499 29.1945 6.6128C30.1923 7.61063 30.6351 8.87589 30.8453 10.4391C30.9659 11.3363 31.0153 12.3806 31.0355 13.5902C31.0447 13.6447 31.0495 13.7007 31.0495 13.7578C31.0495 13.8049 31.0463 13.851 31.04 13.8963C31.0495 14.6506 31.0495 15.4669 31.0495 16.3493V16.4997C31.0495 18.9501 31.0495 20.8909 30.8453 22.4098C30.6351 23.973 30.1923 25.2383 29.1945 26.2362C28.1967 27.2339 26.9313 27.6767 25.3681 27.887C23.8492 28.0911 21.9084 28.0911 19.458 28.0911H13.9743C11.5239 28.0911 9.58307 28.0911 8.06412 27.887C6.50089 27.6767 5.23563 27.2339 4.2378 26.2362C3.23999 25.2383 2.79716 23.973 2.587 22.4098C2.38277 20.8909 2.38279 18.9501 2.38281 16.4997V16.3493C2.3828 15.4669 2.3828 14.6506 2.39233 13.8963C2.38605 13.851 2.38281 13.8047 2.38281 13.7578C2.38281 13.7007 2.3876 13.6447 2.3968 13.5902C2.417 12.3806 2.46637 11.3363 2.587 10.4391C2.79716 8.87589 3.23999 7.61063 4.2378 6.6128C5.23563 5.61499 6.50089 5.17216 8.06412 4.962C9.58307 4.75777 11.5239 4.75779 13.9743 4.75781ZM4.38547 14.7578C4.38293 15.2757 4.38281 15.8299 4.38281 16.4245C4.38281 18.9669 4.38493 20.7731 4.56916 22.1434C4.74951 23.4847 5.08773 24.2577 5.65201 24.8219C6.21629 25.3862 6.98916 25.7245 8.33061 25.9047C9.70083 26.089 11.5071 26.0911 14.0495 26.0911H19.3828C21.9252 26.0911 23.7315 26.089 25.1017 25.9047C26.4431 25.7245 27.216 25.3862 27.7803 24.8219C28.3445 24.2577 28.6828 23.4847 28.8631 22.1434C29.0473 20.7731 29.0495 18.9669 29.0495 16.4245C29.0495 15.8299 29.0493 15.2757 29.0468 14.7578H4.38547ZM29.0147 12.7578H4.41757C4.44367 11.9755 4.48931 11.2996 4.56916 10.7056C4.74951 9.36416 5.08773 8.59129 5.65201 8.02701C6.21629 7.46273 6.98916 7.12451 8.33061 6.94416C9.70083 6.75993 11.5071 6.75781 14.0495 6.75781H19.3828C21.9252 6.75781 23.7315 6.75993 25.1017 6.94416C26.4431 7.12451 27.216 7.46273 27.7803 8.02701C28.3445 8.59129 28.6828 9.36416 28.8631 10.7056C28.9429 11.2996 28.9887 11.9755 29.0147 12.7578ZM7.71615 21.7578C7.71615 21.2055 8.16387 20.7578 8.71615 20.7578H14.0495C14.6017 20.7578 15.0495 21.2055 15.0495 21.7578C15.0495 22.3101 14.6017 22.7578 14.0495 22.7578H8.71615C8.16387 22.7578 7.71615 22.3101 7.71615 21.7578ZM16.3828 21.7578C16.3828 21.2055 16.8305 20.7578 17.3828 20.7578H19.3828C19.9351 20.7578 20.3828 21.2055 20.3828 21.7578C20.3828 22.3101 19.9351 22.7578 19.3828 22.7578H17.3828C16.8305 22.7578 16.3828 22.3101 16.3828 21.7578Z"
                      fill="#BDA519"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          {/* Third line */}
          <div className="  justify-between  w-full flex flex-col  items-center ">
            {/* Box 3 */}
            <Link className=" w-full text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] w-full rounded-[12px] opacity-[1] h-fit py-[40px] mb-[30px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Renewals</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">0</h2>
                </div>

                <div className=" bg-[#FEBD9E] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="30" height="30" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7161 47.9243V37.0493L8.21606 47.9243V12.9243L25.7161 24.3243V12.9243L53.2161 30.8493L25.7161 47.9243Z" stroke="#BD4E1B" strokeWidth="2.5" strokeinecap="round" />
                  </svg>
                </div>
              </div>
            </Link>
            {/* Box 4 */}
            <Link className=" w-full text-[18px] text-[#808285] font-normal   " to="">
              <div className=" border-[#AFAFAF]  flex justify-between pr-[32px] pl-[32px] items-center border-[0.5px] w-full rounded-[12px] opacity-[1] h-fit py-[40px] mb-[30px] ">
                <div>
                  <h3 className="text-[18px] font-normal text-[#1a1a1a] ">Quotes</h3>
                  <h2 className="text-[32px] tracking-[0.64px] font-bold text-[#1a1a1a] ">8</h2>
                </div>

                <div className=" bg-[#F39FFE] h-[52px] flex justify-center items-center rounded-[10px] w-[52px] ">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.46606 6.04932V24.7993C9.46606 25.8349 10.3055 26.6743 11.3411 26.6743H20.1053C21.1408 26.6743 21.9803 25.8349 21.9803 24.7993V6.04932C21.9803 5.01378 21.1408 4.17432 20.1053 4.17432H11.3411C10.3055 4.17432 9.46606 5.01378 9.46606 6.04932ZM8.21606 6.04932C8.21606 4.32343 9.61517 2.92432 11.3411 2.92432H20.1053C21.8312 2.92432 23.2303 4.32343 23.2303 6.04932V24.7993C23.2303 26.5252 21.8312 27.9243 20.1053 27.9243H11.3411C9.61517 27.9243 8.21606 26.5252 8.21606 24.7993V6.04932ZM14.4661 24.1743C14.4661 23.4843 15.0261 22.9243 15.7161 22.9243C16.4061 22.9243 16.9661 23.4843 16.9661 24.1743C16.9661 24.8643 16.4061 25.4243 15.7161 25.4243C15.0261 25.4243 14.4661 24.8643 14.4661 24.1743Z"
                      fill="#BD19A3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          {/* Quote Table */}
          <div className=" w-full overflow-x-scroll pl-[32px] h-fit py-[30px] pr-[30px] mt-[30px] border-[#AFAFAF] border-[0.5px] rounded-[12px] opacity-[1]">
            {/* Title container */}
            <div className="flex justify-between items-center ">
              <h2 className="text-[20px] text-[#1a1a1a] font-bold tracking-[0.4px] opacity-[1] text-center  ">Quote</h2>
              <span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.4483 10.8763L10.4483 10.0963C10.7783 10.0063 10.9883 9.67628 10.8983 9.31628C10.8083 8.98628 10.4783 8.77628 10.1183 8.86628L8.5583 9.28628C9.0683 8.62628 9.7283 8.08628 10.5383 7.72628C11.7683 7.18628 13.1183 7.15628 14.3783 7.63628C15.6083 8.11628 16.5983 9.07628 17.1383 10.2763C17.2883 10.6063 17.6483 10.7263 17.9783 10.6063C18.3083 10.4563 18.4283 10.0963 18.3083 9.76628C17.6483 8.23628 16.4183 7.06628 14.8583 6.43628C13.2983 5.83628 11.5883 5.86628 10.0583 6.52628C9.0383 6.97628 8.1983 7.66628 7.5383 8.53628L7.1483 7.06628C7.0583 6.73628 6.7283 6.52628 6.3683 6.61628C6.0383 6.70628 5.8283 7.03628 5.9183 7.39628L6.6983 10.3963C6.7883 10.8163 6.9983 10.9963 7.4483 10.8763ZM19.1783 17.2363L18.3983 14.2663C18.3983 14.2663 18.2783 13.6663 17.6783 13.8163L14.6783 14.5963C14.3483 14.6863 14.1383 15.0163 14.2283 15.3763C14.3183 15.7063 14.6483 15.9163 15.0083 15.8263L16.5683 15.4063C15.2483 17.1463 12.9083 17.8663 10.7783 17.0263C9.5483 16.5463 8.5583 15.5863 8.0183 14.3863C7.8683 14.0563 7.5083 13.9363 7.1783 14.0563C6.8483 14.2063 6.7283 14.5663 6.8483 14.8963C7.5083 16.4263 8.7383 17.5963 10.2983 18.2263C11.0483 18.5263 11.7983 18.6463 12.5783 18.6463C14.5583 18.6463 16.4183 17.7163 17.6183 16.0963L18.0083 17.5663C18.0683 17.8363 18.3383 18.0463 18.6083 18.0463C18.6683 18.0463 18.7283 18.0463 18.7583 18.0163C19.0583 17.8963 19.2683 17.5663 19.1783 17.2363Z"
                    fill="#1a1a1a"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-[24px]">
              <table className="w-[100%] h-auto ">
                <thead>
                  <tr className=" justify-between  items-center h-[32px] bg-[#F0F0F0] rounded-[4px] ">
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Date</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Quote ID</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Insured Name</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Product</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Status</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  "> Amount Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-2  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-2 opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">APPROVED</td>
                    <td className="text-[16px] font-normal p-2  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Claims Table */}
          <div className=" w-full overflow-x-scroll pl-[32px] h-fit py-[30px] pr-[30px] mt-[30px] border-[#AFAFAF] border-[0.5px] rounded-[12px] opacity-[1]">
            {/* Title container */}
            <div className="flex justify-between items-center ">
              <h2 className="text-[20px] text-[#1a1a1a] font-bold tracking-[0.4px] opacity-[1] text-center  ">Claims</h2>
              <span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.4483 10.8763L10.4483 10.0963C10.7783 10.0063 10.9883 9.67628 10.8983 9.31628C10.8083 8.98628 10.4783 8.77628 10.1183 8.86628L8.5583 9.28628C9.0683 8.62628 9.7283 8.08628 10.5383 7.72628C11.7683 7.18628 13.1183 7.15628 14.3783 7.63628C15.6083 8.11628 16.5983 9.07628 17.1383 10.2763C17.2883 10.6063 17.6483 10.7263 17.9783 10.6063C18.3083 10.4563 18.4283 10.0963 18.3083 9.76628C17.6483 8.23628 16.4183 7.06628 14.8583 6.43628C13.2983 5.83628 11.5883 5.86628 10.0583 6.52628C9.0383 6.97628 8.1983 7.66628 7.5383 8.53628L7.1483 7.06628C7.0583 6.73628 6.7283 6.52628 6.3683 6.61628C6.0383 6.70628 5.8283 7.03628 5.9183 7.39628L6.6983 10.3963C6.7883 10.8163 6.9983 10.9963 7.4483 10.8763ZM19.1783 17.2363L18.3983 14.2663C18.3983 14.2663 18.2783 13.6663 17.6783 13.8163L14.6783 14.5963C14.3483 14.6863 14.1383 15.0163 14.2283 15.3763C14.3183 15.7063 14.6483 15.9163 15.0083 15.8263L16.5683 15.4063C15.2483 17.1463 12.9083 17.8663 10.7783 17.0263C9.5483 16.5463 8.5583 15.5863 8.0183 14.3863C7.8683 14.0563 7.5083 13.9363 7.1783 14.0563C6.8483 14.2063 6.7283 14.5663 6.8483 14.8963C7.5083 16.4263 8.7383 17.5963 10.2983 18.2263C11.0483 18.5263 11.7983 18.6463 12.5783 18.6463C14.5583 18.6463 16.4183 17.7163 17.6183 16.0963L18.0083 17.5663C18.0683 17.8363 18.3383 18.0463 18.6083 18.0463C18.6683 18.0463 18.7283 18.0463 18.7583 18.0163C19.0583 17.8963 19.2683 17.5663 19.1783 17.2363Z"
                    fill="#1a1a1a"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-[24px]">
              <table className="w-[100%] h-auto ">
                <thead>
                  <tr className=" justify-between  items-center h-[32px] bg-[#F0F0F0] rounded-[4px] ">
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Entry Date</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Product</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Policy ID</th>
                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  ">Claim Amount</th>

                    <th className="text-[14px] tracking-[0.24px] font-bold text-[#1A1A1A8A]  "> Amount </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                  <tr className=" justify-between items-center w-[100%] ">
                    <td className="text-[16px] p-[15px]  flex flex-col font-normal opacity-[1] text-[#1a1a1a]  ">
                      2023-11-22
                      <span>11:14:50.84</span>
                    </td>
                    <td className="text-[16px] font-normal p-[15px] opacity-[1] text-[#1a1a1a]  ">101427967</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">Cotton Carey Trading</td>
                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">GROUPLIFECORP</td>

                    <td className="text-[16px] font-normal p-[15px]  opacity-[1] text-[#1a1a1a]  ">₦1,950.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Footer */}
          <div className=" flex justify-center items-center w-full mt-[40px]  ">
            <h3 className="text-[#009677] font-semibold ">OldMutual Broker Platform © -{time}Nubeero</h3>
          </div>
        </div>
      </div>
      {/* Dropdown menu bar */}
      {isOpen && <DropDown />}
      {/* Quick Quote Modal */}
      {quickquotes && (
        <>
          {/* LARGE SCREENS */}
          <div className=" mobile:hidden lg:flex top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-full  ">
            <div className="w-[650px] h-fit rounded-[8px]   bg-white opacity-[1]  ">
              <div className=" w-[100%] p-[20px] h-[70px] flex justify-between items-center bg-[#039677] text-[20px]  text-[#fff] ">
                <h3 className=" font-normal ">Insurance Quotes</h3>
                <svg onClick={() => setQuickQuotes(false)} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9991 16L8 8M8.00085 16L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="w-[93%]  mx-[20px] border-b-[#DFDEDE] pl-[10px] mt-[40px] border-b-[1.5px] rounded-[8] ">
                <div className=" w-[250px] text-[#575757] pb-[20px] flex justify-between items-center  ">
                  <button onClick={motorInsurance} className={`${firstIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button onClick={marineInsurance} className={`${secondIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11.1249C0.99985 11.9419 1.25789 12.738 1.73727 13.3995C2.21664 14.061 2.89282 14.5541 3.66921 14.8083C4.44559 15.0625 5.28245 15.0648 6.06024 14.8149C6.83802 14.5651 7.51694 14.0758 8 13.4169C8.48306 14.0758 9.16197 14.5651 9.93976 14.8149C10.7175 15.0648 11.5544 15.0625 12.3308 14.8083C13.1072 14.5541 13.7834 14.061 14.2627 13.3995C14.7421 12.738 15.0002 11.9419 15 11.1249V7.00194L13.72 8.28194L12.23 9.76994C12.0893 9.91064 12.0103 10.1015 12.0103 10.3004C12.0103 10.4994 12.0893 10.6902 12.23 10.8309C12.3707 10.9716 12.5615 11.0507 12.7605 11.0507C12.9595 11.0507 13.1503 10.9716 13.291 10.8309L13.499 10.6229V11.1249C13.499 11.4368 13.4376 11.7457 13.3182 12.0338C13.1989 12.322 13.0239 12.5838 12.8034 12.8043C12.5828 13.0249 12.321 13.1998 12.0329 13.3192C11.7447 13.4385 11.4359 13.4999 11.124 13.4999C10.8121 13.4999 10.5033 13.4385 10.2151 13.3192C9.92698 13.1998 9.66516 13.0249 9.44462 12.8043C9.22408 12.5838 9.04914 12.322 8.92979 12.0338C8.81043 11.7457 8.749 11.4368 8.749 11.1249V5.88494C9.31906 5.70575 9.80612 5.32837 10.122 4.82112C10.4379 4.31388 10.5617 3.7103 10.4711 3.11966C10.3804 2.52901 10.0813 1.99034 9.62783 1.60117C9.17437 1.212 8.59656 0.998047 7.999 0.998047C7.40144 0.998047 6.82363 1.212 6.37017 1.60117C5.91672 1.99034 5.61759 2.52901 5.52694 3.11966C5.4363 3.7103 5.56012 4.31388 5.876 4.82112C6.19188 5.32837 6.67894 5.70575 7.249 5.88494V11.1249C7.249 11.7548 6.99878 12.3589 6.55338 12.8043C6.10798 13.2497 5.50389 13.4999 4.874 13.4999C4.24411 13.4999 3.64002 13.2497 3.19462 12.8043C2.74922 12.3589 2.499 11.7548 2.499 11.1249V10.6229L2.707 10.8309C2.77566 10.9046 2.85846 10.9637 2.95046 11.0047C3.04246 11.0457 3.14177 11.0678 3.24248 11.0695C3.34318 11.0713 3.44321 11.0528 3.5366 11.0151C3.62999 10.9773 3.71482 10.9212 3.78604 10.85C3.85726 10.7788 3.9134 10.6939 3.95112 10.6005C3.98884 10.5072 4.00737 10.4071 4.00559 10.3064C4.00381 10.2057 3.98177 10.1064 3.94078 10.0144C3.89979 9.9224 3.84069 9.8396 3.767 9.77094L2.28 8.28094L1 7.00194V11.1249ZM9 3.49994C9 3.23473 8.89464 2.98037 8.70711 2.79284C8.51957 2.6053 8.26522 2.49994 8 2.49994C7.73478 2.49994 7.48043 2.6053 7.29289 2.79284C7.10536 2.98037 7 3.23473 7 3.49994C7 3.76516 7.10536 4.01951 7.29289 4.20705C7.48043 4.39459 7.73478 4.49994 8 4.49994C8.26522 4.49994 8.51957 4.39459 8.70711 4.20705C8.89464 4.01951 9 3.76516 9 3.49994Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button onClick={fireInsurance} className={`${thirdIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.832 16.969C24.56 16.322 24.25 15.589 23.949 14.684C23.159 12.315 25.683 9.731 25.707 9.707L24.293 8.293C24.153 8.433 20.87 11.771 22.051 15.316C22.377 16.294 22.703 17.066 22.989 17.746C23.6564 19.0646 24.0028 20.5222 24 22C23.8828 23.1912 23.4255 24.3235 22.6826 25.262C21.9396 26.2005 20.9425 26.9055 19.81 27.293C20.1678 25.8907 20.1624 24.4203 19.7945 23.0207C19.4266 21.621 18.7081 20.3381 17.707 19.293L16.663 18.249L16.081 19.606C14.245 23.89 12.06 25.76 10.775 26.54C9.98615 26.0569 9.32326 25.3934 8.84083 24.6041C8.3584 23.8149 8.07022 22.9224 8 22C8.06898 20.7412 8.38463 19.5081 8.929 18.371C9.5746 17.0002 9.93878 15.5139 10 14V12.222C10.874 12.582 12 13.525 12 16V18.603L13.743 16.669C16.855 13.215 16.206 9.102 14.949 6.361C15.9045 6.6795 16.725 7.31027 17.2784 8.15176C17.8319 8.99325 18.086 9.99651 18 11H20C20 5.463 15.421 4 13 4H11L12.2 5.599C12.337 5.784 15.062 9.526 13.553 13.287C13.2172 12.3419 12.6018 11.5213 11.7886 10.9342C10.9754 10.3471 10.0028 10.0213 9 10H8V14C7.93102 15.2588 7.61537 16.4919 7.071 17.629C6.4254 18.9998 6.06122 20.4861 6 22C6 25.848 9.823 30 16 30C22.177 30 26 25.848 26 22C26.0015 20.2556 25.6019 18.5343 24.832 16.969ZM12.835 27.526C14.6797 25.999 16.1698 24.0888 17.202 21.928C17.7531 22.8178 18.0661 23.8343 18.1111 24.8799C18.1561 25.9255 17.9316 26.9652 17.459 27.899C16.9754 27.9641 16.488 27.9978 16 28C14.9268 28.0074 13.859 27.8475 12.835 27.526Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button onClick={creditLifeInsurance} className={`${fourthIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9743 4.75781H19.458C21.9084 4.75779 23.8492 4.75777 25.3681 4.962C26.9313 5.17216 28.1967 5.61499 29.1945 6.6128C30.1923 7.61063 30.6351 8.87589 30.8453 10.4391C30.9659 11.3363 31.0153 12.3806 31.0355 13.5902C31.0447 13.6447 31.0495 13.7007 31.0495 13.7578C31.0495 13.8049 31.0463 13.851 31.04 13.8963C31.0495 14.6506 31.0495 15.4669 31.0495 16.3493V16.4997C31.0495 18.9501 31.0495 20.8909 30.8453 22.4098C30.6351 23.973 30.1923 25.2383 29.1945 26.2362C28.1967 27.2339 26.9313 27.6767 25.3681 27.887C23.8492 28.0911 21.9084 28.0911 19.458 28.0911H13.9743C11.5239 28.0911 9.58307 28.0911 8.06412 27.887C6.50089 27.6767 5.23563 27.2339 4.2378 26.2362C3.23999 25.2383 2.79716 23.973 2.587 22.4098C2.38277 20.8909 2.38279 18.9501 2.38281 16.4997V16.3493C2.3828 15.4669 2.3828 14.6506 2.39233 13.8963C2.38605 13.851 2.38281 13.8047 2.38281 13.7578C2.38281 13.7007 2.3876 13.6447 2.3968 13.5902C2.417 12.3806 2.46637 11.3363 2.587 10.4391C2.79716 8.87589 3.23999 7.61063 4.2378 6.6128C5.23563 5.61499 6.50089 5.17216 8.06412 4.962C9.58307 4.75777 11.5239 4.75779 13.9743 4.75781ZM4.38547 14.7578C4.38293 15.2757 4.38281 15.8299 4.38281 16.4245C4.38281 18.9669 4.38493 20.7731 4.56916 22.1434C4.74951 23.4847 5.08773 24.2577 5.65201 24.8219C6.21629 25.3862 6.98916 25.7245 8.33061 25.9047C9.70083 26.089 11.5071 26.0911 14.0495 26.0911H19.3828C21.9252 26.0911 23.7315 26.089 25.1017 25.9047C26.4431 25.7245 27.216 25.3862 27.7803 24.8219C28.3445 24.2577 28.6828 23.4847 28.8631 22.1434C29.0473 20.7731 29.0495 18.9669 29.0495 16.4245C29.0495 15.8299 29.0493 15.2757 29.0468 14.7578H4.38547ZM29.0147 12.7578H4.41757C4.44367 11.9755 4.48931 11.2996 4.56916 10.7056C4.74951 9.36416 5.08773 8.59129 5.65201 8.02701C6.21629 7.46273 6.98916 7.12451 8.33061 6.94416C9.70083 6.75993 11.5071 6.75781 14.0495 6.75781H19.3828C21.9252 6.75781 23.7315 6.75993 25.1017 6.94416C26.4431 7.12451 27.216 7.46273 27.7803 8.02701C28.3445 8.59129 28.6828 9.36416 28.8631 10.7056C28.9429 11.2996 28.9887 11.9755 29.0147 12.7578ZM7.71615 21.7578C7.71615 21.2055 8.16387 20.7578 8.71615 20.7578H14.0495C14.6017 20.7578 15.0495 21.2055 15.0495 21.7578C15.0495 22.3101 14.6017 22.7578 14.0495 22.7578H8.71615C8.16387 22.7578 7.71615 22.3101 7.71615 21.7578ZM16.3828 21.7578C16.3828 21.2055 16.8305 20.7578 17.3828 20.7578H19.3828C19.9351 20.7578 20.3828 21.2055 20.3828 21.7578C20.3828 22.3101 19.9351 22.7578 19.3828 22.7578H17.3828C16.8305 22.7578 16.3828 22.3101 16.3828 21.7578Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button onClick={groupLifeInsurance} className={`${fifthIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M30.5617 24.0718C33.0734 25.7768 34.8334 28.0868 34.8334 31.1668V36.6668H42.1667V31.1668C42.1667 27.1702 35.6217 24.8052 30.5617 24.0718ZM27.5 22.0002C31.5517 22.0002 34.8334 18.7185 34.8334 14.6668C34.8334 10.6152 31.5517 7.3335 27.5 7.3335C26.6384 7.3335 25.8317 7.51683 25.0617 7.7735C26.6393 9.72456 27.5 12.1577 27.5 14.6668C27.5 17.1759 26.6393 19.6091 25.0617 21.5602C25.8317 21.8168 26.6384 22.0002 27.5 22.0002ZM16.5 22.0002C20.5517 22.0002 23.8334 18.7185 23.8334 14.6668C23.8334 10.6152 20.5517 7.3335 16.5 7.3335C12.4484 7.3335 9.16671 10.6152 9.16671 14.6668C9.16671 18.7185 12.4484 22.0002 16.5 22.0002ZM16.5 11.0002C18.5167 11.0002 20.1667 12.6502 20.1667 14.6668C20.1667 16.6835 18.5167 18.3335 16.5 18.3335C14.4834 18.3335 12.8334 16.6835 12.8334 14.6668C12.8334 12.6502 14.4834 11.0002 16.5 11.0002ZM16.5 23.8335C11.605 23.8335 1.83337 26.2902 1.83337 31.1668V36.6668H31.1667V31.1668C31.1667 26.2902 21.395 23.8335 16.5 23.8335ZM27.5 33.0002H5.50004V31.1852C5.86671 29.8652 11.55 27.5002 16.5 27.5002C21.45 27.5002 27.1334 29.8652 27.5 31.1668V33.0002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {firstIcon && <FirstIcon handleQuickQuotes={handleQuickQuotes} />}
              {secondIcon && <SecondIcon handleQuickQuotes={handleQuickQuotes} />}
              {thirdIcon && <ThirdIcon handleQuickQuotes={handleQuickQuotes} />}
              {fourthIcon && <FourthIcon handleQuickQuotes={handleQuickQuotes} />}
              {fifthIcon && <FifthIcon handleQuickQuotes={handleQuickQuotes} />}
            </div>
          </div>
          {/* SMALL SCREENS */}
          <div className=" mobile:flex  lg:hidden top-0 left-0 z-[2] flex justify-center items-center bg-[#767171] fixed bg-opacity-[54%] w-[100%] h-full  ">
            <div className="w-[85%] pb-[50px] h-[500px] overflow-x-hidden overflow-y-scroll rounded-[8px]   bg-white opacity-[1]  ">
              <div className=" w-[100%] p-[20px] h-[70px] flex justify-between items-center bg-[#039677] text-[20px]  text-[#fff] ">
                <h3 className=" font-normal ">Insurance Quotes</h3>
                <svg onClick={() => setQuickQuotes(false)} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9991 16L8 8M8.00085 16L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="w-[90%]  ml-[20px] border-b-[#DFDEDE] pl-[10px] mt-[40px] border-b-[1.5px] rounded-[8] ">
                <div className=" w-[250px] text-[#575757] pb-[20px] flex justify-between items-center  ">
                  <button onClick={motorInsurance} className={`${firstIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C7.52232 2 3.77426 4.94289 2.5 9H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M2 12C2 12.3373 2.0152 12.6709 2.04494 13M9 22C8.6584 21.8876 8.32471 21.7564 8 21.6078M3.20939 17C3.01655 16.6284 2.84453 16.2433 2.69497 15.8462M4.83122 19.3065C5.1369 19.6358 5.46306 19.9441 5.80755 20.2292"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button onClick={marineInsurance} className={`${secondIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 11.1249C0.99985 11.9419 1.25789 12.738 1.73727 13.3995C2.21664 14.061 2.89282 14.5541 3.66921 14.8083C4.44559 15.0625 5.28245 15.0648 6.06024 14.8149C6.83802 14.5651 7.51694 14.0758 8 13.4169C8.48306 14.0758 9.16197 14.5651 9.93976 14.8149C10.7175 15.0648 11.5544 15.0625 12.3308 14.8083C13.1072 14.5541 13.7834 14.061 14.2627 13.3995C14.7421 12.738 15.0002 11.9419 15 11.1249V7.00194L13.72 8.28194L12.23 9.76994C12.0893 9.91064 12.0103 10.1015 12.0103 10.3004C12.0103 10.4994 12.0893 10.6902 12.23 10.8309C12.3707 10.9716 12.5615 11.0507 12.7605 11.0507C12.9595 11.0507 13.1503 10.9716 13.291 10.8309L13.499 10.6229V11.1249C13.499 11.4368 13.4376 11.7457 13.3182 12.0338C13.1989 12.322 13.0239 12.5838 12.8034 12.8043C12.5828 13.0249 12.321 13.1998 12.0329 13.3192C11.7447 13.4385 11.4359 13.4999 11.124 13.4999C10.8121 13.4999 10.5033 13.4385 10.2151 13.3192C9.92698 13.1998 9.66516 13.0249 9.44462 12.8043C9.22408 12.5838 9.04914 12.322 8.92979 12.0338C8.81043 11.7457 8.749 11.4368 8.749 11.1249V5.88494C9.31906 5.70575 9.80612 5.32837 10.122 4.82112C10.4379 4.31388 10.5617 3.7103 10.4711 3.11966C10.3804 2.52901 10.0813 1.99034 9.62783 1.60117C9.17437 1.212 8.59656 0.998047 7.999 0.998047C7.40144 0.998047 6.82363 1.212 6.37017 1.60117C5.91672 1.99034 5.61759 2.52901 5.52694 3.11966C5.4363 3.7103 5.56012 4.31388 5.876 4.82112C6.19188 5.32837 6.67894 5.70575 7.249 5.88494V11.1249C7.249 11.7548 6.99878 12.3589 6.55338 12.8043C6.10798 13.2497 5.50389 13.4999 4.874 13.4999C4.24411 13.4999 3.64002 13.2497 3.19462 12.8043C2.74922 12.3589 2.499 11.7548 2.499 11.1249V10.6229L2.707 10.8309C2.77566 10.9046 2.85846 10.9637 2.95046 11.0047C3.04246 11.0457 3.14177 11.0678 3.24248 11.0695C3.34318 11.0713 3.44321 11.0528 3.5366 11.0151C3.62999 10.9773 3.71482 10.9212 3.78604 10.85C3.85726 10.7788 3.9134 10.6939 3.95112 10.6005C3.98884 10.5072 4.00737 10.4071 4.00559 10.3064C4.00381 10.2057 3.98177 10.1064 3.94078 10.0144C3.89979 9.9224 3.84069 9.8396 3.767 9.77094L2.28 8.28094L1 7.00194V11.1249ZM9 3.49994C9 3.23473 8.89464 2.98037 8.70711 2.79284C8.51957 2.6053 8.26522 2.49994 8 2.49994C7.73478 2.49994 7.48043 2.6053 7.29289 2.79284C7.10536 2.98037 7 3.23473 7 3.49994C7 3.76516 7.10536 4.01951 7.29289 4.20705C7.48043 4.39459 7.73478 4.49994 8 4.49994C8.26522 4.49994 8.51957 4.39459 8.70711 4.20705C8.89464 4.01951 9 3.76516 9 3.49994Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button onClick={fireInsurance} className={`${thirdIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.832 16.969C24.56 16.322 24.25 15.589 23.949 14.684C23.159 12.315 25.683 9.731 25.707 9.707L24.293 8.293C24.153 8.433 20.87 11.771 22.051 15.316C22.377 16.294 22.703 17.066 22.989 17.746C23.6564 19.0646 24.0028 20.5222 24 22C23.8828 23.1912 23.4255 24.3235 22.6826 25.262C21.9396 26.2005 20.9425 26.9055 19.81 27.293C20.1678 25.8907 20.1624 24.4203 19.7945 23.0207C19.4266 21.621 18.7081 20.3381 17.707 19.293L16.663 18.249L16.081 19.606C14.245 23.89 12.06 25.76 10.775 26.54C9.98615 26.0569 9.32326 25.3934 8.84083 24.6041C8.3584 23.8149 8.07022 22.9224 8 22C8.06898 20.7412 8.38463 19.5081 8.929 18.371C9.5746 17.0002 9.93878 15.5139 10 14V12.222C10.874 12.582 12 13.525 12 16V18.603L13.743 16.669C16.855 13.215 16.206 9.102 14.949 6.361C15.9045 6.6795 16.725 7.31027 17.2784 8.15176C17.8319 8.99325 18.086 9.99651 18 11H20C20 5.463 15.421 4 13 4H11L12.2 5.599C12.337 5.784 15.062 9.526 13.553 13.287C13.2172 12.3419 12.6018 11.5213 11.7886 10.9342C10.9754 10.3471 10.0028 10.0213 9 10H8V14C7.93102 15.2588 7.61537 16.4919 7.071 17.629C6.4254 18.9998 6.06122 20.4861 6 22C6 25.848 9.823 30 16 30C22.177 30 26 25.848 26 22C26.0015 20.2556 25.6019 18.5343 24.832 16.969ZM12.835 27.526C14.6797 25.999 16.1698 24.0888 17.202 21.928C17.7531 22.8178 18.0661 23.8343 18.1111 24.8799C18.1561 25.9255 17.9316 26.9652 17.459 27.899C16.9754 27.9641 16.488 27.9978 16 28C14.9268 28.0074 13.859 27.8475 12.835 27.526Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button onClick={creditLifeInsurance} className={`${fourthIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9743 4.75781H19.458C21.9084 4.75779 23.8492 4.75777 25.3681 4.962C26.9313 5.17216 28.1967 5.61499 29.1945 6.6128C30.1923 7.61063 30.6351 8.87589 30.8453 10.4391C30.9659 11.3363 31.0153 12.3806 31.0355 13.5902C31.0447 13.6447 31.0495 13.7007 31.0495 13.7578C31.0495 13.8049 31.0463 13.851 31.04 13.8963C31.0495 14.6506 31.0495 15.4669 31.0495 16.3493V16.4997C31.0495 18.9501 31.0495 20.8909 30.8453 22.4098C30.6351 23.973 30.1923 25.2383 29.1945 26.2362C28.1967 27.2339 26.9313 27.6767 25.3681 27.887C23.8492 28.0911 21.9084 28.0911 19.458 28.0911H13.9743C11.5239 28.0911 9.58307 28.0911 8.06412 27.887C6.50089 27.6767 5.23563 27.2339 4.2378 26.2362C3.23999 25.2383 2.79716 23.973 2.587 22.4098C2.38277 20.8909 2.38279 18.9501 2.38281 16.4997V16.3493C2.3828 15.4669 2.3828 14.6506 2.39233 13.8963C2.38605 13.851 2.38281 13.8047 2.38281 13.7578C2.38281 13.7007 2.3876 13.6447 2.3968 13.5902C2.417 12.3806 2.46637 11.3363 2.587 10.4391C2.79716 8.87589 3.23999 7.61063 4.2378 6.6128C5.23563 5.61499 6.50089 5.17216 8.06412 4.962C9.58307 4.75777 11.5239 4.75779 13.9743 4.75781ZM4.38547 14.7578C4.38293 15.2757 4.38281 15.8299 4.38281 16.4245C4.38281 18.9669 4.38493 20.7731 4.56916 22.1434C4.74951 23.4847 5.08773 24.2577 5.65201 24.8219C6.21629 25.3862 6.98916 25.7245 8.33061 25.9047C9.70083 26.089 11.5071 26.0911 14.0495 26.0911H19.3828C21.9252 26.0911 23.7315 26.089 25.1017 25.9047C26.4431 25.7245 27.216 25.3862 27.7803 24.8219C28.3445 24.2577 28.6828 23.4847 28.8631 22.1434C29.0473 20.7731 29.0495 18.9669 29.0495 16.4245C29.0495 15.8299 29.0493 15.2757 29.0468 14.7578H4.38547ZM29.0147 12.7578H4.41757C4.44367 11.9755 4.48931 11.2996 4.56916 10.7056C4.74951 9.36416 5.08773 8.59129 5.65201 8.02701C6.21629 7.46273 6.98916 7.12451 8.33061 6.94416C9.70083 6.75993 11.5071 6.75781 14.0495 6.75781H19.3828C21.9252 6.75781 23.7315 6.75993 25.1017 6.94416C26.4431 7.12451 27.216 7.46273 27.7803 8.02701C28.3445 8.59129 28.6828 9.36416 28.8631 10.7056C28.9429 11.2996 28.9887 11.9755 29.0147 12.7578ZM7.71615 21.7578C7.71615 21.2055 8.16387 20.7578 8.71615 20.7578H14.0495C14.6017 20.7578 15.0495 21.2055 15.0495 21.7578C15.0495 22.3101 14.6017 22.7578 14.0495 22.7578H8.71615C8.16387 22.7578 7.71615 22.3101 7.71615 21.7578ZM16.3828 21.7578C16.3828 21.2055 16.8305 20.7578 17.3828 20.7578H19.3828C19.9351 20.7578 20.3828 21.2055 20.3828 21.7578C20.3828 22.3101 19.9351 22.7578 19.3828 22.7578H17.3828C16.8305 22.7578 16.3828 22.3101 16.3828 21.7578Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <button onClick={groupLifeInsurance} className={`${fifthIcon ? "text-[#009677] mb-[-22px] border-b-[2px]  border-b-[#009677] pb-[20px] " : ""}`}>
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M30.5617 24.0718C33.0734 25.7768 34.8334 28.0868 34.8334 31.1668V36.6668H42.1667V31.1668C42.1667 27.1702 35.6217 24.8052 30.5617 24.0718ZM27.5 22.0002C31.5517 22.0002 34.8334 18.7185 34.8334 14.6668C34.8334 10.6152 31.5517 7.3335 27.5 7.3335C26.6384 7.3335 25.8317 7.51683 25.0617 7.7735C26.6393 9.72456 27.5 12.1577 27.5 14.6668C27.5 17.1759 26.6393 19.6091 25.0617 21.5602C25.8317 21.8168 26.6384 22.0002 27.5 22.0002ZM16.5 22.0002C20.5517 22.0002 23.8334 18.7185 23.8334 14.6668C23.8334 10.6152 20.5517 7.3335 16.5 7.3335C12.4484 7.3335 9.16671 10.6152 9.16671 14.6668C9.16671 18.7185 12.4484 22.0002 16.5 22.0002ZM16.5 11.0002C18.5167 11.0002 20.1667 12.6502 20.1667 14.6668C20.1667 16.6835 18.5167 18.3335 16.5 18.3335C14.4834 18.3335 12.8334 16.6835 12.8334 14.6668C12.8334 12.6502 14.4834 11.0002 16.5 11.0002ZM16.5 23.8335C11.605 23.8335 1.83337 26.2902 1.83337 31.1668V36.6668H31.1667V31.1668C31.1667 26.2902 21.395 23.8335 16.5 23.8335ZM27.5 33.0002H5.50004V31.1852C5.86671 29.8652 11.55 27.5002 16.5 27.5002C21.45 27.5002 27.1334 29.8652 27.5 31.1668V33.0002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {firstIcon && <FirstIcon handleQuickQuotes={handleQuickQuotes} />}
            </div>
          </div>
        </>
      )}

      {/* Welcome Modal 1 */}
      {modalOpen && <Modal1 setModalOpen={() => setModalOpen()} handleCloseModal1={handleCloseModal1} handleOpenModal2={handleOpenModal2} handleOpenModal={handleOpenModal} />}
      {/* Welcome Modal 2 */}
      {modalOpen2 && <Modal2 setModalOpen2={() => setModalOpen2()} handleCloseModal1={handleCloseModal1} handleOpenModal2={handleOpenModal2} handleOpenModal={handleOpenModal} />}
      {/* Welcome Modal 3 */}
      {modalOpen3 && <Modal3 setModalOpen3={() => setModalOpen3()} handleCloseModal1={handleCloseModal1} handleOpenModal={handleOpenModal} />}
    </>
  );
}

export default Dashboard;
