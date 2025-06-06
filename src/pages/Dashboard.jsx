import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Cards from "../components/Cards";
import Dates from "../components/Dates";
import PerformanceReport from "../components/PerformanceReport";
import IncomingApplication from "../components/IncomingApplication";
const Dashboard = () => {

  return (
    <div className="p-6">
      {/* Info banner */}
      <div className="flex items-center shadow-lg p-3 rounded-md mb-6 bg-white">
        <div className="bg-[#1163C1] h-8 w-8 rounded-full flex justify-center items-center text-white mr-3">
          <AiOutlineThunderbolt className="h-5 w-5" />
        </div>
        <p className="text-sm">
          Optimize your experience on Gigfloww — track your job posts, manage
          teams, and streamline HR operations effortlessly today!
        </p>
      </div>

      {/* Welcome header */}
      <h1 className="text-3xl font-semibold mb-6">Welcome Back, Nuraj Group</h1>

      {/* Cards */}
      <div className="flex justify-around ">
        <div className="flex flex-col">
          <Cards />
          <PerformanceReport />
          <IncomingApplication />
        </div>

        <Dates />
      </div>
    </div>
  );
};

export default Dashboard;
