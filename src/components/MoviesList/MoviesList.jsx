import { Link, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";
import PropTypes from "prop-types";

export default function MoviesList({ moviesArr, url = "/movies" }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {moviesArr.map((movie) => (
        <li key={movie.id} className={s.listItem}>
          <Link
            className={s.listLink}
            to={{
              pathname: `${url}/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <img
              className={s.listImg}
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.original_title}
              onError={(e) => {
                if (e.target.src !== "/imgNotFound.png") {
                  e.target.src = "/imgNotFound.png";
                }
              }}
            />

            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  moviesArr: PropTypes.array,
  url: PropTypes.string,
};
