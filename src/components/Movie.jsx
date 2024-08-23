import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Movie({ movie }) {
  // Genera un ID único para cada modal basado en el ID de la película
  const modalId = `staticBackdrop-${movie.id}`;

  return (
    <>
    <div className="cebolla">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="imageOfMovieComponent w-100 object-fit-cover shadow-lg my-4 mx-3 increasedImage cebolla"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      />
      </div>

      <div
        class="modal fade"
        id={modalId}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content modalBackgroundcolor">
            <div class="modal-header">
              <h1
                className="modal-title fs-5 text-center"
                id="staticBackdropLabel"
                style={{ letterSpacing: "0.05em" }}
              >
                {movie.title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-100  mb-3 cebolla"
              />
              <p>{movie.overview}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;