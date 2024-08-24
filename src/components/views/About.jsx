import { NavLink } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql, SiRedux, SiInsomnia } from "react-icons/si";
import avatarSrc from '/Avatar-man.png';

function About() {
  return (
    <>
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
                  ? "text textColor fs-5 btn me-2"
                  : "inactiveNavbarButton btn me-2"
              }
            >
              <p>About</p>
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
      <div class="container mx-5">
        <div class="row">
          <div class="col-md-7 AboutSubDiv1 pe-5 paragraphAbout">
            <div className="paragraphAbout">
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                This practice project that emulates a movie streaming platform
                uses{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  React
                </span>{" "}
                as the foundation and{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  NodeJs
                </span>{" "}
                as the environment. The application utilizes{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  Redux
                </span>{" "}
                for global state management, allowing for smooth data handling
                across components. Asynchronous{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  API
                </span>{" "}
                calls were integrated using
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  {" "}
                  Axios
                </span>
                , enabling the retrieval of up-to-date information about movies
                and series. To enhance the user experience, I implemented an
                infinite scroll system and a rating filter, allowing users to
                refine their searches. Regarding design and user interface,{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  CSS{" "}
                </span>
                libraries such as{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  React-bootstrap
                </span>{" "}
                and{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  React-icons
                </span>{" "}
                were used to create an attractive and responsive visual
                experience. This project not only demonstrates my ability to
                work with advanced front-end technologies but also my skill in
                integrating different libraries and{" "}
                <span style={{ color: "#FF4500", fontWeight: "bold" }}>
                  APIs
                </span>
                .
              </p>
            </div>
            <div className="snap-section d-flex justify-content-center align-items-center about-lg-padding pb-5">
              <div className="techAndTools mx-auto">
                <div className=" my-3">
                  <h2 className="fw-bold mb-3 bold-text ">
                    TECHNOLOGIES & TOOLS
                  </h2>
                  <p>
                    This website was built using these technologies and tools:
                  </p>
                </div>
                <div className="row d-flex justify-content-around align-content-around glass ">
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaHtml5 className="icons html" size="2rem" />
                    <h5 className="mt-2">HTML</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaCss3 className="icons css" size="2rem" />
                    <h5 className="mt-2">CSS</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <IoLogoJavascript className="icons js" size="2rem" />
                    <h5 className="mt-2">JavaScript</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaReact className="icons react" size="2rem" />
                    <h5 className="mt-2">React</h5>
                  </div>
                  {/* <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <SiMysql className="icons mysql" size="2rem" />
                    <h5 className="mt-2">MySQL</h5>
                  </div> */}
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaNodeJs className="icons nodejs" size="2rem" />
                    <h5 className="mt-2">NodeJS</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <SiRedux className="icons redux" size="2rem" />
                    <h5 className="mt-2">Redux</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaBootstrap className="icons bootstrap" size="2rem" />
                    <h5 className="mt-2">Bootstrap</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaGitAlt className="icons git" size="2rem" />
                    <h5 className="mt-2">Git</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaGithub className="icons github" size="2rem" />
                    <h5 className="mt-2">Github</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <SiInsomnia className="icons insomnia" size="2rem" />
                    <h5 className="mt-2">Insomnia</h5>
                  </div>
                  <div className="col-4 col-md-3 mt-3 my-2 d-flex flex-column align-items-center text-center div-icon">
                    <FaFigma className="icons figma" size="2rem" />
                    <h5 className="mt-2">Figma</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 About-AvatarSubDiv">
            <div className="manAvatar ">
              <img src="\dist\assets\background image netflix-5feb1047.jpg" alt="Avatar-manSeba" />
            </div>
          </div>
        </div>
      </div>
      <div className="AboutSubDiv2 mb-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " text textColor fs-5 btn me-2"
              : "inactiveNavbarButton  btn me-2"
          }
        >
          <span className="hover homeButton"> Go to Home </span>
        </NavLink>
      </div>
    </>
  );
}

export default About;