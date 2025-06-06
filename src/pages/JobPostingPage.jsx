import React, { useState } from "react";
import JobPosting from "../components/JobPosting";
import ManagePositng from "../components/ManagePositng";
const JobPostingPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 overflow-hidden">
        <JobPosting />
        <div className="flex mt-[100px] p-6 border-2 border-gray-300 max-h-[60rem] rounded-2xl shadow-lg max-w-[30rem] justify-center flex-col space-y-4">
          <ManagePositng />
          <div className="border-2 border-gray-200 rounded-lg p-4 bg-white shadow-md min-w-[20rem] h-[25rem]">
            <div className="flex flex-col p-2">
              <div className="flex justify-center p-1">
                <img src="artificial.png" alt="" />
              </div>
              <h1 className="text-3xl font-semibold">Use AI to write</h1>
              <p className="text-md font-thin">
                Write perfectly and flawless with Al. If you want help with job
                description and other fields, AI will suggest for you.
              </p>

              <button
                className="bg-gradient-to-r from-[#2784B8] to-[#113B52] px-4 py-2 rounded-lg text-white
"
                onClick={() => setShowModal(true)}
              >
                Write with AI✨
              </button>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-4">
                Write Job Description with AI
              </h2>
              <textarea
                className="w-full border px-3 py-2 rounded h-40 mb-4"
                placeholder="Tell AI about the job, and it'll help you write."
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Generate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobPostingPage;
