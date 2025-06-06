import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiBellOn, CiSettings } from "react-icons/ci";
import Dashboard from "./Dashboard";
import PeoplePage from "./PeoplePage";
import SalaryPage from "./SalaryPage";
import JobPostingPage from "./JobPostingPage";
function Navbar() {
  const [index, setIndex] = useState(0);  

  const navItems = [
    { label: "Dashboard"},
    { label: "People" },
    { label: "Hiring"},
    { label: "Salary"},

    { label: "Reviews"},
  ];

  return (
    <>
      <nav
        className={`w-full h-16 px-8 flex items-center justify-between ${
          index == 0
            ? "bg-gradient-to-br from-[#9CBCF8] to-white px-8"
            : index == 1
            ? "bg-gradient-to-br from-[#2376A4] to-[#9CBCF8] "
            : index == 2
            ? "bg-gradient-to-br from-[#2784B8] to-[#113B52] "
            : index == 3
            ? "bg-[#21729F]"
            : "bg-[#21729F]"
        }`}
      >
        {/* Logo */}
        <div className="text-xl font-bold text-blue-900">
          <img src="logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-white font-medium">
          {navItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                index === i && "bg-white text-[#31AEF3] rounded-3xl"
              }`}
            >
              <div to={item.path}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Icons + Profile */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 border-r-2 pr-4">
            <CiBellOn className="h-6 w-6 text-[#31AEF3]" />
            <CiSettings className="h-6 w-6 text-[#31AEF3]" />
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img
              src="girl.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </nav>
      {index == 0 && <Dashboard />}
      {index == 1 && <PeoplePage />}
      {index == 3 && <SalaryPage />}
      {index == 2 && <JobPostingPage />}
    </>
  );
}

export default Navbar;
