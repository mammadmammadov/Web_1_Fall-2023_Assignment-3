import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../assets/FlashcardPage.css";
import SearchBar from "./SearchBar";
import FilterMenu from "./FilterMenu";
import SortMenu from "./SortMenu";
import AddCard from "./AddCard";
import EditFlashcards from "./EditFlashcards";
import InfiniteScroll from "react-infinite-scroll-component";
import "../assets/App.css";
import ShareCards from "./ShareCards";

function FlashcardPage() {
  const [flashcards, setFlashCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [sortOption, setSortOption] = useState("lastModified");
  const [newCard, setNewCard] = useState(false);
  const [cardAdded, setCardAdded] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [displayedCards, setDisplayedCards] = useState(7);
  const [selectedFlashcards, setSelectedFlashcards] = useState([]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDisplayedCards((prev) => prev + 7);
    }, 1000);
  };

  useEffect(() => {
    fetch("http://localhost:3001/flashcards")
      .then((response) => response.json())
      .then((data) => {
        const sortedFlashcards = data.sort(
          (date1, date2) =>
            new Date(date2.lastModified) - new Date(date1.lastModified)
        );
        setFlashCards(sortedFlashcards);
      })
      .catch((error) =>
        console.error("Error while fetching flashcards", error)
      );
  }, []);

  const handleAddCard = async (card) => {
    try {
      const newCard = {
        ...card,
        lastModified: new Date().toISOString(),
      };

      const res = await fetch("http://localhost:3001/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      });

      if (!res.ok) {
        throw new Error("Failed to add card");
      }

      setFlashCards([...flashcards, card]);

      setNewCard(false);

      setCardAdded(true);
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const createCard = (card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        front={card.front}
        back={card.back}
        lastModified={card.lastModified}
        status={card.status}
        onDelete={() => deleteFlashcard(card.id)}
        onEdit={() => startEditing(card.id)}
        onToggleSelection={handleCardToggle}
        isSelected={selectedFlashcards.includes(card.id)}
      />
    );
  };

  const deleteFlashcard = (id) => {
    console.log("Deleting flashcard. ID:", id);

    const remainingFlashcards = flashcards.filter((card) => card.id !== id);

    setFlashCards(remainingFlashcards);

    fetch(`http://localhost:3001/flashcards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to delete! Card id: ${id}`);
        }
      })
      .catch((err) => console.error("Error while deleting", err));
  };

  const startEditing = (id) => {
    setEditingCard(id);
  };

  const cancelEdit = () => {
    setEditingCard(null);
  };

  const saveChanges = async (editedCard) => {
    try {
      setFlashCards((prevFlashcardsData) =>
        prevFlashcardsData.map((card) =>
          card.id === editedCard.id ? editedCard : card
        )
      );

      const response = await fetch(
        `http://localhost:3001/flashcards/${editedCard.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedCard),
        }
      );

      if (!response.ok) {
        console.error("Failed to update flashcard on the server.");
      }

      setEditingCard(null);
    } catch (error) {
      console.error("Error updating flashcard:", error);
    }
  };

  const url = `http://localhost:3001/flashcards`;

  useEffect(() => {
    if (cardAdded) {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Connection error! Status: ${res.status}`);
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setFlashCards(data);
          setCardAdded(false);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }
  }, [cardAdded]);

  // The [cardAdded] dependency array above ensures us that the effect runs whenever the cardAdded state happens
  // It solved the delete problem of newly added cards in my case

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
    })
    .slice(0, displayedCards);

  const handleCardToggle = (cardId) => {
    setSelectedFlashcards((prevSelected) =>
      prevSelected.includes(cardId)
        ? prevSelected.filter((id) => id !== cardId)
        : [...prevSelected, cardId]
    );
  };

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

        <button className="add" onClick={() => setNewCard(true)}>
          󠀫󠀫+
        </button>

        <AddCard
          isOpen={newCard}
          onClose={() => setNewCard(false)}
          onAddCard={handleAddCard}
        />

        <ShareCards
          selectedFlashcards={selectedFlashcards}
          flashcards={sortedAndFilteredFlashcards}
        />

        {editingCard && (
          <EditFlashcards
            card={sortedAndFilteredFlashcards.find(
              (card) => card.id === editingCard
            )}
            onSave={saveChanges}
            onCancel={cancelEdit}
            isActive={true}
          />
        )}
      </div>

      {sortedAndFilteredFlashcards.length > 0 ? (
        <InfiniteScroll
          dataLength={sortedAndFilteredFlashcards.length}
          next={fetchMoreData}
          hasMore={sortedAndFilteredFlashcards.length < flashcards.length}
          loader={<br></br>}
        >
          <div className="cards-list">
            {sortedAndFilteredFlashcards.map(createCard)}
          </div>
        </InfiniteScroll>
      ) : (
        <h2 className="no-element">No card found</h2>
      )}
    </div>
  );
}

export default FlashcardPage;