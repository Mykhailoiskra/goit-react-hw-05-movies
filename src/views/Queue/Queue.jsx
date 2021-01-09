import s from "./Queue.module.css";
import { useState, useEffect } from "react";
import MoviesList from "../../components/MoviesList";
export default function Queue() {
  const [queue, setQueue] = useState(null);

  useEffect(() => {
    setQueue(JSON.parse(localStorage.getItem("queue")));
  }, []);

  return (
    <>
      <h1 className={s.title}>Movies I want to watch:</h1>
      {queue && <MoviesList moviesArr={queue} />}
    </>
  );
}
