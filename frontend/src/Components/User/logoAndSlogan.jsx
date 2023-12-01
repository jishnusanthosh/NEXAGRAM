import React from 'react';

const LogoAndSlogan = () => {
  return (
    <div className="w-full md:w-6/12 md:ml-5 mb-10">
      <img
        loading="lazy"
        alt="logo"
        src="logo.png"
        className="relative  aspect-[1.43] object-cover object-center pr-13 w-[500px] overflow-hidden"
      />
      <span className="relative flex-col text-white  text-5xl font-bold">
        Let’s Explore 
        the world together
        <br/>
        <span className='text-gray-400' >Join now</span>
      </span>
    </div>
  );
};

export default LogoAndSlogan;
