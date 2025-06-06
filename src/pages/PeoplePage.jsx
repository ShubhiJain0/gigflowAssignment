import React, { useState } from "react";
import { FaSearch, FaFilter, FaDownload } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
const dummyData = [
  {
    name: "Elizabeth Filade",
    title: "UI/UX Designer",
    email: "xyz@gmail.com",
    department: "Design",
    salary: "$80,000",
    startDate: "2022-01-15",
    lifecycle: "Onboarding",
    status: "Active",
  },
  {
    name: "Rahul Mehta",
    title: "Frontend Developer",
    department: "Engineering",
    email: "xyz@gmail.com",
    salary: "$90,000",
    startDate: "2021-09-20",
    lifecycle: "Active",
    status: "Active",
  },
  {
    name: "Sanya Roy",
    title: "HR Manager",
    department: "Human Resources",
    salary: "$75,000",
    email: "xyz@gmail.com",
    startDate: "2020-04-01",
    lifecycle: "Retained",
    status: "Inactive",
  },
  {
    name: "Arjun Verma",
    title: "Project Manager",
    department: "Operations",
    salary: "$100,000",
    email: "xyz@gmail.com",
    startDate: "2019-10-01",
    lifecycle: "Transition",
    status: "Active",
  },
  {
    name: "Anika Kapoor",
    title: "Content Strategist",
    department: "Marketing",
    salary: "$70,000",
    email: "xyz@gmail.com",
    startDate: "2023-02-12",
    lifecycle: "Onboarding",
    status: "Active",
  },
];

const PeoplePage = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [role, setRole] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const filteredData = dummyData
    .filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(
    dummyData.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    ).length / itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">People List</h1>
        <div className="">
          <button className="px-4 py-2 bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white rounded-md">
            Add new member
          </button>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 right-3">
              Export
              <CiExport className="text-blue-700 " />
            </button>
          </div>
        </div>
      </div>
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 ">
        {/* Search */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search people..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
        </div>

        {/* Type Filter */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-2"
        >
          {["Type", "Employee", "Freelancer"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        {/* Role Filter */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-300 rounded-xl  px-4 py-2"
        >
          {["Role", "Designer", "Developer", "Manager"].map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <div className="flex relative items-center">
          <VscSettings className="h-6 w-6 absolute top-3" />

          <select
            value="Advance Filter"
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded-xl px-6 py-2"
          >
            {["Advance Filter", "Designer", "Developer", "Manager"].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
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
                Salary
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Start Date
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Lifecycle
              </th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((person, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex justify-between p-1 items-center">
                    <div className="p-1">
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h1 className=" font-semibold text-md">{person.name}</h1>
                      <h1 className=" text-gray-600 text-sm">{person.email}</h1>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{person.title}</td>
                <td className="px-6 py-4">{person.department}</td>
                <td className="px-6 py-4">{person.salary}</td>
                <td className="px-6 py-4">{person.startDate}</td>
                <td className="px-6 py-4">{person.lifecycle}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      person.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {person.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 p-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white"
            disabled={currentPage === 1}
          >
            <MdNavigateBefore />
          </button>
          <div className="text-sm flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className="px-2 py-1 border rounded cursor-pointer border border-[#113B52]"
              >
                {index + 1}
              </span>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-2 rounded bg-gradient-to-r from-[#2784B8] to-[#113B52] text-white"
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
