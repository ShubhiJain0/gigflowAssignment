import React from "react";
import Navbar from "./Navbar"; // adjust path if needed
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
