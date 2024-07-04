import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieToPelicula() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{

      navigate(`/pelicula/${params.id}`);

  },[])

  return <>
</>;
}

export default MovieToPelicula;
