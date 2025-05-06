import DataFetcher from "./components/DataFetcher";
import InteractiveCounter from "./components/InteractiveCounter";
import ThemeContext from "./contexts/ThemeContext";
import Toolbar from "./components/Toolbar";
import { useState } from "react";

// Komponenten
function PageTitle() {
  return <h1>Meine React App</h1>;
}

// Props - dies ist ein Kindelement und erwartet einen Wert(Object) für seine Variable
function DisplayText(props) {
  return <p className="border border-green-500 p-1">{props.message}</p>;
}

// Events (onClick)
function SimpleButton() {
  function handleClick() {
    alert("Geklickt!");
  }

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
      Klick Mich!
    </button>
  );
}

// useEffect

function App() {
  const dynamicMessage = "Dynamische Nachricht";

  const [theme, setTheme] = useState("light");
  const appClasses = `p-5 ${theme === "light" ? "bg-white" : "bg-gray-900"}`;

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={appClasses}>
          <h2 className={`text-2xl ${theme === "light" ? "text-black" : "text-white"}`}>Komponenten mit Context</h2>
          <Toolbar />
        </div>
      </ThemeContext.Provider>

      {/* Components */}
      <PageTitle />
      <p>Wilkommen</p>

      <div className="container p-4">
        {/* Props: Das hier ist ein Elternelement und übergibt Werte an das Kindelement */}
        <DisplayText message="Hallo Welt" />
        <DisplayText message={"Summe: " + (2 + 2)} />
        <DisplayText message={dynamicMessage} />
      </div>

      {/* Events: onClick */}
      <div className="container p-4">
        <SimpleButton />
      </div>

      {/* Hooks: useState */}
      <InteractiveCounter />

      <div className="container p-4">
        <DataFetcher />
      </div>
    </>
  );
}

export default App;
