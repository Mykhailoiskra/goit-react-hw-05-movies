import "./App.css";
import { Router, Switch } from "react-router-dom";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Homepage from "./views/Homepage.jsx";

function App() {
  return (
    <Container>
      <AppBar />
      <Homepage />
    </Container>
  );
}

export default App;
