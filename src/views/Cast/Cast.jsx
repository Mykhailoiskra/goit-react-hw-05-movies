import s from "./Cast.module.css";
import { useState, useEffect } from "react";
import * as API from "../../services/tmdbApi";
import PropTypes from "prop-types";

export default function Cast({ id }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.getCast(id).then((res) => setCast(res.cast));
  }, [id]);

  return (
    cast && (
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
              alt={actor.name}
              onError={(e) => {
                if (e.target.src !== "/imgNotFound.png") {
                  e.target.src = "/imgNotFound.png";
                }
              }}
            />
            <p className={s.castName}>{actor.name}</p>
          </li>
        ))}
      </ul>
    )
  );
}

Cast.propTypes = {
  id: PropTypes.string,
};