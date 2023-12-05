import React, { useState } from 'react';
import LogoAndSlogan from '../../Components/User/logoAndSlogan';
import SignUpButton from '../../Components/User/Buttons/SignUpButton';
import GoogleButton from '../../Components/User/Buttons/GoogleButton';
import FacebookButton from '../../Components/User/Buttons/FacebookButton';
import '../../Assets/Styles/tailwind.css';

// SignUp functional component
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password and confirm password
    if (password !== confirmPassword) {
      console.error('Password and confirm password do not match');
      return;
    }

    // Continue with your form submission logic
    console.log('Form submitted with the following data:');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  
    // Other form submission logic...
  };

  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log('Google Sign In');
  };

  const handleFacebookSignIn = () => {
    // Add your Facebook sign-in logic here
    console.log('Facebook Sign In');
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Section - Logo and Slogan */}
        <LogoAndSlogan />

        {/* Right Section - SignUp Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-500 flex w-[618px] max-w-full flex-col items-center pb-9 px-10 rounded-3xl"
        >
          <div className="w-[410px] max-w-full flex flex-col items-center mb-9">
            <div className="self-stretch gap-5 flex md:flex-col md:items-stretch md:gap-0">
              <div className="flex flex-col items-stretch w-[34%] md:w-full md:ml-0">
                <div className="flex grow flex-col items-stretch mt-36 md:mt-10">
                  <div className="flex flex-col items-stretch w-[50%] ml-5 md:w-full md:ml-0">
                    <img
                      loading="lazy"
                      alt="Descriptive text for the image"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4277e3b6-a2bc-450e-b9d0-c339bcae665f?apiKey=57be2cfd74b9487e9b7782c4cc8cc742&"
                      className="aspect-[0.40] object-contain object-center w-full h-[100px] overflow-hidden"
                    />
                  </div>
                  <div className="text-black text-3xl font-bold">Sign Up</div>
                  <div className="text-black text-xl font-semibold ml-4 self-start md:ml-2.5 md:mt-4">
                    E-mail
                  </div>
                </div>
              </div>
            </div>
            {/* Email input */}
            <input
              type="email"
              name="email"
              className="text-black text-lg font-semibold shadow-sm bg-slate-100 self-stretch justify-center px-7 py-4 rounded-3xl items-start"
            />
            <div className="flex w-[382px] max-w-full justify-between gap-5 items-start">
              <div className="text-black text-xl font-semibold">Password</div>
            </div>
            {/* Password input */}
            <input
              type="password"
              name="password"
              className="shadow-sm bg-slate-100 self-stretch flex items-stretch justify-between gap-5 pl-4 pr-9 py-4 rounded-3xl md:pr-5"
            />
          </div>
          <div className="flex w-[382px] max-w-full justify-between gap-5 items-start">
            <div className="text-black text-xl font-semibold">Confirm Password</div>
          </div>
          {/* Confirm Password input */}
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="shadow-sm bg-slate-100 self-stretch flex items-stretch justify-between gap-5 pl-4 pr-9 py-4 rounded-3xl md:pr-5"
          />

           <br />

          <SignUpButton onClick={handleSubmit} />
          <br />
          <GoogleButton onClick={handleGoogleSignIn} />
          <br />
          <FacebookButton onClick={handleFacebookSignIn} />
        </form>
      </div>
    </div>
  );
};

// Exporting the SignUp component
export default SignUp;
