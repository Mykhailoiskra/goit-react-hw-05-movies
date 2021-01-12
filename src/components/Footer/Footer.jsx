// Libraries import
import React from "react";
// Other imports
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <span className={s.footerLable}>Powered by:</span>
      <a href="https://www.themoviedb.org/">
        <img
          className={s.footerLogo}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt="TMDB Logo"
        />
      </a>
    </footer>
  );
}
