import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Movie from "../../components/Movie";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery().get("query");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_key = "c45a857c193f6302f2b5061c3b85e743";

  async function fetchMovies(getKey,getQuery) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${getKey}&language=en-US&query=${getQuery}&page=1`
      );
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(API_key,query);
  }, [query]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-black mt-16">
      <div className="movies-container grid grid-cols-5 ">
        {movies
          ? movies.map((movie, index) => <Movie key={index} movie={movie} />)
          : "movies not found"}
      </div>
    </div>
  );
}

export default Search;
