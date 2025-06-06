import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { TbHierarchy3 } from "react-icons/tb";
import { FaBriefcase, FaClipboardList } from "react-icons/fa";
import PerformanceReport from './PerformanceReport';
import { FaLongArrowAltRight } from "react-icons/fa";
const Cards = () => {
  return (
    <div className="flex gap-6 ">
      {/* Employees */}
      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white shadow-md min-w-[20rem] h-[10rem]">
        <div className=" border-b-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Employees</h2>
            <IoPeopleOutline className="text-blue-600 h-8 w-8 bg-blue-200 rounded-full p-1" />
          </div>
          <h1 className="text-3xl">23</h1>
        </div>
        <div className="flex justify-between p-2">
          <h1 className="text-blue-700">View Details</h1>
          <FaLongArrowAltRight />
        </div>
      </div>

      {/* Hiring */}

      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white shadow-md w-1/3 min-w-[20rem] h-[10rem]">
        <div className=" border-b-2 border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Hiring</h2>
            <TbHierarchy3 className="text-green-600 h-8 w-8 bg-green-200 rounded-full p-1" />
          </div>
          <h1 className="text-3xl">5</h1>
        </div>
        <div className="flex justify-between p-2">
          <h1 className="text-blue-700">View Details</h1>
          <FaLongArrowAltRight />
        </div>
      </div>

      {/* Projects */}
      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white shadow-md w-1/3 min-w-[20rem] h-[10rem]">
        <div className=" border-b-2 border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Projects</h2>
            <FaClipboardList className="text-green-600 h-8 w-8 bg-green-200 rounded-full p-1" />
          </div>
          <h1 className="text-3xl">1</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-blue-700">View Details</h1>
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  );
}

export default Cards