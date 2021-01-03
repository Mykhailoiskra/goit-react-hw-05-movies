import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import * as API from "../services/tmdbApi";
import Cast from "./Cast.jsx";
import Reviews from "./Reviews.jsx";

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        </div>
        <div>
          <h2>{`${movie.original_title} (${movie.release_date.slice(
            0,
            4
          )})`}</h2>
          <p>{`User Score: ${movie.vote_average}`}</p>
          <h3>{"Overview"}</h3>
          <p>{movie.overview}</p>
          <h4>{"Genres"}</h4>
          {movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
        <ul>
          <li key="cast">
            <NavLink to={`/movies/${movieId}/cast`}>{"Cast"}</NavLink>
          </li>
          <li key="reviews">
            {" "}
            <NavLink to={`/movies/${movieId}/reviews`}>{"Reviews"}</NavLink>
          </li>
        </ul>

        <Route path="/movies/:movieId/cast">
          <Cast id={movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews id={movieId} />
        </Route>
      </div>
    )
  );
}
