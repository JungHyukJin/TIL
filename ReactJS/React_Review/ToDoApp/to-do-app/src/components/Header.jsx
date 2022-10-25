import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import {HiMoon, HiSun} from 'react-icons/hi';

export default function Header({ filter, filters, onFilterChange }) {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <header>
      <ul>
        {
          <header>
            <button onClick={toggleDarkMode}>
              {!isDarkMode && <HiMoon/ >}
              {isDarkMode && <HiSun/ >}
            </button>
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
