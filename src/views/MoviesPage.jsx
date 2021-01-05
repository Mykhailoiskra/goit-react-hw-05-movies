import { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import * as API from "../services/tmdbApi";
import SearchForm from "../components/SearchForm";
import Button from "../components/Button";

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
    API.findMovie(searchQuery, page).then((res) => {
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
      {searchResult && (
        <div>
          <ul>
            {searchResult.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${url}/${movie.id}`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button onClick={handleShowMore} />
        </div>
      )}
    </>
  );
}
