// React Context ermöglicht es uns, Daten zwischen Komponenten zu teilen, ohne
// Props durch jede Ebene weitergeben zu müssen (Prop Drilling).
// Diese Datei erstellt NUR den Context - sie stellt noch keine Daten bereit.
import { createContext } from "react";

// Erstelle einen neuen Context mit Standardwerten.
// Diese Standardwerte helfen bei der Code-Vervollständigung und TypeScript-Integration.
// Die tatsächlichen Werte werden vom ShopProvider bereitgestellt.
export const ShopContext = createContext({
  products: [], // Wird unsere Produktliste von der API speichern
  cart: [], // Wird zum Warenkorb hinzugefügte Artikel speichern
  addToCart: () => {}, // Funktion zum Hinzufügen von Artikeln zum Warenkorb
  removeFromCart: () => {}, // Funktion zum Entfernen von Artikeln aus dem Warenkorb
});
