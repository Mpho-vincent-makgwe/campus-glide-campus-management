import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Add authentication logic here
    // On success, navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image area with overlay and text */}
      <div className="w-1/2 hidden md:flex relative">
        <img
          src="/campuslogin.png"
          alt="Campus Glide"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-6 left-6 text-white font-bold text-lg flex items-center space-x-2">
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
          <span>Campus Glide</span>
        </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center px-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2">
            Easily Access your Admin Account within minutes
          </h1>
          <p className="text-white text-sm md:text-base">
            Log Into your Admin Account in minutes and gain access to Admin
            features!
          </p>
        </div>
      </div>

      {/* Right side - Form area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32">
        <h2 className="text-4xl font-bold text-green-600 mb-8">Login</h2>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email Address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-green-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
