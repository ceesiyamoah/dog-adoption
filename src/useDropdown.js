import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            if (e.target.value == "all") {
              setState("");
            }
          }}
          onBlur={(e) => {
            setState(e.target.value);
            if (e.target.value == "all") {
              setState("");
            }
          }}
          disabled={options.length === 0}
        >
          <option value="all">All</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
