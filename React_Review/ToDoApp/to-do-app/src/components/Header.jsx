import React from "react";

export default function Header({ filter, filters, onFilterChange }) {

  return (
    <header>
      <ul>
        {
          <header>
            <ul>
              {filters.map((type, index) => (
                <li key={index}>
                  <button type={type} onClick={() => onFilterChange(type)}>
                    {type}
                  </button>
                </li>
              ))}
            </ul>
          </header>
        }
      </ul>
    </header>
  );
}
