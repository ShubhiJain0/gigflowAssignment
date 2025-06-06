import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";
const Dates = () => {
  const meetings = [
    {
      start: "3:30 pm",
      end: "4:30 pm",
      titleSmall: "Internal Meeting",
      titleLarge: "Internal Meeting with Jade Sapphire - UI designer",
    },
    {
      start: "5:00 pm",
      end: "6:00 pm",
      titleSmall: "Internal Meeting",
      titleLarge: "Internal Meeting with Content team",
    },
    {
      start: "7:00 pm",
      end: "8:00 pm",
      titleSmall: "Interview",
      titleLarge: "Interview with Achuyut - UI intern",
    },
    {
      start: "3:30 pm",
      end: "4:30 pm",
      titleSmall: "Internal Meeting",
      titleLarge: "Internal Meeting with Content team",
    },
    {
      start: "5:00 pm",
      end: "6:00 pm",
      titleSmall: "Internal Meeting",
      titleLarge: "Internal Meeting with Content team",
    },
    {
      start: "7:00 pm",
      end: "8:00 pm",
      titleSmall: "Internal Meeting with Content team",
    },
  ];
  return (
    <div>
      <div className="border rounded-md p-4 max-w-md bg-white">
        <div className="flex justify-between space-x-5 mb-3">
          <h3 className="text-lg font-semibold">Upcoming Actions</h3>
          <AiOutlineCalendar className="text-blue-600 h-6 w-6 mr-2" />
        </div>

        <div>
          {meetings.map(({ start, end, titleSmall, titleLarge }, i) => (
            <div className="flex p-4 border-b-2">
              <div className="border-r-2 border-gray-300 px-1">
                <h1 className="text-2xl font-semibold">{start}</h1>
                <h2 className="text-lg text-gray-400">{end}</h2>
              </div>

              <div className="flex flex-col gap-2 p-2">
                <h2 className="text-md font-light">{titleSmall}</h2>

                <h1 className="text-xl">{titleLarge}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dates