# 🏪 Simple Shop – React & Vite

![Projektübersicht](public/meta_overview.png)

Willkommen zu deinem Übungsprojekt!  
Dieses Repository enthält einen einfachen Online-Shop, der mit **React** und **Vite** gebaut wurde. Ziel ist es, die wichtigsten Konzepte von React, Context, Komponentenstruktur und State-Management zu verstehen.

---

## 🧑‍💻 Projektstruktur

- **src/App.jsx**  
  Einstiegspunkt der App. Umhüllt die Hauptseite mit dem `ShopProvider`, damit alle Komponenten auf die Shop-Daten zugreifen können.

- **src/contexts/ShopProvider.jsx**  
  Stellt den globalen Zustand (Produkte, Warenkorb) und die zugehörigen Funktionen (`addToCart`, `removeFromCart`) per Context bereit.

- **src/pages/StorePage.jsx**  
  Hauptseite: Zeigt die Produktliste und den Warenkorb an.

- **src/components/ProductList.jsx**  
  Zeigt alle Produkte als Karten an.

- **src/components/Cart.jsx**  
  Zeigt die Artikel im Warenkorb und den Gesamtpreis.

---

## 🛒 Funktionalität

- Produkte werden von einer externen API geladen ([fakestoreapi.com](https://fakestoreapi.com/)).
- Du kannst Produkte in den Warenkorb legen und wieder entfernen.
- Der Warenkorb wird im `localStorage` gespeichert, damit er beim Neuladen erhalten bleibt.

---

## 🧩 Wichtige Konzepte

- **React Context:**  
  Ermöglicht das Teilen von Daten (z.B. Produkte, Warenkorb) zwischen Komponenten, ohne Props durch viele Ebenen zu reichen.

- **useState & useEffect:**  
  Für lokalen Zustand und Nebenwirkungen (z.B. Daten laden).

- **Komponentenstruktur:**  
  Die App ist in kleine, wiederverwendbare Komponenten aufgeteilt.

---

## 📝 Aufgaben für dich

- Verändere das Styling (z.B. mit Tailwind oder DaisyUI).
- Füge neue Features hinzu (z.B. Produktdetails, Mengenänderung im Warenkorb).
- Schau dir die Kommentare im Code an – sie helfen beim Verständnis!

---

Viel Spaß beim Ausprobieren und Erweitern!  
Bei Fragen: Frag im Kurs oder schau in die Kommentare im Code.
