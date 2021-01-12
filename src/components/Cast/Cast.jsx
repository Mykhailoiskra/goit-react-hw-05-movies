// Libraries import
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Other imports
import { getCast } from "../../services/tmdbApi";
import s from "./Cast.module.css";

export default function Cast({ id }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(id).then((res) => setCast(res.cast));
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
