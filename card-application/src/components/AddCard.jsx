// AddCard.js

import React, { useState } from 'react';
import "../assets/AddCard.css"
const AddCard = ({ isOpen, onClose, onAddCard }) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [status, setStatus] = useState('Want to Learn'); // Default status value

  const handleAddCard = () => {
    // Validate input fields if needed
    const newCard = {
      front,
      back,
      status,
      // Add other properties like id, lastModified, as needed
    };

    // Call the onAddCard prop to add the card to the UI and JSON file
    onAddCard(newCard);
    // Clear input fields and close the modal
    setFront('');
    setBack('');
    setStatus('Want to Learn'); // Reset status to default
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <label>
          Front:
          <textarea
            value={front}
            onChange={(e) => setFront(e.target.value)}
            rows={6} // Adjust the number of rows as needed
            cols={50} // Adjust the number of columns as needed
            style={{ resize: 'none' }} // Disable resizing
            required
          />
        </label>
        <label>
          Back:
          <textarea
            value={back}
            onChange={(e) => setBack(e.target.value)}
            rows={6} // Adjust the number of rows as needed
            cols={50} // Adjust the number of columns as needed
            style={{ resize: 'none' }} // Disable resizing
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
