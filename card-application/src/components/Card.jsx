import React, { useState } from "react";
import "../assets/Card.css";
import "../assets/FlashcardPage.css";

function convertISOToUserFriendly(
  isoString,
  format = "MMMM d, yyyy h:mm:ss a"
) {
  const dateObj = new Date(isoString);
  return dateObj.toLocaleString(undefined, format);
}

function Card({
  id,
  front,
  back,
  lastModified,
  status,
  onEdit,
  onDelete,
  onToggleSelection,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isFlipped, setFlipped] = useState(false);

  const handleCheckboxChange = (event) => {
    event.stopPropagation();
    setIsSelected(!isSelected);
    if (id !== undefined) {
      onToggleSelection(id);
    } else {
      console.error("Card ID is undefined.");
    }
  };

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete();
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    onEdit();
  };

  const statusStyle = {
    color:"#28231d",
    marginTop: "2%",
    fontSize: "large",
  };

  const timeStyle = {
    color:"#05092d",
    marginTop: "5%",
  };

  return (
    <div
      className={`card-item ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-data">
        <div className="card-front">
          <h3>{front}</h3>
          <p style={statusStyle}>{status}</p>
          <p style={timeStyle}>{convertISOToUserFriendly(lastModified)}</p>
          <label
            className="checkbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={handleCheckboxChange}
              onClick={(e) => e.stopPropagation()}
            />
            <span className="checkmark"></span>
          </label>
          <div className="card-buttons">
            <button onClick={handleEdit} className="edit-button">
              Edit ✏️
            </button>
            <button onClick={handleDelete} className="delete-button">
              Delete 🗑️
            </button>
          </div>
        </div>
        <div className="card-back">
          <h4>{back}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
