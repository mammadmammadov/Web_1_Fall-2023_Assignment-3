import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../assets/FlashcardPage.css";

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

  const url = `http://localhost:3001/flashcards`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => setFlashCards(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="grid-container">
      <h1>Flashcards</h1>
      <ul className="cards-list">
        {flashcards.map(createCard)}
      </ul>
    </div>
  );
}

export default FlashcardPage;
