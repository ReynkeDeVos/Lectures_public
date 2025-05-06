// Diese Komponente zeigt ein einzelnes Produkt an
import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    console.log(product),
    (
      <div className="card border p-4 flex flex-col">
        {/* 
        Wir verwenden flex flex-col, um ein Spalten-Layout zu erstellen, das es uns ermöglicht,
        die vertikale Ausrichtung von Elementen zu steuern
      */}

        <div className="mb-3 h-40 flex items-center justify-center overflow-hidden">
          <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
        </div>
        {/* Produkttitel oben */}
        <h2 className="font-semibold text-sm mb-2">{product.title}</h2>
        {/* 
        Preis in der Mitte - mt-auto drückt ihn nach unten, 
        aber mb-auto drückt den Button darunter auch nach unten
      */}
        <p className="mt-auto mb-4">€{product.price}</p>
        {/* 
        Button am unteren Rand - mt-auto würde ihn nach unten drücken,
        wenn es kein anderes mt-auto darüber gäbe
      */}
        <button className="btn btn-sm btn-primary mt-auto" onClick={() => onAdd(product)}>
          In den Warenkorb
        </button>
      </div>
    )
  );
}
