// Die Header-Komponente zeigt den Titel und Untertitel der Anwendung an
// Durch die Verwendung von Props machen wir diese Komponente wiederverwendbar und flexibel
// Props ermöglichen uns, die gleiche Komponente mit unterschiedlichen Daten zu rendern

export default function Header({ title, subtitle }) {
  return (
    <header className="p-4 bg-base-200 shadow-md">
      {/* Der Titel wird als h1-Element dargestellt, mit größerer Schrift für bessere Sichtbarkeit */}
      <h1 className="text-2xl font-bold">{title}</h1>
      {/* Der Untertitel wird nur angezeigt, wenn er übergeben wurde (optional) */}
      {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
    </header>
  );
}
