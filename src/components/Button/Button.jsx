// Libraries imports
import React from "react";
import PropTypes from "prop-types";

// Other imports
import s from "./Button.module.css";

function Button({ onClick = null, name = "click me" }) {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
