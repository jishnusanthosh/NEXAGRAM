import React from 'react';

const GoogleButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border shadow-sm bg-white flex items-stretch justify-between gap-4 pl-7 pr-10 py-3 rounded-xl border-solid border-black border-opacity-30 max-md:px-5"
    >
      <img
        loading="lazy"
        src="./google.png"
        className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
        alt="Google Logo"
      />
      <div className="text-black text-xl font-semibold mt-1 self-start">
        Sign in with Google
      </div>
    </button>
  );
};

export default GoogleButton;
