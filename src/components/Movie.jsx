import React from "react";
import { useNavigate } from "react-router-dom";

function Movie({ movie }) {
  const navigate = useNavigate();

  function handleMovieDetails(id) {
    navigate(`/movie?id=${id}`);
  }

  const image_Path = "https://image.tmdb.org/t/p/w500";
  return (
    <div onClick={() => handleMovieDetails(movie.id)}>
      <img
        className="w-full cursor-pointer"
        src={`${image_Path}${movie.poster_path}`}
      />
      <p className="text-white">{movie.original_title}</p>
      <p className="text-white">rating: {movie.vote_average}</p>
    </div>
  );
}

export default Movie;
