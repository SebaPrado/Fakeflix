import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <div class="container mx-5">
        <div class="row">
          <div class="col-md-7 AboutSubDiv1 pe-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              accusamus architecto cum ipsum quasi dolor, ducimus veniam, soluta
              fuga distinctio, blanditiis necessitatibus aliquam error atque
              iste culpa facere vel illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              accusamus architecto cum ipsum quasi dolor, ducimus veniam, soluta
              fuga distinctio, blanditiis necessitatibus aliquam error atque
              iste culpa facere vel illo. blanditiis necessitatibus aliquam
              error atque iste culpa facere vel illo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              vitae. Illo inventore quas culpa veniam voluptas expedita harum
              quaerat! Pariatur accusamus impedit, nostrum quaerat laboriosam
              repudiandae et modi. Non, consequatur? rchitecto cum ipsum quasi
              dolor, ducimus veniam, soluta fuga distinctio, blanditiis necess
              itatibus aliquam error atquerchit ecto cum ipsum quasi dolor,
              ducimus veniam, soluta fuga distinctio, blanditiis necessit atibus
              aliquam error atque
            </p>
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
