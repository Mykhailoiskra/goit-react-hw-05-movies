// Libraries import
import React from "react";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../../services/tmdbApi";
import Loader from "react-loader-spinner";

// Components import
import MoviesList from "../../components/MoviesList";

export default function Homepage() {
  const { status, data, error } = useQuery("popularMovies", getTrendingMovies);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Popular movies this week:</h1>
      {status === "success" && <MoviesList moviesArr={data.results} />}
    </>
  );
}
