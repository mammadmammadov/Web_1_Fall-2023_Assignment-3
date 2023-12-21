import React from 'react';
import "../assets/App.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input class="search-input"
      type="text"
      placeholder="Search Flashcards"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default SearchBar;
