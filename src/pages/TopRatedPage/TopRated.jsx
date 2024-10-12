import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie";

function TopRated() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_key = "c45a857c193f6302f2b5061c3b85e743";

  async function fetchMovies(getKey) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${getKey}&language=en-US&page=${pageCount}`
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
    fetchMovies(API_key);
  }, [pageCount]);

  function handlePreviousPagination() {
    if (pageCount >= 2) {
      setPageCount(pageCount - 1);
    }
  }

  function handleNextPagination() {
    setPageCount(pageCount + 1);
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden overflow-y-auto bg-black mt-16">
      <div className="movies-container grid grid-cols-5 ">
        {movies
          ? movies.map((movie, index) => <Movie key={index} movie={movie} />)
          : "movies not found"}
      </div>
      <div className="pagination-container text-white flex items-center justify-center py-8">
        <button className="p-4" onClick={handlePreviousPagination}>
          BACK
        </button>
        <button className="p-4 bg-slate-500">{pageCount}</button>
        <button className="p-4" onClick={handleNextPagination}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default TopRated;
