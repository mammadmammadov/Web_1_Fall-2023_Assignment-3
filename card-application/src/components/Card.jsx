import React, { useState } from "react";
import "../assets/Card.css";

function convertISOToUserFriendly(
  isoString,
  format = "MMMM d, yyyy h:mm:ss a"
) {
  const dateObj = new Date(isoString);
  return dateObj.toLocaleString(undefined, format);
}

function Card({
  key,
  id,
  front,
  back,
  lastModified,
  status,
  onEdit,
  onDelete,
}) {
  const [isFlipped, setFlipped] = useState(false);

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
    marginTop: "2%",
    fontSize: "large",
  };

  const timeStyle = {
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
