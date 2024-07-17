import React from 'react'
import Modal from "react-bootstrap/Modal";
import { useState } from "react";


function MyModal({movie}) {

    const [show, setShow] = useState(false); //modal
    const handleShow = () => setShow(true); //modal
    const handleClose = () => setShow(false); //modal

  return (
    <div> <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {" "}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
        className="imageOfMovieComponent w-100 object-fit-cover shadow-lg  "
      />
    </Modal.Body>
  </Modal></div>
  )
}

export default MyModal