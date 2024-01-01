import React, { useState } from "react";
import "../assets/AddCard.css";
import Swal from "sweetalert2";

const AddCard = ({ isOpen, onClose, onAddCard }) => {
  const [id, setId] = useState();
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [status, setStatus] = useState("Want to Learn");
  const [lastModified, setLastModified] = useState(new Date().toISOString());

  const handleAddCard = () => {
    if (!front || !back || !status) {
      Swal.fire("Please fill in all fields.");
      return;
    }

    const newCard = {
      id,
      front,
      back,
      lastModified,
      status,
    };

    onAddCard(newCard);
    setFront("");
    setBack("");
    setStatus("Want to Learn");
    setId((id) => id + 1);
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "open" : "closed"}`}>
      <div className="popup-content">
        <label>
          Front:
          <textarea
            value={front}
            onChange={(e) => setFront(e.target.value)}
            rows={6}
            cols={50}
            style={{ resize: "none" }}
            required
          />
        </label>
        <label>
          Back:
          <textarea
            value={back}
            onChange={(e) => setBack(e.target.value)}
            rows={6}
            cols={50}
            style={{ resize: "none" }}
            required
          />
        </label>
        <label>
          Status:
          <div className="select-container">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Want to Learn">Want to Learn</option>
              <option value="Learned">Learned</option>
              <option value="Noted">Noted</option>
            </select>
          </div>
        </label>
        <div className="button-container">
          <button onClick={handleAddCard}>Add Card</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
