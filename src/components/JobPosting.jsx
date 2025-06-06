import React from 'react'

const JobPosting = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-2">Job Posting</h1>
      <p className="text-gray-600 mb-6">
        Post job for free. Add details for your job post.
      </p>

      <div className="flex flex-col">
        {/* Form Section */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow ">
          <h2 className="text-xl font-semibold mb-4">Fill in Job Details</h2>
          <div className="grid grid-cols-1 gap-4 ">
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select role</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Skills Required
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select skills</option>
                <option>React, JavaScript</option>
                <option>Node.js, MongoDB</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Years of Experience
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select experience</option>
                <option>0-1</option>
                <option>2-3</option>
                <option>4+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Employment Type
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select type</option>
                <option>Full-time</option>
                <option>Internship</option>
                <option>Freelance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Workplace Type
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select workplace</option>
                <option>Remote</option>
                <option>Onsite</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Stipend</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Select stipend</option>
                <option>₹5,000 - ₹10,000</option>
                <option>₹10,000 - ₹20,000</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                No. of Openings
              </label>
              <select className="w-full border rounded px-3 py-2">
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Job Description
            </label>
            <textarea
              rows={5}
              className="w-full border rounded px-3 py-2"
              placeholder="Write a job description..."
            ></textarea>
          </div>

          {/* Link */}
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">
              Relevant Link
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="e.g., portfolio, company website..."
            />
          </div>
        </div>
      </div>

      {/* Write with AI Modal */}
    </div>
  );
}

export default JobPosting