import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cast from "../../components/Cast";

function useId() {
  return new URLSearchParams(useLocation().search);
}

function MovieDetail() {
  const id = useId().get("id");
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_key = "c45a857c193f6302f2b5061c3b85e743";
  const img_base_path = "https://image.tmdb.org/t/p/w500";

  async function fetchData(getId) {
    try {
      const [movieResponse, castResponse] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/movie/${getId}?api_key=${API_key}&language=en-US`
        ),
        fetch(`https://api.themoviedb.org/3/movie/${getId}/credits?api_key=${API_key}&language=en-US
`),
      ]);

      const movieData = await movieResponse.json();
      const castData = await castResponse.json();

      setMovie(movieData);
      setCast(castData.cast);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-black mt-16">
      <div className="flex">
        <div className="flex-1">
          <div className="grid grid-cols-5">
            <div>
              <img src={`${img_base_path}${movie.poster_path}`} />
            </div>
            <div className="col-span-4">
              <p className="text-yellow-300">{movie.original_title}</p>
              <p className="text-yellow-300">Rating: {movie.vote_average}</p>
              <div className="flex">
                <p className="text-purple-400">{movie.runtime} min</p>
                {movie.genres &&
                  movie.genres.map((gen, i) => (
                    <span key={i} className="text-green-400">
                      {gen.name}
                    </span>
                  ))}
              </div>
              <p className="text-yellow-300">
                Release date: {movie.release_date}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white">Overview</h3>
            <p className="text-white">{movie.overview}</p>
          </div>
        </div>
        <div className="flex-1">
          <img src={`${img_base_path}${movie.backdrop_path}`} />
        </div>
      </div>
      <div className="grid grid-cols-5">
        {cast.map((actor, index) => (
          <Cast key={index} actor={actor} />
        ))}
      </div>
    </div>
  );
}

export default MovieDetail;
