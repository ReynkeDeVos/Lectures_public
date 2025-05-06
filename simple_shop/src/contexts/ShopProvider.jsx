// Diese Komponente stellt die eigentliche Implementierung unseres Contexts bereit.
// Sie verwaltet den Zustand (Daten) und Funktionen, die geteilt werden sollen.
import React, { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

// Der ShopProvider umhüllt Teile unserer App, die
// Zugriff auf den gemeinsamen Zustand benötigen (Produkte, Warenkorb, usw.)
export function ShopProvider({ children }) {
  // useState erstellt "reaktive" Variablen, die bei Änderung
  // Komponenten dazu bringen, neu zu rendern
  const [products, setProducts] = useState([]); // API-Produkte speichern
  const [cart, setCart] = useState(() => {
    // Warenkorb aus localStorage laden beim ersten render
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Fehler beim Laden des Warenkorbs: ", error);
      }
    }
    return [];
  }); // Warenkorbartikel speichern

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // useEffect führt Code aus, wenn die Komponente eingebunden wird (lädt)
  // Das leere Abhängigkeitsarray [] bedeutet, dass dies nur einmal ausgeführt wird
  useEffect(() => {
    // Diese Funktion holt Produktdaten von einer externen API
    async function fetchProducts() {
      try {
        // fetch ist eine eingebaute Funktion, um HTTP-Anfragen zu stellen
        const response = await fetch("https://fakestoreapi.com/products");

        // Dieses Response-Objekt enthält den "Rohinhalt" der Antwort,
        //    aber noch nicht in einem für JavaScript nutzbaren Format
        // Die vom Server gesendeten JSON-Daten in ein JavaScript-Objekt umzuwandeln
        // Die JSON ist ersteinmal nur ein String, welcher wie ein Array mit Objekten gebaut ist.
        const data = await response.json();
        console.log(data);
        // Aktualisiere unseren Produkt-Zustand mit den Daten
        setProducts(data);
      } catch (error) {
        // Wenn etwas schief geht, protokolliere den Fehler
        console.error("Fehler beim Laden der Produkte:", error);
      }
    }

    // Rufe die gerade definierte Funktion auf
    fetchProducts();
  }, []); // Leeres Array bedeutet "einmal nach dem Einbinden der Komponente ausführen"

  // Funktion zum Hinzufügen eines Artikels zum Warenkorb
  const addToCart = (product) => {
    // setCart aktualisiert den Warenkorb-Zustand
    // Wir übergeben eine Funktion, um den vorherigen Zustand (prev) zu erhalten
    setCart((prevCart) => {
      // Schritt 1: Prüfe, ob dieses Produkt bereits im Warenkorb ist
      const productExists = prevCart.find((item) => item.id === product.id);
      // Boolean: true/false

      // Schritt 2: Behandle zwei verschiedene Szenarien
      if (productExists) {
        // Szenario 1: Wenn das Produkt bereits im Warenkorb existiert
        // Erstelle ein neues Array, in dem wir nur die Menge des passenden Produkts aktualisieren
        return prevCart.map((item) => {
          // Für jeden Artikel im Warenkorb, prüfe, ob es derjenige ist, den wir aktualisieren wollen
          if (item.id === product.id) {
            // Erstelle ein neues Objekt mit allen gleichen Eigenschaften (mit Spread-Operator ...)
            // aber erhöhe die Menge um 1
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            // Für alle anderen Artikel, behalte sie unverändert bei
            return item;
          }
        });
      } else {
        // Szenario 2: Wenn es ein neues Produkt ist, das noch nicht im Warenkorb ist
        // Erstelle ein neues Array mit allen vorhandenen Artikeln plus unserem neuen
        return [
          ...prevCart, // Alle vorhandenen Warenkorb-Artikel einbeziehen
          {
            // Neues Artikel-Objekt hinzufügen
            ...product, // Alle Produkt-Eigenschaften kopieren
            quantity: 1, // Menge-Eigenschaft auf 1 setzen
          },
        ];
      }
    });
  };

  // Funktion zum Entfernen eines Artikels aus dem Warenkorb
  const removeFromCart = (id) => {
    // setCart aktualisiert unseren Warenkorb-Zustand
    setCart((prevCart) => {
      // filter erstellt ein neues Array, das nur Elemente enthält, die den Test bestehen
      // Hier behalten wir alle Artikel AUSSER dem mit der ID, die wir entfernen möchten
      return prevCart.filter((item) => {
        // Gib true zurück, um den Artikel zu behalten, false um ihn zu entfernen
        // item.id !== id bedeutet "behalte diesen Artikel, wenn seine ID NICHT die ist, die wir entfernen möchten"
        return item.id !== id;
      });
    });
  };

  // Der Provider umhüllt seine untergeordneten Komponenten mit dem Context
  // Die value-Prop enthält alle Daten und Funktionen, die wir teilen möchten
  return <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart }}>{children}</ShopContext.Provider>;
}
