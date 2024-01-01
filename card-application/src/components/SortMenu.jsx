import React from "react";
import "../assets/App.css";

function SortMenu({ sortOption, onSortChange }) {
  return (
    <select
      className="custom-select"
      value={sortOption}
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="lastModified">Most Recent to Oldest</option>
      <option value="oldest">Oldest to Most Recent</option>
    </select>
  );
}

export default SortMenu;
