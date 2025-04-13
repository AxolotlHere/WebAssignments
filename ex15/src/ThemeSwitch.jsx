import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ margin: "20px 0" }}>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
