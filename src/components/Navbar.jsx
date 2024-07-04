import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="anton-regular">
      <nav className="p-3">
        <div className="container-fluid d-block">
          <span className="hover">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text textColor fs-5 btn me-2"
                  : "inactiveNavbarButton  btn me-2"
              }
            >
              <p>Home</p>
            </NavLink>
          </span>

          <span className="hover">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? " text textColor fs-5 btn me-2"
                  : "inactiveNavbarButton  btn me-2"
              }
            >
              <p>About me</p>
            </NavLink>
          </span>

          <span className="hover ">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? " text textColor fs-5 btn me-2"
                  : "inactiveNavbarButton  btn me-2"
              }
            >
              <p>Search</p>
            </NavLink>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
