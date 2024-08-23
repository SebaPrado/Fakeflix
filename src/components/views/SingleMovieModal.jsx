// import { useEffect, useState } from "react";
// import axios from "axios";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function SingleMovieModal({ show, handleClose, movieId }) {
//   const [peli, setPeli] = useState("");

//   useEffect(() => {
//     const getMovie = async () => {
//       if (movieId) {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=b68c1c3fca2a665cd4a57428054bee51&language=es`
//         );
//         setPeli(response.data);
//       }
//     };
//     getMovie();
//   }, [movieId]);

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{peli.title}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="text-center">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
//             alt="SingleMovieImage"
//             className="SingleMovieImage"
//           />
//         </div>
//         <div className="mt-3">
//           <p>{peli.overview}</p>
//           <p>Fecha de lanzamiento: {peli.release_date}</p>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Cerrar
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default SingleMovieModal;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleMovieView() {
  const params = useParams();
  const [peli, setPeli] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=b68c1c3fca2a665cd4a57428054bee51&language=en` // & para filtrar
      );
      console.log("response.data ", response.data);

      setPeli(response.data);
    };
    getMovie();
  }, []);
  return (
    <>
      <div className="text-center pt-5">
        <h3 className="movieTitle"> {peli.title}</h3>
      </div>
      <div className="justify-content-center text-center">
        <div className="dos text-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
            alt="SingleMovieImage"
            className="SingleMovieImage"
          />
        </div>
        <div >
          <div className="uno ">
            <p>{peli.overview}</p>
            <p className="pSMModal">{peli.release_date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovieView;
