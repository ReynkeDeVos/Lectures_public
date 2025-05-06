// Diese Komponente zeigt einen einzelnen Artikel im Warenkorb an
import React from "react";

export default function CartItem({ item, onRemove }) {
  return (
    <li className="flex justify-between items-center">
      {/* Zeige den Artikelnamen und die Menge an */}
      <span>
        {item.title} × {item.quantity}
      </span>

      {/* 
        Entfernen-Button
        Wenn geklickt, ruft er onRemove mit der ID des Artikels auf
      */}
      <button className="btn btn-sm btn-error" onClick={() => onRemove(item.id)}>
        Entfernen
      </button>
    </li>
  );
}
