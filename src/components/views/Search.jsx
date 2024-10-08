import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

function Search() {
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (inputValue !== "") {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=b68c1c3fca2a665cd4a57428054bee51`
        );
        setFilteredMovie(response.data);
      } else {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=2af77be589e4fbd4c0b22d025c79b270`
        );
        setFilteredMovie(response.data);

        // const response = await axios.get(
        //   `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=b68c1c3fca2a665cd4a57428054bee51&language=es`
        // );
        // setFilteredMovie(response.data); // es un objeto con una propiedad results con las movies filtradas
      }
    };
    fetchData();
  }, [inputValue]);

  const filteredMoviesArray = filteredMovie.results || [];

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
    <div className=" text-center my-4 searcher searchBody">
      <div className="container">
        <div className="row justify-content-center my-4">
          <input
            class="form-control search  "
            type="search"
            placeholder="search for your favourite movie"
            aria-label="Search"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
        </div>
      </div>

      {console.log(inputValue)}
      <div className="container">
        <div className="row">
          {filteredMoviesArray.map((movie) => (
            <div className="col-3 my-2" key={movie.id}>

              <NavLink to={`/pelicula/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className=" w-100 object-fit-cover imageOfMovieComponent  increasedImage"
              />
             </NavLink>

            </div>
          ))}
        </div>
      </div>
    </div>
    </>

  );
}

export default Search;
