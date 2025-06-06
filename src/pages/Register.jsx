import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
function Register() {
  return (
    <div className="w-screen h-screen flex bg-gradient-to-br from-[#FBFBFB] to-[#185170] overflow-hidden">
      <div className="w-1/2 h-full">
        <img
          src="image.png"
          alt="Left"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center flex-col items-center">
        <form className="flex flex-col gap-4 p-8 max-w-md w-full text-center">
          <div>
            <img src="logo.png" alt="" />
            <h1 className="text-2xl font-normal">Welcome to Gigfloww</h1>
          </div>

          <h2 className="text-3xl font-semibold  mb-4">Register</h2>
          <h2 className="text-2xl font-light">
            Seamless HR operations start now!
          </h2>
          <h2 className="text-2xl font-light"> Sign up</h2>
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded-3xl"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-3xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-3xl"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 border rounded-3xl"
          />
          <button
            type="submit"
            className="register-btn p-3 text-white rounded-md hover:bg-[#123c53]"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center flex-col items-center">
          <p className="text-[#414141]">
            <Link to={"/login"}>
              {" "}
              Already on Gigfloww?{" "}
              <span className="text-[#123c53]">Log in</span>
            </Link>
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
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Register;
