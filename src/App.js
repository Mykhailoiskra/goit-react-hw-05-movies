import "./App.css";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Homepage from "./views/Homepage.jsx";
import MovieDetails from "./views/MovieDetails.jsx";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
