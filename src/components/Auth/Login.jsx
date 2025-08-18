import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="h-full flex overflow-hidden bg-white">
      {/* Left side */}
      <div className="w-1/2 hidden md:flex relative rounded-r-md overflow-hidden">
        <img
          src="/images/campuslogin.png"
          alt="Campus Glide"
          className="object-cover h-full w-full rounded-r-md"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-r-md"></div>

        {/* Logo */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img
            src="/images/Campus glide logo favicon.png"
            alt="Campus Glide Logo"
            className="w-9 h-9 object-contain"
          />
          <span className="text-white font-bold text-lg">Campus Glide</span>
        </div>

        {/* Heading section */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] text-center px-4">
          <div className="rounded-lg p-6">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-snug">
              Easily Access your Admin Account in Minutes
            </h1>
           <p className="text-white text-xs">
              Log in to your Admin Account and<br/>
              gain access to admin features instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 bg-white">
        <h2 className="text-4xl font-bold text-green-600 mb-8 leading-tight">
          Login
        </h2>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#667085]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              className="mt-1 block w-full px-5 py-3 border text-[#667085]
               border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 bg-white"
              required
            />
          </div>

          {/* Password with eye icon */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#667085]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-5 pr-12 py-3 border text-[#667085]
                 border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 bg-white"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 text-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-[#667085]">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;