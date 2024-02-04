// SearchInput.js
import React from 'react';

const SearchInput = ({ value, onChange, placeholder = 'Search', id, name }) => (
    <input
        type="search"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        id={id}
        name={name}
    />
);

export default SearchInput;
