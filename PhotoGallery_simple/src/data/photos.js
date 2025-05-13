// Datenquelle für unsere Galerie
// Diese Datei enthält ein Array mit Foto-Objekten, die in unserer Anwendung angezeigt werden.
// Normalerweise würden diese Daten von einer API kommen, aber für Lernzwecke verwenden wir statische Daten.
// Jedes Foto hat eine eindeutige ID (wichtig für React's key-Prop), einen Titel, eine URL und eine Bildunterschrift.

export const photosData = [
  {
    id: 1,
    title: "Sonnenuntergang",
    url: "https://picsum.photos/id/10/300/200",
    caption: "Ein ruhiger Abendhimmel über dem Meer",
  },
  {
    id: 2,
    title: "Wasserfall",
    url: "https://picsum.photos/id/20/300/200",
    caption: "Tosendes Wasser in üppiger Natur",
  },
  {
    id: 3,
    title: "Stadtlicht",
    url: "https://picsum.photos/id/30/300/200",
    caption: "Lichtermeer einer Großstadt bei Nacht",
  },
];
