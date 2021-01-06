import s from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button type="button" className={s.Button} onClick={onClick}>
      Show More
    </button>
  );
}

export default Button;
