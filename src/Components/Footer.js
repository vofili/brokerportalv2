import React from "react";

function Footer() {
  const time = new Date().getFullYear();
  return (
    <>
      {/* Footer */}
      <div className=" flex justify-between w-[85%] items-center mt-[70px]  ">
        <h3 className="text-[#009677] font-semibold ">Broker Platform © -{time} </h3> <h3 className="text-[#009677] font-semibold ">Nubeero</h3>
      </div>
    </>
  );
}

export default Footer;
