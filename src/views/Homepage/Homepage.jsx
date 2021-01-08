import { useState, useEffect } from "react";
import * as API from "../../services/tmdbApi";
import MoviesList from "../../components/MoviesList";

export default function Homepage() {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    API.getTrendingMovies().then(({ results }) => setPopMovies(results));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Popular movies this week:</h1>
      {popMovies && <MoviesList moviesArr={popMovies} />}
    </>
  );
}
