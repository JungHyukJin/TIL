import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

function updateDarkMode(darkMode) {
    console.log(darkMode)
    if(darkMode){
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        updateDarkMode(!isDarkMode);
    }
  return <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => useContext(DarkModeContext);