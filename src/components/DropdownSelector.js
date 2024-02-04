// DropdownSelector.js
import React from 'react';

const DropdownSelector = ({ options, value, onChange, placeholder = '', id, name}) => (
    <select value={value} onChange={(e)=> onChange(e.target.value)} className="dropdown-selector" id={id} name={name}> 
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
            <option key={`${option}-${index}`} value={option}>
                {option}
            </option>
        ))}
    </select>
);

export default DropdownSelector;
