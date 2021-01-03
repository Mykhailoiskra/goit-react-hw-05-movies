import { useState } from "react";

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
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={input}
        onChange={handleNameChange}
      />
    </form>
  );
}
