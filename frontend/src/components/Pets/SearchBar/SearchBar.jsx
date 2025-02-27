import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search pets..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="search-bar"
  />
);

export default SearchBar;