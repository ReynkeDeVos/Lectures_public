// Diese Komponente stellt ein einzelnes Foto in der Galerie dar
// Sie erhält alle Daten als Props und kann den Favoriten-Status umschalten
// Wir benutzen das HTML5 figure/figcaption-Element für semantisch korrektes Markup

export default function PhotoCard({ url, title, caption, isFav, onToggleFav }) {
  return (
    <figure className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Das Bild mit Alt-Text für Barrierefreiheit */}
      <img src={url} alt={title} className="w-full h-48 object-cover" />

      <div className="card-body p-4">
        {/* Die Bildunterschrift wird unter dem Bild angezeigt */}
        <figcaption className="text-sm">{caption}</figcaption>

        {/* 
          Der Favoriten-Button, der den Status umschaltet
          Wir verwenden unterschiedliche Symbole (gefüllter/leerer Stern) 
          basierend auf dem aktuellen Status
        */}
        <button
          className="btn btn-sm mt-2"
          onClick={onToggleFav}
          aria-label={isFav ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
        >
          {isFav ? "★" : "☆"}
        </button>
      </div>
    </figure>
  );
}
