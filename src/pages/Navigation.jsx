import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div>
      {/* Button to toggle visibility */}
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowLinks(!showLinks)}
      >
        {showLinks ? "Hide Links" : "Show Links"}
      </button>

      {/* Links container */}
      {showLinks && (
        <div className="bg-transparent text-blue-800 flex gap-3">
          <Link to={"/login"}>Login Page</Link>
          <Link to={"/pages"}>Navbar Pages</Link>
          <Link to={"/"}>Register Page</Link>
        </div>
      )}
    </div>
  );
}

export default Navigation