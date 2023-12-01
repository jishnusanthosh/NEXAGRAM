import React from 'react';

const FacebookButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border shadow-sm bg-white flex items-stretch justify-between gap-2 pl-3 pr-7 py-3 rounded-xl border-solid border-black border-opacity-30 max-md:pr-5"
    >
      <img
        loading="lazy"
        src="./facebook.png"
        className="aspect-[1.64] object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
        alt="Facebook Logo"
      />
      <div className="text-black text-xl font-semibold self-center my-auto">
        Sign in with Facebook
      </div>
    </button>
  );
};

export default FacebookButton;
