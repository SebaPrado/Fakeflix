import React from "react";
import { NavLink } from "react-router-dom";

function Presentation() {
  return (
    <div
      className=" anton-regular presentation-container"
      style={{ position: "relative", zIndex: 0 }}
    >
      <nav className="p-3 position-relative" style={{ zIndex: 2 }}>
        
        <div className="container-fluid d-block">
          <span className="hover">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text textColor fs-5 btn me-2"
                  : "inactiveNavbarButton btn me-2"
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
                  ? "navbar-link text btn me-2"
                  : "navbar-link inactiveNavbarButton btn me-2"
              }
            >
              <p>About me</p>
            </NavLink>
          </span>

          <span className="hover">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "text textColor fs-5 btn me-2"
                  : "inactiveNavbarButton btn me-2"
              }
            >
              <p>Search</p>
            </NavLink>
          </span>
        </div>
      </nav>

      <div className="video-overlay">
        <video
          autoPlay
          muted
          loop
          className="presentation-video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "98vh",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Su navegador no soporta el elemento de video.
        </video>
        <div className="video-gradient"></div>
      </div>

      <div
        className="presentation-content"
        style={{ position: "relative", zIndex: 3 }}
      >
        <div className="ms-4">
          <h1 className="presentationSentence my-2 anton-regular bordered-text">
            In F A K E F L I X, unlimited movies...{" "}
          </h1>
          <div className="my-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;

