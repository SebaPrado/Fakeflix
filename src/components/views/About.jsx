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
import avatarSrc from "/Avatar-man.png";
import { Carousel } from "react-bootstrap";

function About() {
  const techIcons = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "NodeJS" },
    { icon: SiRedux, name: "Redux" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaGithub, name: "Github" },
    { icon: SiInsomnia, name: "Insomnia" },
    { icon: FaFigma, name: "Figma" }
  ];

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

            <div>
              {/* <h2 className="fw-bold mb-3 bold-text ">TECHNOLOGIES & TOOLS</h2>
              <p>This website was built using these technologies and tools:</p> */}
            </div>
          </div>
          <div class="col-md-5 About-AvatarSubDiv">
            <div className="manAvatar ">
              <img className="manAvatar" src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg.freepik.com%2Ffoto-gratis%2Fexperiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.2008272138.1724371200%26semt%3Dais_hybrid&sp=1724479645Tfa2491eee21f6b795bbdebc5076b690368e121f93317e5730d9be0e1581ffffb' alt="Avatar-manSeba" />
            </div>
          </div>
          <div className="tech-slider-container mt-4">
            <div className="tech-slider">
              {[...techIcons, ...techIcons].map((tech, index) => (
                <div className="tech-slide" key={index}>
                  <tech.icon className={`icons ${tech.name.toLowerCase()}`} size="2rem" color="white" />
                  <h5 className="mt-2 text-white">{tech.name}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="AboutSubDiv2 mb-5">
        
      </div>
    </>
  );
}

export default About;