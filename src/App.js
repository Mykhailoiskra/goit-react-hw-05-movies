import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

const Homepage = lazy(() =>
  import("./views/Homepage" /* webpackChunkName: "homepage" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "movies-page" */)
);

const MovieDetails = lazy(() =>
  import("./views/MovieDetails" /* webpackChunkName: "movie - details" */)
);

const Queue = lazy(() =>
  import("./views/Queue" /* webpackChunkName: "queue" */)
);

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              style={{ textAlign: "center" }}
            />
          }
        >
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/queue">
              <Queue />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetails />
            </Route>
          </Switch>
        </Suspense>
      </Container>

      <Footer />
    </>
  );
}

export default App;
