import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as API from "../services/tmdbApi";

export default function Homepage() {
  const [popMovies, setPopMovies] = useState(null);

  useEffect(() => {
    API.getTrendingMovies().then(({ results }) => setPopMovies(results));
  }, []);

  return (
    <div>
      {popMovies && (
        <ul>
          {popMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
