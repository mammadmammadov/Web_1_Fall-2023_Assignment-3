import React from "react";

function FilterMenu({ filterStatus, onFilterChange }) {
  return (
    <select
      value={filterStatus}
      onChange={(e) => onFilterChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Learned">Learned</option>
      <option value="Want to Learn">Want to Learn</option>
      <option value="Noted">Noted</option>
    </select>
  );
}

export default FilterMenu;
