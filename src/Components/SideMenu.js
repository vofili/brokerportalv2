import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/logo.png";

function SideMenu({ children }) {
  const [isActive, setIsActive] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [toggleGeneral, setToggleGeneral] = useState(true);
  const [toggleClaims, setToggleClaims] = useState(true);
  const [toggleLifeClaim, setToggleLifeClaim] = useState(true);
  const [toggleClientManagement, setToggleClientManagement] = useState(true);
  const [togglePayment, setTogglePayment] = useState(true);
  const [toggleReports, setToggleReports] = useState(true);
  const [lifeActive, setLifeActive] = useState(null);
  const [contactInfo, setContactInfo] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleDropdown = (id) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === id ? null : id));
  };
  function handleIsActive() {
    setIsActive(true);
    window.scroll(0, 0);
  }
  const handleLifeActive = (id) => {
    window.scroll(0, 0);
    setLifeActive(id);
  };
  function handleContactInfo() {
    setContactInfo(!contactInfo);
  }
  const lifeInsurance = [
    {
      path: "/creditlife",
      name: "Credit Life",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.01188 5V4.25H2.41764L2.28175 4.82849L3.01188 5ZM11.9978 22.0001L11.8404 22.7334L11.9978 22.7672L12.1552 22.7334L11.9978 22.0001ZM20.9838 5L21.7139 4.82849L21.578 4.25H20.9838V5ZM11.9978 1.25C10.0309 1.25 8.49636 2.10185 7.14156 2.84177C5.74911 3.60226 4.5376 4.25 3.01188 4.25V5.75C4.97407 5.75 6.50651 4.89774 7.86055 4.15823C9.25224 3.39815 10.4667 2.75 11.9978 2.75V1.25ZM12.1552 21.2668C5.66823 19.8748 1.81818 13.3613 3.74201 5.17151L2.28175 4.82849C0.212173 13.6387 4.3474 21.1255 11.8404 22.7334L12.1552 21.2668ZM11.9978 2.75C13.5362 2.75 14.7521 3.39851 16.1416 4.15809C17.494 4.89737 19.0232 5.75 20.9838 5.75V4.25C19.4604 4.25 18.2527 3.60263 16.8611 2.84191C15.5066 2.10149 13.9715 1.25 11.9978 1.25V2.75ZM12.1552 22.7334C19.6482 21.1255 23.7835 13.6387 21.7139 4.82849L20.2537 5.17151C22.1775 13.3613 18.3274 19.8748 11.8404 21.2668L12.1552 22.7334Z"
            fill="currentColor"
          />
          <path d="M13.3662 14L12.4562 12.572L11.5812 14H10.9162L12.1552 12.096L10.9162 10.164H11.6372L12.5472 11.585L13.4152 10.164H14.0802L12.8482 12.061L14.0872 14H13.3662Z" fill="currentColor" />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/grouplife",
      name: "Group Life",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H12C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5H4.5V19.5H19.5V12Z"
            fill="currentColor"
          />
          <path
            d="M11.0145 12.9899L12.252 12.8129L19.854 5.21239C19.9256 5.1432 19.9827 5.06044 20.0221 4.96894C20.0614 4.87744 20.082 4.77902 20.0829 4.67944C20.0838 4.57985 20.0648 4.48109 20.0271 4.38892C19.9894 4.29675 19.9337 4.21301 19.8633 4.14259C19.7929 4.07217 19.7091 4.01648 19.6169 3.97877C19.5248 3.94106 19.426 3.92208 19.3264 3.92295C19.2268 3.92381 19.1284 3.9445 19.0369 3.98381C18.9454 4.02312 18.8627 4.08025 18.7935 4.15189L11.19 11.7524L11.013 12.9899H11.0145ZM20.9145 3.08989C21.1236 3.29884 21.2894 3.54694 21.4026 3.82002C21.5158 4.09309 21.574 4.38579 21.574 4.68139C21.574 4.97698 21.5158 5.26968 21.4026 5.54276C21.2894 5.81583 21.1236 6.06394 20.9145 6.27289L13.137 14.0504C13.0223 14.1655 12.8733 14.2402 12.7125 14.2634L10.2375 14.6174C10.1221 14.634 10.0045 14.6234 9.89395 14.5866C9.78339 14.5498 9.68293 14.4877 9.60053 14.4053C9.51813 14.3229 9.45607 14.2225 9.41926 14.1119C9.38245 14.0013 9.37191 13.8837 9.38848 13.7684L9.74248 11.2934C9.7652 11.1327 9.83942 10.9838 9.95398 10.8689L17.733 3.09139C18.1549 2.66958 18.7271 2.43262 19.3237 2.43262C19.9203 2.43262 20.4925 2.66958 20.9145 3.09139V3.08989Z"
            fill="currentColor"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  const generalInsurance = [
    {
      path: "/motorinsurance",
      name: "Motor Insurance",
      icon: (
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
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/marineinsurance",
      name: "Marine Insurance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 11.1249C0.99985 11.9419 1.25789 12.738 1.73727 13.3995C2.21664 14.061 2.89282 14.5541 3.66921 14.8083C4.44559 15.0625 5.28245 15.0648 6.06024 14.8149C6.83802 14.5651 7.51694 14.0758 8 13.4169C8.48306 14.0758 9.16197 14.5651 9.93976 14.8149C10.7175 15.0648 11.5544 15.0625 12.3308 14.8083C13.1072 14.5541 13.7834 14.061 14.2627 13.3995C14.7421 12.738 15.0002 11.9419 15 11.1249V7.00194L13.72 8.28194L12.23 9.76994C12.0893 9.91064 12.0103 10.1015 12.0103 10.3004C12.0103 10.4994 12.0893 10.6902 12.23 10.8309C12.3707 10.9716 12.5615 11.0507 12.7605 11.0507C12.9595 11.0507 13.1503 10.9716 13.291 10.8309L13.499 10.6229V11.1249C13.499 11.4368 13.4376 11.7457 13.3182 12.0338C13.1989 12.322 13.0239 12.5838 12.8034 12.8043C12.5828 13.0249 12.321 13.1998 12.0329 13.3192C11.7447 13.4385 11.4359 13.4999 11.124 13.4999C10.8121 13.4999 10.5033 13.4385 10.2151 13.3192C9.92698 13.1998 9.66516 13.0249 9.44462 12.8043C9.22408 12.5838 9.04914 12.322 8.92979 12.0338C8.81043 11.7457 8.749 11.4368 8.749 11.1249V5.88494C9.31906 5.70575 9.80612 5.32837 10.122 4.82112C10.4379 4.31388 10.5617 3.7103 10.4711 3.11966C10.3804 2.52901 10.0813 1.99034 9.62783 1.60117C9.17437 1.212 8.59656 0.998047 7.999 0.998047C7.40144 0.998047 6.82363 1.212 6.37017 1.60117C5.91672 1.99034 5.61759 2.52901 5.52694 3.11966C5.4363 3.7103 5.56012 4.31388 5.876 4.82112C6.19188 5.32837 6.67894 5.70575 7.249 5.88494V11.1249C7.249 11.7548 6.99878 12.3589 6.55338 12.8043C6.10798 13.2497 5.50389 13.4999 4.874 13.4999C4.24411 13.4999 3.64002 13.2497 3.19462 12.8043C2.74922 12.3589 2.499 11.7548 2.499 11.1249V10.6229L2.707 10.8309C2.77566 10.9046 2.85846 10.9637 2.95046 11.0047C3.04246 11.0457 3.14177 11.0678 3.24248 11.0695C3.34318 11.0713 3.44321 11.0528 3.5366 11.0151C3.62999 10.9773 3.71482 10.9212 3.78604 10.85C3.85726 10.7788 3.9134 10.6939 3.95112 10.6005C3.98884 10.5072 4.00737 10.4071 4.00559 10.3064C4.00381 10.2057 3.98177 10.1064 3.94078 10.0144C3.89979 9.9224 3.84069 9.8396 3.767 9.77094L2.28 8.28094L1 7.00194V11.1249ZM9 3.49994C9 3.23473 8.89464 2.98037 8.70711 2.79284C8.51957 2.6053 8.26522 2.49994 8 2.49994C7.73478 2.49994 7.48043 2.6053 7.29289 2.79284C7.10536 2.98037 7 3.23473 7 3.49994C7 3.76516 7.10536 4.01951 7.29289 4.20705C7.48043 4.39459 7.73478 4.49994 8 4.49994C8.26522 4.49994 8.51957 4.39459 8.70711 4.20705C8.89464 4.01951 9 3.76516 9 3.49994Z"
            fill="currentColor"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/fireandspecialperil",
      name: "Fire & Special Perils",
      icon: (
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.832 16.969C24.56 16.322 24.25 15.589 23.949 14.684C23.159 12.315 25.683 9.731 25.707 9.707L24.293 8.293C24.153 8.433 20.87 11.771 22.051 15.316C22.377 16.294 22.703 17.066 22.989 17.746C23.6564 19.0646 24.0028 20.5222 24 22C23.8828 23.1912 23.4255 24.3235 22.6826 25.262C21.9396 26.2005 20.9425 26.9055 19.81 27.293C20.1678 25.8907 20.1624 24.4203 19.7945 23.0207C19.4266 21.621 18.7081 20.3381 17.707 19.293L16.663 18.249L16.081 19.606C14.245 23.89 12.06 25.76 10.775 26.54C9.98615 26.0569 9.32326 25.3934 8.84083 24.6041C8.3584 23.8149 8.07022 22.9224 8 22C8.06898 20.7412 8.38463 19.5081 8.929 18.371C9.5746 17.0002 9.93878 15.5139 10 14V12.222C10.874 12.582 12 13.525 12 16V18.603L13.743 16.669C16.855 13.215 16.206 9.102 14.949 6.361C15.9045 6.6795 16.725 7.31027 17.2784 8.15176C17.8319 8.99325 18.086 9.99651 18 11H20C20 5.463 15.421 4 13 4H11L12.2 5.599C12.337 5.784 15.062 9.526 13.553 13.287C13.2172 12.3419 12.6018 11.5213 11.7886 10.9342C10.9754 10.3471 10.0028 10.0213 9 10H8V14C7.93102 15.2588 7.61537 16.4919 7.071 17.629C6.4254 18.9998 6.06122 20.4861 6 22C6 25.848 9.823 30 16 30C22.177 30 26 25.848 26 22C26.0015 20.2556 25.6019 18.5343 24.832 16.969ZM12.835 27.526C14.6797 25.999 16.1698 24.0888 17.202 21.928C17.7531 22.8178 18.0661 23.8343 18.1111 24.8799C18.1561 25.9255 17.9316 26.9652 17.459 27.899C16.9754 27.9641 16.488 27.9978 16 28C14.9268 28.0074 13.859 27.8475 12.835 27.526Z"
            fill="currentColor"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/burglary",
      name: "Burglary",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.5319 11.5434C23.4972 11.4675 22.6759 9.64406 20.8619 7.83C18.4347 5.40656 15.3756 4.125 12.0006 4.125C8.62561 4.125 5.56655 5.40656 3.14217 7.83C1.32811 9.64406 0.506862 11.4675 0.469362 11.5434C0.40585 11.6874 0.373047 11.8431 0.373047 12.0005C0.373047 12.1579 0.40585 12.3135 0.469362 12.4575C0.50405 12.5344 1.3253 14.3569 3.1403 16.1709C5.56655 18.5944 8.62561 19.875 12.0006 19.875C15.3756 19.875 18.4347 18.5944 20.8581 16.1709C22.6731 14.3569 23.4944 12.5344 23.529 12.4575C23.593 12.3137 23.6263 12.1581 23.6268 12.0008C23.6273 11.8434 23.5949 11.6876 23.5319 11.5434ZM19.2137 14.6372C17.2009 16.6191 14.7747 17.625 12.0006 17.625C9.22655 17.625 6.8003 16.6191 4.7903 14.6362C3.99937 13.8537 3.31903 12.9667 2.76811 12C3.31918 11.0337 3.99952 10.1471 4.7903 9.36469C6.80124 7.38094 9.22655 6.375 12.0006 6.375C14.7747 6.375 17.2 7.38094 19.2109 9.36469C20.0018 10.147 20.6821 11.0336 21.2331 12C20.6821 12.9666 20.0018 13.8536 19.2109 14.6362L19.2137 14.6372ZM12.0006 7.875C11.1848 7.875 10.3872 8.11693 9.70889 8.57019C9.03053 9.02345 8.50182 9.66769 8.18961 10.4214C7.8774 11.1752 7.79571 12.0046 7.95487 12.8047C8.11404 13.6049 8.50691 14.3399 9.0838 14.9168C9.66069 15.4937 10.3957 15.8866 11.1959 16.0457C11.996 16.2049 12.8254 16.1232 13.5792 15.811C14.3329 15.4988 14.9772 14.9701 15.4304 14.2917C15.8837 13.6134 16.1256 12.8158 16.1256 12C16.1244 10.9064 15.6894 9.85787 14.9161 9.08455C14.1427 8.31124 13.0942 7.87624 12.0006 7.875ZM12.0006 13.875C11.6298 13.875 11.2673 13.765 10.9589 13.559C10.6506 13.353 10.4103 13.0601 10.2683 12.7175C10.1264 12.3749 10.0893 11.9979 10.1616 11.6342C10.234 11.2705 10.4126 10.9364 10.6748 10.6742C10.937 10.412 11.2711 10.2334 11.6348 10.161C11.9985 10.0887 12.3755 10.1258 12.7181 10.2677C13.0608 10.4096 13.3536 10.65 13.5596 10.9583C13.7656 11.2666 13.8756 11.6292 13.8756 12C13.8756 12.4973 13.6781 12.9742 13.3264 13.3258C12.9748 13.6775 12.4979 13.875 12.0006 13.875Z"
            fill="currentColor"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  const claimsProcessingInsurance = [
    {
      path: "/motorclaim",
      name: "Motor Claims",
      icon: (
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
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/marineclaim",
      name: "Marine Claims",
      icon: (
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 11.1249C0.99985 11.9419 1.25789 12.738 1.73727 13.3995C2.21664 14.061 2.89282 14.5541 3.66921 14.8083C4.44559 15.0625 5.28245 15.0648 6.06024 14.8149C6.83802 14.5651 7.51694 14.0758 8 13.4169C8.48306 14.0758 9.16197 14.5651 9.93976 14.8149C10.7175 15.0648 11.5544 15.0625 12.3308 14.8083C13.1072 14.5541 13.7834 14.061 14.2627 13.3995C14.7421 12.738 15.0002 11.9419 15 11.1249V7.00194L13.72 8.28194L12.23 9.76994C12.0893 9.91064 12.0103 10.1015 12.0103 10.3004C12.0103 10.4994 12.0893 10.6902 12.23 10.8309C12.3707 10.9716 12.5615 11.0507 12.7605 11.0507C12.9595 11.0507 13.1503 10.9716 13.291 10.8309L13.499 10.6229V11.1249C13.499 11.4368 13.4376 11.7457 13.3182 12.0338C13.1989 12.322 13.0239 12.5838 12.8034 12.8043C12.5828 13.0249 12.321 13.1998 12.0329 13.3192C11.7447 13.4385 11.4359 13.4999 11.124 13.4999C10.8121 13.4999 10.5033 13.4385 10.2151 13.3192C9.92698 13.1998 9.66516 13.0249 9.44462 12.8043C9.22408 12.5838 9.04914 12.322 8.92979 12.0338C8.81043 11.7457 8.749 11.4368 8.749 11.1249V5.88494C9.31906 5.70575 9.80612 5.32837 10.122 4.82112C10.4379 4.31388 10.5617 3.7103 10.4711 3.11966C10.3804 2.52901 10.0813 1.99034 9.62783 1.60117C9.17437 1.212 8.59656 0.998047 7.999 0.998047C7.40144 0.998047 6.82363 1.212 6.37017 1.60117C5.91672 1.99034 5.61759 2.52901 5.52694 3.11966C5.4363 3.7103 5.56012 4.31388 5.876 4.82112C6.19188 5.32837 6.67894 5.70575 7.249 5.88494V11.1249C7.249 11.7548 6.99878 12.3589 6.55338 12.8043C6.10798 13.2497 5.50389 13.4999 4.874 13.4999C4.24411 13.4999 3.64002 13.2497 3.19462 12.8043C2.74922 12.3589 2.499 11.7548 2.499 11.1249V10.6229L2.707 10.8309C2.77566 10.9046 2.85846 10.9637 2.95046 11.0047C3.04246 11.0457 3.14177 11.0678 3.24248 11.0695C3.34318 11.0713 3.44321 11.0528 3.5366 11.0151C3.62999 10.9773 3.71482 10.9212 3.78604 10.85C3.85726 10.7788 3.9134 10.6939 3.95112 10.6005C3.98884 10.5072 4.00737 10.4071 4.00559 10.3064C4.00381 10.2057 3.98177 10.1064 3.94078 10.0144C3.89979 9.9224 3.84069 9.8396 3.767 9.77094L2.28 8.28094L1 7.00194V11.1249ZM9 3.49994C9 3.23473 8.89464 2.98037 8.70711 2.79284C8.51957 2.6053 8.26522 2.49994 8 2.49994C7.73478 2.49994 7.48043 2.6053 7.29289 2.79284C7.10536 2.98037 7 3.23473 7 3.49994C7 3.76516 7.10536 4.01951 7.29289 4.20705C7.48043 4.39459 7.73478 4.49994 8 4.49994C8.26522 4.49994 8.51957 4.39459 8.70711 4.20705C8.89464 4.01951 9 3.76516 9 3.49994Z"
            fill="currentColor"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/fireclaim",
      name: "Fire Claims",
      icon: (
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24.832 16.969C24.56 16.322 24.25 15.589 23.949 14.684C23.159 12.315 25.683 9.731 25.707 9.707L24.293 8.293C24.153 8.433 20.87 11.771 22.051 15.316C22.377 16.294 22.703 17.066 22.989 17.746C23.6564 19.0646 24.0028 20.5222 24 22C23.8828 23.1912 23.4255 24.3235 22.6826 25.262C21.9396 26.2005 20.9425 26.9055 19.81 27.293C20.1678 25.8907 20.1624 24.4203 19.7945 23.0207C19.4266 21.621 18.7081 20.3381 17.707 19.293L16.663 18.249L16.081 19.606C14.245 23.89 12.06 25.76 10.775 26.54C9.98615 26.0569 9.32326 25.3934 8.84083 24.6041C8.3584 23.8149 8.07022 22.9224 8 22C8.06898 20.7412 8.38463 19.5081 8.929 18.371C9.5746 17.0002 9.93878 15.5139 10 14V12.222C10.874 12.582 12 13.525 12 16V18.603L13.743 16.669C16.855 13.215 16.206 9.102 14.949 6.361C15.9045 6.6795 16.725 7.31027 17.2784 8.15176C17.8319 8.99325 18.086 9.99651 18 11H20C20 5.463 15.421 4 13 4H11L12.2 5.599C12.337 5.784 15.062 9.526 13.553 13.287C13.2172 12.3419 12.6018 11.5213 11.7886 10.9342C10.9754 10.3471 10.0028 10.0213 9 10H8V14C7.93102 15.2588 7.61537 16.4919 7.071 17.629C6.4254 18.9998 6.06122 20.4861 6 22C6 25.848 9.823 30 16 30C22.177 30 26 25.848 26 22C26.0015 20.2556 25.6019 18.5343 24.832 16.969ZM12.835 27.526C14.6797 25.999 16.1698 24.0888 17.202 21.928C17.7531 22.8178 18.0661 23.8343 18.1111 24.8799C18.1561 25.9255 17.9316 26.9652 17.459 27.899C16.9754 27.9641 16.488 27.9978 16 28C14.9268 28.0074 13.859 27.8475 12.835 27.526Z"
            fill="currentColor"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/burglaryclaim",
      name: "Burglary Claims",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.5153 9.72831L13.0153 2.65206C13.0116 2.64886 13.0082 2.64541 13.005 2.64175C12.7289 2.39062 12.369 2.25146 11.9958 2.25146C11.6225 2.25146 11.2627 2.39062 10.9866 2.64175L10.9763 2.65206L3.48469 9.72831C3.33187 9.86883 3.20989 10.0395 3.12646 10.2296C3.04303 10.4197 2.99997 10.6251 3 10.8327V19.4999C3 19.8977 3.15804 20.2792 3.43934 20.5605C3.72064 20.8418 4.10218 20.9999 4.5 20.9999H9C9.39782 20.9999 9.77936 20.8418 10.0607 20.5605C10.342 20.2792 10.5 19.8977 10.5 19.4999V14.9999H13.5V19.4999C13.5 19.8977 13.658 20.2792 13.9393 20.5605C14.2206 20.8418 14.6022 20.9999 15 20.9999H19.5C19.8978 20.9999 20.2794 20.8418 20.5607 20.5605C20.842 20.2792 21 19.8977 21 19.4999V10.8327C21 10.6251 20.957 10.4197 20.8735 10.2296C20.7901 10.0395 20.6681 9.86883 20.5153 9.72831ZM19.5 19.4999H15V14.9999C15 14.602 14.842 14.2205 14.5607 13.9392C14.2794 13.6579 13.8978 13.4999 13.5 13.4999H10.5C10.1022 13.4999 9.72064 13.6579 9.43934 13.9392C9.15804 14.2205 9 14.602 9 14.9999V19.4999H4.5V10.8327L4.51031 10.8233L12 3.74987L19.4906 10.8214L19.5009 10.8308L19.5 19.4999Z"
            fill="currentColor"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  const lifeClaims = [
    {
      path: "/grouplifeclaim",
      name: "Group Life Claims",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M4 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/creditlifeclaim",
      name: "Credit Life Claims",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.01188 5V4.25H2.41764L2.28175 4.82849L3.01188 5ZM11.9978 22.0001L11.8404 22.7334L11.9978 22.7672L12.1552 22.7334L11.9978 22.0001ZM20.9838 5L21.7139 4.82849L21.578 4.25H20.9838V5ZM11.9978 1.25C10.0309 1.25 8.49636 2.10185 7.14156 2.84177C5.74911 3.60226 4.5376 4.25 3.01188 4.25V5.75C4.97407 5.75 6.50651 4.89774 7.86055 4.15823C9.25224 3.39815 10.4667 2.75 11.9978 2.75V1.25ZM12.1552 21.2668C5.66823 19.8748 1.81818 13.3613 3.74201 5.17151L2.28175 4.82849C0.212173 13.6387 4.3474 21.1255 11.8404 22.7334L12.1552 21.2668ZM11.9978 2.75C13.5362 2.75 14.7521 3.39851 16.1416 4.15809C17.494 4.89737 19.0232 5.75 20.9838 5.75V4.25C19.4604 4.25 18.2527 3.60263 16.8611 2.84191C15.5066 2.10149 13.9715 1.25 11.9978 1.25V2.75ZM12.1552 22.7334C19.6482 21.1255 23.7835 13.6387 21.7139 4.82849L20.2537 5.17151C22.1775 13.3613 18.3274 19.8748 11.8404 21.2668L12.1552 22.7334Z"
            fill="currentColor"
          />
          <path d="M13.3662 14L12.4562 12.572L11.5812 14H10.9162L12.1552 12.096L10.9162 10.164H11.6372L12.5472 11.585L13.4152 10.164H14.0802L12.8482 12.061L14.0872 14H13.3662Z" fill="currentColor" />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  const clientManagement = [
    {
      path: "",
      name: "Contact Info",
      icon: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6619 19.0522L16.1819 20.5722L19.2219 17.5322" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12.3818 10.8724C12.2818 10.8624 12.1618 10.8624 12.0518 10.8724C9.67178 10.7924 7.78178 8.84244 7.78178 6.44244C7.77178 3.99244 9.76178 2.00244 12.2118 2.00244C14.6618 2.00244 16.6518 3.99244 16.6518 6.44244C16.6518 8.84244 14.7518 10.7924 12.3818 10.8724Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.2119 21.8126C10.3919 21.8126 8.58196 21.3526 7.20196 20.4326C4.78196 18.8126 4.78196 16.1726 7.20196 14.5626C9.95196 12.7226 14.4619 12.7226 17.2119 14.5626"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  const payment = [
    {
      path: "/paymentdashboard",
      name: "Payment Dashboard",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 4H2V18H22V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 8H21" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  const reports = [
    {
      path: "",
      name: "Policy Reports",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M20.2977 4.85331L12.4392 10.3299M20.2977 4.85331C20.7063 5.43959 19.7999 7.69861 19.6632 8.40529M20.2977 4.85331C19.8891 4.26703 17.456 4.33524 16.7458 4.21884"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "",
      name: "Claims Reports",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.01188 5V4.25H2.41764L2.28175 4.82849L3.01188 5ZM11.9978 22.0001L11.8404 22.7334L11.9978 22.7672L12.1552 22.7334L11.9978 22.0001ZM20.9838 5L21.7139 4.82849L21.578 4.25H20.9838V5ZM11.9978 1.25C10.0309 1.25 8.49636 2.10185 7.14156 2.84177C5.74911 3.60226 4.5376 4.25 3.01188 4.25V5.75C4.97407 5.75 6.50651 4.89774 7.86055 4.15823C9.25224 3.39815 10.4667 2.75 11.9978 2.75V1.25ZM12.1552 21.2668C5.66823 19.8748 1.81818 13.3613 3.74201 5.17151L2.28175 4.82849C0.212173 13.6387 4.3474 21.1255 11.8404 22.7334L12.1552 21.2668ZM11.9978 2.75C13.5362 2.75 14.7521 3.39851 16.1416 4.15809C17.494 4.89737 19.0232 5.75 20.9838 5.75V4.25C19.4604 4.25 18.2527 3.60263 16.8611 2.84191C15.5066 2.10149 13.9715 1.25 11.9978 1.25V2.75ZM12.1552 22.7334C19.6482 21.1255 23.7835 13.6387 21.7139 4.82849L20.2537 5.17151C22.1775 13.3613 18.3274 19.8748 11.8404 21.2668L12.1552 22.7334Z"
            fill="currentColor"
          />
          <path d="M13.3662 14L12.4562 12.572L11.5812 14H10.9162L12.1552 12.096L10.9162 10.164H11.6372L12.5472 11.585L13.4152 10.164H14.0802L12.8482 12.061L14.0872 14H13.3662Z" fill="currentColor" />
        </svg>
      ),
      arrow: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9999 6L9.70703 11.2929C9.37369 11.6262 9.20703 11.7929 9.20703 12C9.20703 12.2071 9.37369 12.3738 9.70703 12.7071L14.9999 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="opacity-[1] mobile:hidden sm:hidden md:hidden lg:block  fixed top-0 shadow-lg left-0 pt-[32px] bg-white rounded-r-[24px] drop-shadow-[24px] shadow-[#0000003D] w-[328px] h-fit pb-[50px] ">
        <div className=" overflow-x-scroll h-[100vh]    ">
          <div className=" w-[150px] ml-[90px]  mb-[32px] h-[35px] ">
            <img src={logo} alt="old mutual" />
          </div>
          {/* User Persona */}
          <div className="h-[100px] flex flex-col justify-center items-center  py-[18px] w-[100%] bg-[#f1f2f2] ">
            <Link to="/brokerprofile">
              <svg className="transition-transform transform hover:scale-110 " width="40" height="40" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.3847 25.644C34.7995 27.2292 32.6495 28.1197 30.4077 28.1197C28.1659 28.1197 26.0159 27.2292 24.4307 25.644C22.8454 24.0588 21.9549 21.9087 21.9549 19.6669C21.9549 17.4251 22.8454 15.2751 24.4307 13.6899C26.0159 12.1047 28.1659 11.2141 30.4077 11.2141C32.6495 11.2141 34.7995 12.1047 36.3847 13.6899C37.9699 15.2751 38.8605 17.4251 38.8605 19.6669C38.8605 21.9087 37.9699 24.0588 36.3847 25.644ZM10.7827 43.5854C10.7827 43.0942 11.1049 42.2552 12.0014 41.1952C12.8695 40.169 14.1796 39.0528 15.8975 38.0198C19.3284 35.9566 24.3067 34.2729 30.4077 34.2729C36.7507 34.2729 41.7285 35.7932 45.089 37.7607C46.7712 38.7456 48.0282 39.8305 48.8542 40.8724C49.6892 41.9258 50.0327 42.8672 50.0327 43.5854V48.891H10.7827V43.5854Z"
                  stroke="#818285"
                  strokeWidth="4"
                />
              </svg>
            </Link>
            <div className="flex justify-between items-center mt-[15px] w-[50%]">
              <h3 className="text-[14px] font-medium opacity-[1]  tracking-[0.32px] text-left text-[#808285] ">OFILI VALENTINE</h3>
              <Link to="/login">
                <svg width="17" height="17" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.5 10H45C47.7615 10 50 12.2386 50 15V45C50 47.7615 47.7615 50 45 50H37.5M20 20L10 30M10 30L20 40M10 30H40" stroke="#818285" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          {/* DASHBOARD */}
          <div className=" w-[90%] text-left flex flex-col justify-between items-center mt-[36.88px] ">
            <Link onClick={handleIsActive} className={isActive ? "text-[#009677] w-[75%]" : "text-[#58595B] w-[75%"} to="/dashboard">
              <div className=" opacity-[1]    flex  items-center  ">
                <svg className="mr-[10px]" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <h3 className="text-[14px]  font-medium  ">Dashboard</h3>
              </div>
            </Link>
          </div>
          {/* LIFE INSURANCE CONTAINER*/}
          <div className=" flex flex-col w-[90%]  mt-[25px]  justify-between items-center opacity-[1]">
            <h2 onClick={() => setToggle(!toggle)} className=" opacity-[1] cursor-pointer w-[75%] text-[14px] text-left tracking-[0.26px] font-medium  text-[#808285]  ">
              LIFE INSURANCE
            </h2>
            {toggle && (
              <div className=" mt-[15px] pl-[20px] w-[90%] ">
                {lifeInsurance.map((item, id) => (
                  <NavLink onClick={() => handleLifeActive(id)} key={id} className=" mb-[20px] hover:text-[#2778C3]  opacity-[1] text-[#58595B] flex justify-between items-center w-[100%]  " to={item.path}>
                    <div style={{ color: id === lifeActive ? "#2778C3" : "#58595B" }} className=" justify-between w-[120px] flex items-center ">
                      <span>{item.icon}</span>
                      <h3 className="text-[14px] tracking-[0.32px] font-medium  ">{item.name}</h3>
                    </div>
                    <div>{item.arrow}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* GENERAL INSURANCE CONTAINER */}
          <div className=" flex flex-col w-[90%]   mt-[25px]  justify-between items-center opacity-[1]">
            <h2 onClick={() => setToggleGeneral(!toggleGeneral)} className=" opacity-[1] cursor-pointer w-[75%] text-[14px] text-left tracking-[0.26px] font-medium  text-[#808285]  ">
              GENERAL INSURANCE
            </h2>
            {toggleGeneral && (
              <div className=" mt-[15px] pl-[20px] w-[90%] ">
                {generalInsurance.map((item, id) => (
                  <NavLink onClick={() => window.scroll(0, 0)} key={id} className=" mb-[20px] hover:text-[#2778C3]  opacity-[1] text-[#58595B] flex justify-between items-center w-[100%]  " to={item.path}>
                    <div className=" justify-between  flex items-center ">
                      <span className="mr-[15px]">{item.icon}</span>
                      <h3 className="text-[14px] tracking-[0.32px] font-medium  ">{item.name}</h3>
                    </div>
                    <div>{item.arrow}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* CLAIMS PROCESSING INSURANCE CONTAINER */}
          <div className=" flex flex-col w-[90%]   mt-[25px]  justify-between items-center opacity-[1]">
            <h2 onClick={() => setToggleClaims(!toggleClaims)} className=" opacity-[1] cursor-pointer w-[75%] text-[14px] text-left tracking-[0.26px] font-medium  text-[#808285]  ">
              CLAIMS PROCESSING
            </h2>
            {toggleClaims && (
              <div className=" mt-[15px] pl-[20px] w-[90%] ">
                {claimsProcessingInsurance.map((item, id) => (
                  <NavLink onClick={() => window.scroll(0, 0)} key={id} className="  mb-[20px] hover:text-[#2778C3]  opacity-[1] text-[#58595B] flex justify-between items-center w-[100%]  " to={item.path}>
                    <div className=" justify-between  flex items-center ">
                      <span className="mr-[15px]">{item.icon}</span>
                      <h3 className="text-[14px] tracking-[0.32px] font-medium  ">{item.name}</h3>
                    </div>
                    <div>{item.arrow}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* LIFE CLAIMS CONTAINER */}
          <div className=" flex flex-col w-[90%]   mt-[25px]  justify-between items-center opacity-[1]">
            <h2 onClick={() => setToggleLifeClaim(!toggleLifeClaim)} className=" opacity-[1] cursor-pointer w-[75%] text-[14px] text-left tracking-[0.26px] font-medium  text-[#808285]  ">
              LIFE CLAIMS
            </h2>
            {toggleLifeClaim && (
              <div className=" mt-[15px] pl-[20px] w-[90%] ">
                {lifeClaims.map((item, id) => (
                  <NavLink onClick={() => window.scroll(0, 0)} key={id} className=" mb-[20px] hover:text-[#2778C3]  opacity-[1] text-[#58595B] flex justify-between items-center w-[100%]  " to={item.path}>
                    <div className=" justify-between  flex items-center ">
                      <span className="mr-[15px]">{item.icon}</span>
                      <h3 className="text-[14px] tracking-[0.32px] font-medium  ">{item.name}</h3>
                    </div>
                    <div>{item.arrow}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* CLIENT MANAGEMENT CONTAINER */}
          <div className=" flex flex-col w-[90%]    mt-[25px]  justify-between items-center opacity-[1]">
            <h2 onClick={() => setToggleClientManagement(!toggleClientManagement)} className=" opacity-[1] cursor-pointer w-[75%] text-[14px] text-left tracking-[0.26px] font-medium  text-[#808285]  ">
              CLIENT MANAGEMENT
            </h2>
            {toggleClientManagement && (
              <div className=" mt-[15px] pl-[20px] w-[90%] ">
                {clientManagement.map((item, id) => (
                  <NavLink onClick={handleContactInfo} key={id} className=" mb-[20px] hover:text-[#2778C3]  opacity-[1] text-[#58595B] flex justify-between items-center w-[100%]  " to={item.path}>
                    <div className=" justify-between  flex items-center ">
                      <span className="mr-[15px]">{item.icon}</span>
                      <h3 className="text-[14px] tracking-[0.32px] font-medium  ">{item.name}</h3>
                    </div>
                    <div>
                      {contactInfo ? (
                        <div>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12.5L11.3243 17.3806C11.6451 17.6747 11.8055 17.8217 12 17.8217C12.1945 17.8217 12.3549 17.6747 12.6757 17.3806L18 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6L11.3243 10.8806C11.6451 11.1747 11.8055 11.3217 12 11.3217C12.1945 11.3217 12.3549 11.1747 12.6757 10.8806L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : (
                        item.arrow
                      )}
                    </div>
                  </NavLink>
                ))}
              </div>
            )}{" "}
            {contactInfo && (
              <div className="w-full bg-[#F6F7F9] h-[80px] text-[#979797] items-center flex justify-center text-[20px] ">
                <h2>Customer Information</h2>
              </div>
            )}
          </div>
          {/* PAYMENT DASHBOARD CONTAINER */}
          <div className=" flex flex-col w-[90%]    mt-[25px]  justify-between items-center opacity-[1]">
            <h2 onClick={() => setTogglePayment(!togglePayment)} className=" opacity-[1] cursor-pointer w-[75%] text-[14px] text-left tracking-[0.26px] font-medium  text-[#808285]  ">
              PAYMENTS
            </h2>
            {togglePayment && (
              <div className=" mt-[15px] pl-[20px] w-[90%] ">
                {payment.map((item, id) => (
                  <NavLink onClick={() => window.scroll(0, 0)} key={id} className=" mb-[20px] hover:text-[#2778C3]  opacity-[1] text-[#58595B] flex justify-between items-center w-[100%]  " to={item.path}>
                    <div className=" justify-between  flex items-center ">
                      <span className="mr-[15px]">{item.icon}</span>
                      <h3 className="text-[14px] tracking-[0.32px] font-medium  ">{item.name}</h3>
                    </div>
                    <div>{item.arrow}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          {/* REPORTS CONTAINER */}
          <div className=" flex flex-col w-[90%] pb-[200px]   mt-[25px]  justify-between items-center opacity-[1]">
            <h2 onClick={() => setToggleReports(!toggleReports)} className=" opacity-[1] cursor-pointer w-[75%] text-[14px] text-left tracking-[0.26px] font-medium  text-[#808285]  ">
              REPORTS
            </h2>
            {toggleReports && (
              <div className=" mt-[15px] pl-[20px] w-[90%] ">
                {reports.map((item, id) => (
                  <NavLink onClick={() => toggleDropdown(id)} key={id} to={item.path}>
                    <div className=" mb-[20px] hover:text-[#2778C3]  opacity-[1] text-[#58595B] flex justify-between items-center w-[100%]  ">
                      <div className=" justify-between  flex items-center ">
                        <span className="mr-[15px]">{item.icon}</span>
                        <h3 className="text-[14px] tracking-[0.32px] font-medium  ">{item.name}</h3>
                      </div>
                      <div>
                        {" "}
                        {activeItem === id ? (
                          <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 12.5L11.3243 17.3806C11.6451 17.6747 11.8055 17.8217 12 17.8217C12.1945 17.8217 12.3549 17.6747 12.6757 17.3806L18 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M6 6L11.3243 10.8806C11.6451 11.1747 11.8055 11.3217 12 11.3217C12.1945 11.3217 12.3549 11.1747 12.6757 10.8806L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        ) : (
                          item.arrow
                        )}
                      </div>
                    </div>
                    {activeItem === id && (
                      <div className="w-full py-5 items-center flex bg-[#F6F7F9] ">
                        <ul className=" h-[250px]  pl-[60px]  text-left text-[#979797] flex flex-col justify-between text-[20px] ">
                          <li className="hover:text-[#58595B]">Claims</li>
                          <li className="hover:text-[#58595B]">Products</li>
                          <li className="hover:text-[#58595B]">KYC</li>
                          <li className="hover:text-[#58595B]">Beneficiary</li>
                          <li className="hover:text-[#58595B]">Compare</li>
                        </ul>
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

export default SideMenu;
