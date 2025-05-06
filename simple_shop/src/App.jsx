

import "./App.css";
import { ShopProvider } from "./contexts/ShopProvider";
import StorePage from "./pages/StorePage";

// Wir umhüllen unsere gesamte Shop-Seite mit dem ShopProvider
// Das macht alle Context-Werte für StorePage verfügbar
// und alle ihre untergeordneten Komponenten
function App() {
  return (
    <ShopProvider>
      <StorePage />
    </ShopProvider>
  );
}

export default App;
