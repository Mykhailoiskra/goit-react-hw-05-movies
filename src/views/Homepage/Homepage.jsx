// Libraries import
import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../../services/tmdbApi";

// Components import
import MoviesList from "../../components/MoviesList";

export default function Homepage() {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setPopMovies(results));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Popular movies this week:</h1>
      {popMovies && <MoviesList moviesArr={popMovies} />}
    </>
  );
}
