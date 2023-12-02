import React from "react";

const LogoAndSlogan = () => {
  return (
    <div className="w-full md:w-7/12 md:ml-5 mb-10 mt-12  items-center flex">
      <img
        loading="lazy"
        alt="logo"
        src="NewLogo.png"
        className="relative object-cover object-center pr-13 w-[120px] overflow-hidden"
      />
      <div className="ml-4 flex-col">
        <span className="text-white text-7xl font-bold">N</span>
        <span className="text-white text-3xl font-bold">EXAGRAM</span>
      </div>
    </div>
  );
};

export default LogoAndSlogan;
