import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen h-screen flex overflow-hidden relative">
      <div className="w-1/2 h-full">
        <img
          src="login.png"
          alt="Left"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center flex-col items-center overflow-hidden">
        <img
          src="topcircle.png"
          alt=""
          className="right-0 z-2 absolute top-0 hidden lg:block "
        />
        <img
          src="topcircle.png"
          alt=""
          className=" absolute -right-[100px] -top-6 hidden lg:block -rotate-[15deg]"
        />
        <form className="flex flex-col gap-4 px-8 py-4 max-w-md w-full text-center">
          <div className="flex flex-col justify-center items-center">
            <img src="gigflow.png" alt="" className="h-[50px] w-[254.5px]" />
            <h1 className="text-2xl font-normal">Welcome to Gigfloww</h1>
          </div>

          <h2 className="text-3xl font-semibold  mb-4">Login</h2>
          <h2 className="text-2xl font-light">
            Seamless HR operations start now!
          </h2>
          <h2 className="text-2xl font-light"> Sign In</h2>
          <label htmlFor="name" className="text-left pl-4 font-semibold">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="p-3 border rounded-2xl"
          />
          <label htmlFor="email" className="text-left pl-4 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="p-3 border rounded-2xl"
          />
          <label htmlFor="password" className="text-left pl-4 font-semibold">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 pr-10 border border-gray-300 rounded-md"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash style={{ color: "black" }} />
              ) : (
                <FaEye style={{ color: "black" }} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="register-btn p-3 text-white rounded-md hover:bg-[#123c53]"
          >
            Sign in for free
          </button>
        </form>
        <div className="flex justify-center flex-col items-center">
          <p className="text-[#414141]">
            By clicking on Sign up, you agree to our&nbsp;
            <span className="text-[#123c53] underline font-bold">
              Terms and Conditions
            </span>
          </p>
          <div className="p-1 flex gap-4">
            <button className="flex overflow-hidden gap-4 border justify-center items-center border-black p-1 rounded-3xl text-sm">
              <img src="google.png" alt="" />
              Register with Google
            </button>
            <button className="flex overflow-hidden gap-4 border justify-center items-center border-black p-1 rounded-3xl text-sm">
              <img src="apple.png" alt="" />
              Register with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
