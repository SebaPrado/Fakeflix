import React from "react";
import { Outlet } from "react-router-dom";
// import NavBar from "./Navbar";
import Presentation from "./views/Presentation";

function Layout() {
  return (
    <div className="">
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
}

export default Layout;
