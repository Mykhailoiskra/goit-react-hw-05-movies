import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
    <NavLink
      to="/queue"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      queue
    </NavLink>
  </nav>
);

export default Navigation;
