import { useState, useEffect, lazy, Suspense } from "react";
import {
  Link,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import { Route } from "react-router-dom";
import * as API from "../services/tmdbApi";

const Cast = lazy(() => import("./Cast.jsx" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("./Reviews.jsx" /* webpackChunkName: "reviews" */)
);

export default function MovieDetailsView() {
  const location = useLocation();
  console.log(location);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  console.log(url);

  useEffect(() => {
    API.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <div>
        <Link to={location?.state?.from ?? "/"}>Back to Movies</Link>
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
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li key="reviews">
            {" "}
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
            >
              {"Reviews"}
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path={`${path}/cast`}>
            <Cast id={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews id={movieId} />
          </Route>
        </Suspense>
      </div>
    )
  );
}
