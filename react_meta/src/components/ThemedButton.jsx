import React, { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  const buttonClasses = `py-2 px-4 rounded ${theme === "light" ? "bg-blue-500" : "bg-indigo-500"} text-white`;

  return (
    <button className={buttonClasses} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Theme: {theme} (Toggle)
    </button>
  );
}
export default ThemedButton;
