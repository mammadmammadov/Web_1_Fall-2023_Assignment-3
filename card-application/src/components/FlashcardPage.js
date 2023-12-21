import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../assets/FlashcardPage.css";
import SearchBar from "./SearchBar";
import FilterMenu from "./FilterMenu";
import SortMenu from "./SortMenu";

function createCard(card) {
  return (
    <Card
      key={card.id}
      front={card.front}
      back={card.back}
      lastModified={card.lastModified}
      status={card.status}
    />
  );
}

function FlashcardPage() {
  const [flashcards, setFlashCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOption, setSortOption] = useState("lastModified");

  const url = `http://localhost:3001/flashcards`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Connection error! Status: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        const sortedFlashcards = data.sort(
          (a, b) => new Date(b.lastModified) - new Date(a.lastModified)
        );
        setFlashCards(sortedFlashcards);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const sortedAndFilteredFlashcards = flashcards
    .filter((card) => {
      const filterCondition =
        filterStatus === "All" ? true : card.status === filterStatus;
      return filterCondition;
    })
    .filter(
      (card) =>
        card.front.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.back.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const comparator =
        sortOption === "lastModified"
          ? new Date(b.lastModified) - new Date(a.lastModified)
          : new Date(a.lastModified) - new Date(b.lastModified);

      return comparator;
    });

  return (
    <div className="grid-container">
      <h1>Flashcards</h1>
      <div className="search-filter-sort">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <FilterMenu
          filterStatus={filterStatus}
          onFilterChange={setFilterStatus}
        />
        <SortMenu sortOption={sortOption} onSortChange={setSortOption} />
      </div>
      {sortedAndFilteredFlashcards.length > 0 ? (
        <ul className="cards-list">
          {sortedAndFilteredFlashcards.map(createCard)}
        </ul>
      ) : (
        <h2 class="no-element">No card found</h2>
      )}
    </div>
  );
}

export default FlashcardPage;
