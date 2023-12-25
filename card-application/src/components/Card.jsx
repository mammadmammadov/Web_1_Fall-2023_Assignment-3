import React, { useState } from "react";
import "../assets/Card.css";

function convertISOToUserFriendly(
  isoString,
  format = "MMMM d, yyyy h:mm:ss a"
) {
  const dateObj = new Date(isoString);
  return dateObj.toLocaleString(undefined, format);
}

function Card({ front, back, lastModified, status }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  const statusStyle = {
    marginTop: "2%",
    fontSize: "large",
  };

  const timeStyle = {
    marginTop: "10%",
  };

  return (
    <div
      className={`card-item ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
    <div class="card-data">
      <div className="card-front">
        <h3>{front}</h3>
        <p style={statusStyle}>{status}</p>
        <p style={timeStyle}>{convertISOToUserFriendly(lastModified)}</p>
        <div className="card-buttons">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
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
