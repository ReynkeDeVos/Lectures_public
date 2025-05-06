// Diese Komponente zeigt ein Raster von Produkten an
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAdd }) {
  // Wenn es noch keine Produkte gibt, könnten wir eine Lademeldung anzeigen
  if (products.length === 0) {
    return <p>Produkte werden geladen...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* 
        grid - erstellt ein CSS-Grid-Layout
        grid-cols-X - Anzahl der Spalten bei verschiedenen Bildschirmgrößen
        gap-4 - fügt Abstand zwischen Rasterelementen hinzu
      */}

      {/* 
        map erstellt ein neues Array, indem es jedes Element transformiert
        Hier transformieren wir jedes Produkt in eine ProductCard-Komponente
      */}
      {products.map((product) => (
        <ProductCard
          key={product.id} // key hilft React, effizient zu aktualisieren
          product={product} // Übergebe die Produktdaten
          onAdd={onAdd} // Übergebe die Hinzufügen-Funktion
        />
      ))}
    </div>
  );
}
