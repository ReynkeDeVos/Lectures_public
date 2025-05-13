// Die Main-Komponente ist das Herzstück unserer Anwendung
// Sie verwaltet den State für Fotos und Favoriten und rendert die Fotogalerie
// Hier sehen wir die wichtigsten React-Konzepte in Aktion: useState, useEffect und bedingte Rendering

import { useEffect, useState } from "react";

import PhotoCard from "./PhotoCard";
import { photosData } from "../data/photos";

function Main() {
  // ---- STATE MANAGEMENT ----

  // Initialisierung des Foto-States mit einem leeren Array
  // Wir verwenden useState, um reaktiven State in unserer Komponente zu haben
  // Das leere Array ist der Ausgangszustand, bevor wir Daten laden
  const [photos, setPhotos] = useState([]);

  // Initialisierung des Favoriten-States aus dem localStorage oder mit leerem Array
  // Die Callback-Funktion wird nur einmal bei der Initialisierung ausgeführt
  // Dies ist ein Muster, um teure Operationen (wie localStorage-Zugriff) nur einmal auszuführen
  const [favs, setFavs] = useState(() => {
    // Wir versuchen, gespeicherte Favoriten aus dem localStorage zu holen
    // Bei Fehlern oder wenn nichts gespeichert ist, beginnen wir mit einem leeren Array
    try {
      return JSON.parse(localStorage.getItem("favs") || "[]");
    } catch (error) {
      console.error("Fehler beim Laden der Favoriten:", error);
      return [];
    }
  });

  // ---- SIDE EFFECTS ----

  // Dieser useEffect wird einmal ausgeführt, wenn die Komponente gemountet wird
  // Das leere Dependency-Array [] bedeutet: "Führe diesen Effekt nur beim ersten Render aus"
  // In einem realen Projekt würde hier eine API-Anfrage stehen
  useEffect(() => {
    // Wir simulieren das Laden von Daten von einer API
    // In einer echten App würde hier ein API-Aufruf mit fetch oder axios stehen
    setPhotos(photosData);

    // Optional könnten wir hier auch einen Loading-State verwalten:
    // setIsLoading(true);
    // fetch('/api/photos')
    //   .then(res => res.json())
    //   .then(data => setPhotos(data))
    //   .finally(() => setIsLoading(false));
  }, []);

  // Dieser useEffect wird ausgeführt, wenn sich der favs-State ändert
  // Er speichert die aktuellen Favoriten im localStorage
  // So bleiben die Favoriten auch nach einem Seitenneuladen erhalten
  useEffect(() => {
    // Da localStorage nur Strings speichern kann, müssen wir das Array in JSON umwandeln
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]); // Diese Abhängigkeit bedeutet: "Führe diesen Effekt aus, wenn favs sich ändert"

  // ---- EVENT HANDLERS ----

  // Handler-Funktion zum Umschalten des Favoriten-Status eines Fotos
  // Wir verwenden die funktionale Form von setState mit einer prägnanten ternären Operation
  // So können wir sicher auf dem vorherigen State aufbauen und die Logik kompakt halten
  function toggleFav(id) {
    setFavs((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  // ---- RENDER LOGIC ----

  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* 
        Wir durchlaufen den photos-State und rendern für jedes Foto eine PhotoCard
        Die map-Methode ist der Schlüssel zur dynamischen Erstellung von UI-Elementen in React
      */}
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id} /* Die key-Prop ist wichtig für React's Reconciliation-Algorithmus */
          url={photo.url}
          title={photo.title}
          caption={photo.caption}
          isFav={favs.includes(photo.id)} /* Bool-Wert: Ist dieses Foto ein Favorit? */
          onToggleFav={() => toggleFav(photo.id)} /* Event-Handler mit Foto-ID */
        />
      ))}

      {/* Falls keine Fotos vorhanden sind, zeigen wir eine Nachricht an */}
      {photos.length === 0 && <p className="col-span-full text-center py-10">Lade Fotos...</p>}
    </main>
  );
}

export default Main;
