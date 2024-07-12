import { useState } from "react";
import { NavLink } from "react-router-dom";

import MoviesList from "../MoviesList";
import Star from "../Star";
import Presentation from "./Presentation";
import InfiniteScroll from "react-infinite-scroll-component";

// npm i
// npm run dev
//VITE_apyKeyDeMiProyecto=2af77be589e4fbd4c0b22d025c79b270
// "postinstall": "chmod +x node_modules/.bin/vite"

function Home({ movie, pagina }) {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="presentation">
          <Presentation />
        </div>
        <div>
          <div className="star">
            <Star
              setRating={setRating}
              rating={rating}
              handleRating={handleRating}
            />
          </div>
        </div>
        <div>
          <MoviesList
            rating={rating}
            setRating={setRating}
            movie={movie}
            pagina={pagina}
          />
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
          <span className="hover homeButton  " onClick={handleScrollToTop}>
            {" "}
            Back to Top{" "}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
