import Movie from "./Movie";
import React, { useEffect, useState } from "react";
import axios from "axios";

function MoviesList({ rating, pagina }) {
  const [counter, setCounter] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const api_key = import.meta.env.VITE_apyKeyDeMiProyecto; // la traigo de .env
      

      const response = await axios({
        method: `GET`,
        url: `https://api.themoviedb.org/3/discover/movie?`,
        params: {
          api_key: api_key,
          page: pagina,
          "vote_average.gte": rating*2-2,
        },
      });

      setMovies(response.data.results);
    };
    getMovie();
  }, [rating, pagina]);

  useEffect(() => {
  }, [counter]);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <div className="container text-center">
     
        <div className="row">
          {movies
            // .filter((movie) => movie.vote_average >= rating*2-2)
            .map((movie) => (
              <div className="col-lg-3 col-md-4 col-sm-12" key={movie.id}>
                <Movie movie={movie} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default MoviesList;
