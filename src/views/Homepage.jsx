import { useState, useEffect } from "react";
import * as API from "../services/tmdbApi";

export default function Homepage() {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    API.getTrendingMovies().then(({ results }) => setPopMovies(results));
  }, []);

  console.log(popMovies);

  return (
    <>
      {popMovies && (
        <ul>
          {popMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
