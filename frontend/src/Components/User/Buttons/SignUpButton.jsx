import React from 'react';

const SignUpButton = ({ onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-white text-2xl  font-semibold shadow-sm bg-blue-600 self-stretch justify-center items-center py-3 mr-14 ml-14 rounded-2xl "
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;
