import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
    setQuery("");
  }

  return (
    <nav className="w-full bg-black text-xl text-white py-5 px-10 flex font-mono items-center justify-between border-b border-white fixed top-0">
      <div className="navbar-left w-1/5 min-w-fit">Movies</div>
      <div className="navbar-right">
        <div className=" w-full flex items-center justify-between">
          <Link to="/">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="text-black"
            />

            <button type="submit">GO</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
