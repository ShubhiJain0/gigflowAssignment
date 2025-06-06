import React, { useState } from "react";
import { FaSearch, FaFilter, FaDownload } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { GrLinkNext } from "react-icons/gr";
const salaryData = [
  {
    name: "Elizabeth Filade",
    title: "UI/UX Designer",
    status: "Paid",
    img: "https://i.pravatar.cc/100?img=1",
    position: "UI lead",
    department: "Design",
    salary: "$3500",
    Bonus: "$500",
    deduction: "$0.00",
    next: "$3500",
    bank: "234567890",
    bankName: "Polaris Bank",
    currency: "$USD",
  },
  {
    name: "Rahul Mehta",
    title: "Frontend Developer",
    status: "Pending",
    img: "https://i.pravatar.cc/100?img=2",
    position: "UI lead",
    department: "Design",
    salary: "$3500",
    Bonus: "$500",
    deduction: "$0.00",
    next: "$3500",
    bank: "234567890",
    bankName: "Polaris Bank",
    currency: "$USD",
  },
  {
    name: "Sanya Roy",
    title: "HR Manager",
    img: "https://i.pravatar.cc/100?img=3",
    position: "UI lead",
    department: "Design",
    status: "Active",
    salary: "$3500",
    Bonus: "$500",
    deduction: "$0.00",
    next: "$3500",
    bank: "234567890",
    bankName: "Polaris Bank",
    currency: "$USD",
  },
];

const SalaryPage = () => {
  const [month, setMonth] = useState("June");
  const [search, setSearch] = useState("");

  const filtered = salaryData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedEmployee = filtered[0];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Salary Activities</h1>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border border-gray-300 px-4 py-2  rounded-2xl"
        >
          {["June", "May", "April", "March"].map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Controls */}
      <div className="flex justify-between md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="flex justify-around gap-4">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
          </div>

          <button className="flex items-center gap-2   px-4 py-2 rounded border border-gray-400 ">
            <VscSettings />
            Filter
          </button>
        </div>
        <div className="">
          <select className="border border-gray-300 px-4 py-2  rounded-2xl">
            <option> Monthly Salary</option>
            <option>Yearly Salary</option>
          </select>
        </div>
      </div>

      {/* Table & Profile */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
        {/* Table */}
        <div className="md:col-span-2 bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Job Title
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Department
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Net Salary
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((emp, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex justify-between p-1 items-center">
                      <div>
                        <h1 className=" font-semibold text-md">{emp.name}</h1>
                        <h1 className=" text-gray-600 text-sm">{emp.email}</h1>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-light">{emp.title}</td>
                  <td className="px-6 py-4 font-light">{emp.department}</td>
                  <td className="px-6 py-4 font-light">{emp.netSalary}</td>
                  <td className="px-6 py-4 ">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-extralight ${
                        emp.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : emp.status === "Active"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Employee Profile */}
        <div className="w-[60%] ">
          {selectedEmployee && (
            <div className="bg-white rounded shadow  flex flex-col space-y-10 p-2 relative w-[100%]">
              <div>
                <div className="bg-gradient-to-r from-[#2F99FA] to-[#082DB0] min-h-[6rem] rounded-t-lg"></div>
                <div className="flex justify-center items-center z-10 absolute top-[10%] left-[35%]">
                  <img
                    src={selectedEmployee.img}
                    alt={selectedEmployee.name}
                    className="w-24 h-24 rounded-full mb-4 "
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-center">
                  {selectedEmployee.name}
                </h2>
                <p className="text-gray-500 text-center">
                  {selectedEmployee.title}
                </p>
                <p className="text-sm text-gray-400 text-center">
                  {selectedEmployee.department}
                </p>
                <div className="mt-4 text-sm text-gray-600 flex flex-col ">
                  <div className="flex justify-between">
                    <h1>Position</h1>
                    <h1 className="font-semibold">
                      {selectedEmployee.position}
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Department</h1>
                    <h1>{selectedEmployee.department}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Status</h1>
                    <h1>{selectedEmployee.status}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Basic Salary</h1>
                    <h1>{selectedEmployee.salary}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Bonus & Overtime</h1>
                    <h1>{selectedEmployee.bonus}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Deduction</h1>
                    <h1>{selectedEmployee.deduction}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Next Salary</h1>
                    <h1>{selectedEmployee.next}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="font-semibold">Bank Details</h1>
                    <div className="flex flex-col ">
                      <h1>{selectedEmployee.bank}</h1>
                      <h1>{selectedEmployee.bankName}</h1>
                    </div>
                  </div>
                  <div className="flex justify-between border-b-2 pb-2">
                    <h1 className="font-semibold">Currency</h1>
                    <h1>{selectedEmployee.currency}</h1>
                  </div>
                  <div className="flex justify-between py-2 items-center">
                    <h1 className="text-blue-600">View Payroll History</h1>
                    <GrLinkNext className="text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalaryPage;
