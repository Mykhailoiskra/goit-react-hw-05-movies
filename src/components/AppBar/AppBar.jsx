import s from "./AppBar.module.css";
import Navigation from "../Navigation";

export default function AppBar() {
  return (
    <header
      className={s.header}
      // style={{ backgroundImage: "url(/header.jpg)" }}
    >
      <img
        width="80"
        height="40"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        alt="TMDB logo"
      />
      <Navigation />
    </header>
  );
}
