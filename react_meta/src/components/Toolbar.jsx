import React, { useContext } from "react";

import InteractiveCounter from "./InteractiveCounter";
import ThemeContext from "../contexts/ThemeContext";
import ThemedButton from "./ThemedButton";

function Toolbar() {
  const { theme } = useContext(ThemeContext);

  const toolbarClasses = `border rounded p-3 ${theme === "light" ? "bg-gray-50" : "bg-gray-800"}`;

  return (
    <div className={toolbarClasses}>
      <p className={theme === "light" ? "text-black" : "text-white"}>Toolbar</p>
      <ThemedButton />
    </div>
  );
}
export default Toolbar;
