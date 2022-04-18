import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        rowGap: 30,
        width: "inherit",
        marginTop: 20,
      }}
    >
      {movies.map((movie, key) => {
        return <MovieCard movie={movie} key={key} />;
      })}
    </div>
  );
};

export default MovieList;
