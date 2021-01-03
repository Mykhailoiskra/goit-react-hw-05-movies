import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as API from "../services/tmdbApi";
import SearchForm from "../components/SearchForm";
import Button from "../components/Button";

export default function MoviesPage() {
  const [searchResult, setSearchResult] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    API.findMovie(query, page).then((res) => {
      if (page === 1) {
        setSearchResult(res.results);
      } else {
        setSearchResult((prevResults) => [...prevResults, ...res.results]);
      }
    });
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handleShowMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {searchResult && (
        <div>
          <ul>
            {searchResult.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
          <Button onClick={handleShowMore} />
        </div>
      )}
    </>
  );
}
