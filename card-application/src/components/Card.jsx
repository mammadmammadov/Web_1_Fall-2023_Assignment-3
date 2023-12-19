import React, { useState } from "react";
import "../assets/Card.css";


function Card({ front,back, lastModified, status }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <li
      className={`card-item ${isFlipped ? "flipped" : ""}`}

      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <h3>{front}</h3>
          <p>{lastModified}</p>
          <p>{status}</p>
        </div>
        <div className="card-back">
          <h4>{back}</h4>
        </div>
      </div>
    </li>
  );
}

export default Card;

