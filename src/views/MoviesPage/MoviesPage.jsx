import s from "./MoviesPage.module.css";

// Libraries import
import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";

// Components import

import SearchForm from "../../components/SearchForm";
import Button from "../../components/Button";
import MoviesList from "../../components/MoviesList";

// Other imports
import { findMovie } from "../../services/tmdbApi";

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();

  const [searchResult, setSearchResult] = useState(null);
  const [page, setPage] = useState(1);

  const { url } = useRouteMatch();
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    findMovie(searchQuery, page).then((res) => {
      if (page === 1) {
        setSearchResult(res.results);
      } else {
        setSearchResult((prevResults) => [...prevResults, ...res.results]);
      }
    });
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setPage(1);
    history.push({ ...location, search: `query=${query}` });
  };

  const handleShowMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {searchResult &&
        (searchResult.length > 0 ? (
          <div>
            <MoviesList moviesArr={searchResult} url={url} />
            <Button onClick={handleShowMore} name={"Show more"} />
          </div>
        ) : (
          <h1 className={s.noResTitle}>Noting was found</h1>
        ))}
    </>
  );
}
