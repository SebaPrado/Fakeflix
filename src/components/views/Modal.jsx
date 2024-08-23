// import React from 'react'
// import Modal from "react-bootstrap/Modal";
// import { useState } from "react";


// function MyModal({movie}) {

//     const [show, setShow] = useState(false); //modal
//     const handleShow = () => setShow(true); //modal
//     const handleClose = () => setShow(false); //modal

//   return (
//     <div> <Modal show={show} onHide={handleClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>Modal heading</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       {" "}
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//         alt=""
//         className="imageOfMovieComponent w-100 object-fit-cover shadow-lg  "
//       />
//     </Modal.Body>
//   </Modal></div>
//   )
// }

// // export default MyModal
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function SingleMovieView() {
//   const params = useParams();
//   const [peli, setPeli] = useState("");

//   useEffect(() => {
//     const getMovie = async () => {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/movie/${params.id}?api_key=b68c1c3fca2a665cd4a57428054bee51&language=es` // & para filtrar
//       );
//       console.log("response.data ", response.data);

//       setPeli(response.data);
//     };
//     getMovie();
//   }, []);
//   return (
//     <>
//       <div className="text-center">
//         <h3 className="movieTitle"> {peli.title}</h3>
//       </div>
//       <div className="justify-content-center text-center">
//         <div className="dos text-center">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
//             alt="SingleMovieImage"
//             className="SingleMovieImage"
//           />
//         </div>
//         <div className="pepes">
//           <div className="uno ">
//             <p>{peli.overview}</p>
//             <p>{peli.release_date}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleMovieView;
