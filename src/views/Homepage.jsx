import { useState, useEffect } from "react";
import * as API from "../services/tmdbApi";
import MoviesList from "../components/MoviesList";

export default function Homepage() {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    API.getTrendingMovies().then(({ results }) => setPopMovies(results));
  }, []);

  return <>{popMovies && <MoviesList moviesArr={popMovies} />}</>;
}
