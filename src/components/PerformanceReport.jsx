import React, { useState } from "react";

const PerformanceReport = () => {
  const [selected, setSelected] = useState("Weekly");
  const options = ["Weekly", "Monthly", "Yearly"];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Performance Report</h2>

        {/* Dropdown */}
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      <div className="text-gray-600 relative">
        <div className="flex space-x-2">
          <div className="my-2">
            <ul>
              <li className="mb-1">80</li>
              <li className="mb-1">70</li>
              <li className="mb-1">60</li>
              <li className="mb-1">50</li>
              <li className="mb-1">40</li>
              <li className="mb-1">30</li>
              <li className="mb-1">20</li>
              <li className="mb-1">10</li>
            </ul>
          </div>
          <div>
            <img src="graph.png" alt="" />
          </div>
        </div>

        <div className="">
          <ul className="ml-6 flex gap-16">
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>
        </div>
        {/* You can place charts, metrics, etc. here */}
      </div>
    </div>
  );
};

export default PerformanceReport;
