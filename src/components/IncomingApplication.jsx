import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const IncomingApplication = () => {

  const data = [
    {
      appName: "Elizabeth Filade",
      exp: "3 years in Software Development",
      appImg: "img1.png",
      companyLogo: "img1com.png",
      company: "Tucker Inc",
      time: "12 Dec 2024 - 10 May 2025",
    },
    {
      appName: "Andre Suares",
      exp: "3 years in Software Development",

      appImg: "img2.png",
      companyLogo: "img2com.png",
      company: "Tucker Inc",
      time: "12 Dec 2024 - 10 May 2025",
    },
    {
      appName: "Ishita Ashuth",
      exp: "3 years in Software Development",
      appImg: "img3.png",
      companyLogo: "img2com.png",
      company: "Tucker Inc",
      time: "12 Dec 2024 - 10 May 2025",
    },
    {
      appName: "Elizabeth Filade",
      exp: "3 years in Software Development",
      appImg: "img3.png",
      companyLogo: "img2com.png",
      company: "Tucker Inc",
      time: "12 Dec 2024 - 10 May 2025",
    },
  ];

  return (
    <div className="px-2 py-4">
      <h1 className="text-3xl my-2">Incoming Application</h1>
      <p className="text-xl text-gray-500">
        Manage application for your job posting
      </p>

      <div className="flex gap-3 mt-4">

          {data.map((dat, index) => (
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-white shadow-md min-w-[20rem] ">
              <div className=" border-b-2">
                <div className="flex items-center mb-2">
                  <div className="flex overflow-hidden h-20">
                    <img src={dat.appImg} alt="" />
                  </div>
                  <div className="p-1">
                    <h2 className="text-2xl font-medium">Elizabeth Filade</h2>
                    <p className=" text-md text-gray-600">{dat.exp}</p>
                  </div>
                </div>
                <h1 className="text-xl">Latest Experience</h1>
                <div className="flex">
                  <div className="h-12 overflow-hidden flex">
                    <img src={dat.companyLogo} alt="" />
                  </div>
                  <div className="p-1">
                    <h2 className="text-md font-medium">{dat.company}</h2>
                    <p className=" text-sm text-gray-500">{dat.time}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-blue-500 text-lg font-semibold">
                  View Details
                </h1>
                <FaLongArrowAltRight className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          ))}
       
      </div>
    </div>
  );
}

export default IncomingApplication