import React from 'react';

const SignInButton = ({ onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-white text-2xl  font-semibold shadow-sm bg-blue-400 self-stretch justify-center items-center py-3 rounded-2xl "
    >
      Sign In
    </button>
  );
};

export default SignInButton;
