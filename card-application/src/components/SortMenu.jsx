import React from 'react';

function SortMenu({ sortOption, onSortChange }) {
  return (
    <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
      <option value="lastModified">Last Modified</option>
      <option value="status">Status</option>
      {/* Add more sorting options as needed */}
    </select>
  );
}

export default SortMenu;
