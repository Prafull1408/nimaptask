import React from "react";

function Cast({ actor }) {
  const img_base_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="w-full inline-block">
      <img src={`${img_base_path}${actor.profile_path}`} />
      <p className="text-red-400">{actor.name}</p>
      <p className="text-red-400">charactor: {actor.character}</p>
    </div>
  );
}

export default Cast;
