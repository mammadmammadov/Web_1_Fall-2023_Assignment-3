import "../assets/EditFlashCards.css";
import React, { useState } from "react";

const EditForm = ({ initialData, onSave, onCancel }) => {
  const [editData, setEditData] = useState(initialData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    onSave(editData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className={`open`}>
      <div className="popup-content">
        <div className="edit-form">
          <label>
            Front:
            <input
              type="text"
              name="front"
              value={editData.front}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Back:
            <input
              type="text"
              name="back"
              value={editData.back}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={editData.status}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
