import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import AppBar from "./components/AppBar";

const Homepage = lazy(() =>
  import("./views/Homepage.jsx" /* webpackChunkName: "homepage" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage.jsx" /* webpackChunkName: "movies-page" */)
);

const MovieDetails = lazy(() =>
  import("./views/MovieDetails.jsx" /* webpackChunkName: "movie-details" */)
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
