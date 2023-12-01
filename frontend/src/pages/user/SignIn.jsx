import React from 'react';
import LogoAndSlogan from '../../Components/User/logoAndSlogan';
import SignInButton from '../../Components/User/Buttons/SignInButton';
import GoogleButton from '../../Components/User/Buttons/GoogleButton';
import FacebookButton from '../../Components/User/Buttons/FacebookButton';
import '../../Assets/Styles/tailwind.css';

// SignIn functional component
const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can access the email and password values using e.target.elements
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    // Perform further actions like API calls or state updates
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
    <div className="bg-indigo-500 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Section - Logo and Slogan */}
        <LogoAndSlogan />

        {/* Right Section - SignUp Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white flex w-[618px] max-w-full flex-col items-center  pb-9 px-10 rounded-3xl"
        >
          <div className="flex w-[410px] max-w-full flex-col items-center mb-9">
            <div className="self-stretch">
              <div className="gap-5 flex md:flex-col md:items-stretch md:gap-0">
                <div className="flex flex-col items-stretch w-[34%] md:w-full md:ml-0">
                  <div className="flex grow flex-col items-stretch mt-36 md:mt-10">
                    
                    <div className="flex flex-col items-stretch w-[50%] ml-5 md:w-full md:ml-0">
                      <img
                        loading="lazy"
                        alt="Descriptive text for the image"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4277e3b6-a2bc-450e-b9d0-c339bcae665f?apiKey=57be2cfd74b9487e9b7782c4cc8cc742&"
                        className="aspect-[0.40] object-contain object-center w-full h-[190px] overflow-hidden"
                      />
                    </div>
                    <div className="text-black text-3xl font-bold">Sign In</div>
                    <div className="text-black text-xl font-semibold ml-4  self-start md:ml-2.5 md:mt-4">
                      E-mail
                    </div>
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
              <div className="text-indigo-700 text-base font-semibold">
                forgot password ?
              </div>
            </div>
            {/* Password input */}
            <input
              type="password"
              name="password"
              className="shadow-sm bg-slate-100 self-stretch flex items-stretch justify-between gap-5  pl-4 pr-9 py-4 rounded-3xl md:pr-5"
            />
          </div>

          <SignInButton onClick={handleSubmit} />
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
export default SignIn;
