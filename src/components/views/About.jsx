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

function About() {
  return (
    <>
      <div class="container mx-5">
        <div class="row">
          <div class="col-md-7 AboutSubDiv1 pe-5 paragraphAbout">
            <div className="paragraphAbout">
              <p>
                In my journey of professional transformation from{" "}
                <span className="bold-text">Agricultural Engineer</span> to{" "}
                <span className="bold-text">Fullstack Developer</span>, I
                created <span className="bold-text">Fakeflix</span>. This
                platform lets you effortlessly find your favorite movies—browse
                our extensive movie list, use the search bar, or filter by
                ratings to discover the best films.
              </p>
            </div>
            <div className="snap-section d-flex justify-content-center align-items-center about-lg-padding pb-5">
              <div className="techAndTools mx-auto">
                <div className=" my-3">
                  <h2 className="fw-bold mb-3 bold-text ">TECHNOLOGIES & TOOLS</h2>
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
              <img src="Avatar-man.png" alt="Avatar-man" />
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
