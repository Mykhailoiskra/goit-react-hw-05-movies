import { useState, useEffect } from "react";
import * as API from "../services/tmdbApi";

export default function Cast({ id }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    API.getCast(id).then((res) => setCast(res.cast));
  }, [id]);

  return (
    cast && (
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    )
  );
}
