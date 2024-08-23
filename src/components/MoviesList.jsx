import Movie from "./Movie";
import React, { useEffect, useState } from "react";
import axios from "axios";

function MoviesList({ rating, pagina, setPagina, onMovieClick, setMovies }) {
  const [hasMore, setHasMore] = useState(true);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const obtenerPeliculas = async () => {
      const api_key = import.meta.env.VITE_apyKeyDeMiProyecto;

      try {
        const respuesta = await axios({
          method: `GET`,
          url: `https://api.themoviedb.org/3/discover/movie`,
          params: {
            api_key: api_key,
            "vote_average.gte": rating * 2,
            page: pagina,
          },
        });

        if (respuesta.data.results.length === 0) {
          setHasMore(false);
        } else {
          if (pagina === 1) {
            setPeliculas(respuesta.data.results);
            setMovies(respuesta.data.results);
          } else {
            setPeliculas(prevPeliculas => [...prevPeliculas, ...respuesta.data.results]);
            setMovies(prevMovies => [...prevMovies, ...respuesta.data.results]);
          }
        }
      } catch (error) {
        console.error("Error al cargar las películas:", error);
        setHasMore(false);
      }
    };

    obtenerPeliculas();
  }, [rating, pagina, setMovies]);

  return (
    <div className="container text-center imageMovieComp cebolla">
      <div className="row cebolla">
        {peliculas && peliculas.length > 0 ? (
          peliculas.map((pelicula) => (
            <div className="col-lg-3 col-md-4 col-sm-12 " key={pelicula.id}>
              <Movie movie={pelicula} onClick={() => onMovieClick(pelicula.id)} />
            </div>
          ))
        ) : (
          <p>No hay películas para mostrar.</p>
        )}
      </div>
    </div>
  );
}

export default MoviesList;