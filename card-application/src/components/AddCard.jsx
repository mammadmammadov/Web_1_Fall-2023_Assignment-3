
import React, { useState } from 'react';
import "../assets/AddCard.css"
const AddCard = ({ isOpen, onClose, onAddCard }) => {
  const [id, setId] = useState();
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [status, setStatus] = useState('Want to Learn');
  const [lastModified, setLastModified] = useState(new Date().toISOString());

  const handleAddCard = () => {

    if (!front || !back || !status) {
      alert("Please fill in all fields.");
      return;
    }

    const newCard = {
      id,
      front,
      back,
      lastModified,
      status
    };
    
    setId(id+1);
    onAddCard(newCard);
    setLastModified(new Date().toISOString());
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
