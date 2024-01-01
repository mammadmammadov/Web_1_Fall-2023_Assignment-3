
import React, { useState } from "react";
import "../assets/EditFlashcards.css";
import Swal from 'sweetalert2';

function EditFlashcards({ card, onSave, onCancel, isActive }) {
  const [editedCard, setEditedCard] = useState({ ...card });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCard((prevCard) => ({
      ...prevCard,
      [name]: value,
      lastModified: new Date().toISOString(),
    }));
  };

  const handleSave = () => {
    
    for (const key in editedCard) {
      if ((key==='front'||key=='back')&&editedCard[key].trim() === '') {
        Swal.fire(`Please fill-in the ${key} field`);
        return; 
      }
    }
    onSave(editedCard);
  };

  return (
    <div>
      <div
        className={`edit-popup-overlay ${isActive ? "active" : ""}`}
        onClick={onCancel}
      ></div>
      <div className={`edit-popup ${isActive ? "active" : ""}`}>
        <h2>Edit Flashcard</h2>
        <label htmlFor="front">Front:</label>
        <input
          type="text"
          id="front"
          name="front"
          value={editedCard.front}
          onChange={handleInputChange}
        />
        <label htmlFor="back">Back:</label>
        <input
          type="text"
          id="back"
          name="back"
          value={editedCard.back}
          onChange={handleInputChange}
        />
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={editedCard.status}
          onChange={handleInputChange}
        >
          <option value="Want to Learn">Want to Learn</option>
          <option value="Learned">Learned</option>
          <option value="Noted">Noted</option>
        </select>
        <div className="edit-buttons">
          <button onClick={handleSave}>Save Changes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditFlashcards;
