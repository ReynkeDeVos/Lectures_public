import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen bg-base-300">
      {/* 
        Wir übergeben props an die Header-Komponente
        Dies zeigt, wie wir Daten von einer Eltern- an eine Kind-Komponente weitergeben
      */}
      <Header
        title="Meine Fotogalerie"
        subtitle="Eine einfache React-App mit useState, useEffect und localStorage"
      />

      {/* 
        Die Main-Komponente enthält unsere Hauptlogik
        Sie kümmert sich um State-Management und das Rendern der Fotogalerie
      */}
      <Main />
    </div>
  );
}

export default App;
