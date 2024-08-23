import { useState } from "react";
import { NavLink } from "react-router-dom";

import MoviesList from "../MoviesList";
import Star from "../Star";
import Presentation from "./Presentation";
import InfiniteScroll from "react-infinite-scroll-component";

function Home({ movie }) {
  const [rating, setRating] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const handleRating = (rate) => {
    setRating(rate);
    setPagina(1);
    setMovies([]); // Limpiar las películas al cambiar la calificación
  };

  const fetchMoreMovies = () => {
    setPagina((prevPagina) => prevPagina + 1);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMovieClick = (movieId) => {
    console.log(`Película clickeada con ID: ${movieId}`);
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
              rating={rating}
              handleRating={handleRating}
            />
          </div>
        </div>
        <div>
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreMovies}
            hasMore={hasMore}
            loader={<h4>Cargando más películas...</h4>}
            endMessage={<p>¡No hay más películas para mostrar!</p>}
            scrollThreshold={0.9}
          >
            <MoviesList
              rating={rating}
              pagina={pagina}
              setPagina={setPagina}
              onMovieClick={handleMovieClick}
              setMovies={setMovies}
              setHasMore={setHasMore}
            />
          </InfiniteScroll>
        </div>
      </div>

      <div className="AboutSubDiv2 mb-5">
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
                <p className="navbar-link">Home</p>
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
                <p className="navbar-link">About me</p>
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
                <p className="navbar-link">Search</p>
              </NavLink>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Home;