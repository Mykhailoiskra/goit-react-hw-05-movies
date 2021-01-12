// Libraries
import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Link,
  NavLink,
  useParams,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import { Route } from "react-router-dom";

// Components imports
import Loader from "react-loader-spinner";
import Button from "../../components/Button";

// Other imports
import s from "./MovieDetails.module.css";
import { getMovieById } from "../../services/tmdbApi";
const Cast = lazy(() =>
  import("../../components/Cast" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../../components/Reviews" /* webpackChunkName: "reviews" */)
);

export default function MovieDetailsView() {
  const location = useLocation();
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const [movie, setMovie] = useState(null);
  const [inQueue, setInQueue] = useState(true);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  useEffect(() => {
    const queue = JSON.parse(localStorage.getItem("queue"));
    if (!movie) {
      return;
    } else if (!queue || !queue.find((item) => item.id === movie.id)) {
      setInQueue(false);
    }
  }, [inQueue, movie]);

  const onAddToQueue = () => {
    const queue = JSON.parse(localStorage.getItem("queue"));
    if (!queue) {
      localStorage.setItem("queue", JSON.stringify([movie]));
      setInQueue(true);
      return;
    }

    localStorage.setItem("queue", JSON.stringify([movie, ...queue]));
    setInQueue(true);
  };

  const onRemoveFromQueue = () => {
    const queue = JSON.parse(localStorage.getItem("queue"));
    const updatedQueue = queue.filter((item) => item.id !== movie.id);
    localStorage.setItem("queue", JSON.stringify([...updatedQueue]));
    setInQueue(false);
  };

  return (
    movie && (
      <>
        <Link className={s.backBtn} to={location?.state?.from ?? "/"}>
          Back to Movies
        </Link>
        <div className={s.movieCard}>
          <img
            className={s.movieImg}
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
          />

          <div className={s.infoWrapper}>
            <h2 className={s.movieName}>{`${
              movie.original_title
            } (${movie.release_date.slice(0, 4)})`}</h2>
            <div className={s.userScore}>
              <span className={s.Lbl}>User Score:</span>{" "}
              <span className={s.Value}>{movie.vote_average}</span>
            </div>
            <div className={s.genres}>
              <span className={s.Lbl}>Genres:</span>
              {movie.genres.map((genre) => (
                <span key={genre.id} className={s.genreName}>
                  {genre.name}
                </span>
              ))}
            </div>
            <h3 className={s.overviewHeader}>Overview</h3>
            <p className={s.overviewText}>{movie.overview}</p>
            {inQueue ? (
              <Button onClick={onRemoveFromQueue} name={"Remove from Queue"} />
            ) : (
              <Button onClick={onAddToQueue} name={"Add to Queue"} />
            )}
          </div>
        </div>
        <ul className={s.optionsList}>
          <li key="cast">
            <NavLink
              to={{
                pathname: `${url}/credits`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
              className={s.option}
              activeClassName={s.optionChecked}
            >
              Cast
            </NavLink>
          </li>
          <li key="reviews">
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: {
                  from: location?.state?.from ?? "/",
                },
              }}
              className={s.option}
              activeClassName={s.optionChecked}
            >
              {"Reviews"}
            </NavLink>
          </li>
        </ul>
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              style={{ textAlign: "center" }}
            />
          }
        >
          <Route path={`${path}/credits`}>
            <Cast id={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews id={movieId} />
          </Route>
        </Suspense>
      </>
    )
  );
}
