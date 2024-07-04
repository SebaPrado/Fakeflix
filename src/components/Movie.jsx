
import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <>
      <div className=" my-4 mx-3 increasedImage  ">
        <Link to={`/pelicula/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            className="imageOfMovieComponent w-100 object-fit-cover shadow-lg "
          />
        </Link>
      </div>
    </>
  );
}

export default Movie;