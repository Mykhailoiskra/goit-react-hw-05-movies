// Libraries import
import React, { useState } from "react";

// Other imports
import s from "./SearchForm.module.css";

export default function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleNameChange = (event) => {
    setInput(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      alert("You have to type something!");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={input}
        onChange={handleNameChange}
      />
    </form>
  );
}
