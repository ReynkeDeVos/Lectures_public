// Diese Komponente zeigt den Warenkorb an
import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cart, onRemove }) {
  // Berechne den Gesamtpreis der Artikel im Warenkorb
  let totalPrice = 0;

  // Schleife durch jeden Artikel im Warenkorb
  for (let i = 0; i < cart.length; i++) {
    // Füge den Preis jedes Artikels multipliziert mit seiner Menge hinzu
    totalPrice = totalPrice + cart[i].price * cart[i].quantity;
  }

  // reduce ist eine Array-Methode, die alle Elemente zu einem einzigen Wert kombiniert
  // Alternative Methode mit reduce (fortgeschrittener, aber gut zu sehen)
  // const totalPrice = cart.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );

  return (
    <div>
      <h2 className="text-xl mt-8">🛒 Warenkorb</h2>

      {/* 
        Bedingte Darstellung:
        - Wenn Warenkorb leer ist (cart.length === 0), zeige eine Nachricht
        - Andernfalls (: bedeutet "sonst"), zeige die Warenkorb-Artikel
      */}
      {cart.length === 0 ? (
        <p>Noch keine Artikel im Warenkorb.</p>
      ) : (
        // Wenn der Warenkorb Artikel enthält, rendere sie
        <div>
          <ul className="mt-2 space-y-2">
            {/* 
              Durchlaufe jeden Warenkorb-Artikel und erstelle eine CartItem-Komponente.
              Dies ist ähnlich wie eine for-Schleife, funktioniert aber mit React.
            */}
            {cart.map((item) => (
              <CartItem
                key={item.id} // Hilft React, jedes Element effizient zu identifizieren
                item={item} // Übergebe die Artikeldaten
                onRemove={onRemove} // Übergebe die Entfernen-Funktion
              />
            ))}
          </ul>

          {/* Zeige den Gesamtpreis an, formatiert auf 2 Dezimalstellen */}
          <p className="font-bold mt-4">Gesamtpreis: €{totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
