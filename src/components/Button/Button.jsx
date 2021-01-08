import s from "./Button.module.css";
import PropTypes from "prop-types";

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
