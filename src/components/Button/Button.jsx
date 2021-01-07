import s from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ onClick }) {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
      Show More
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
