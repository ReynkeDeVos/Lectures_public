// Dies ist unsere Hauptseiten-Komponente, die die Produkte
// und den Warenkorb anzeigt
import React, { useContext } from "react";
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import { ShopContext } from "../contexts/ShopContext";

export default function StorePage() {
  // Der useContext-Hook ermöglicht uns den Zugriff auf die Context-Werte
  // Wir "destructuren", um bestimmte Werte zu erhalten, die wir benötigen
  const { products, cart, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">🏪 Mein Shop</h1>

      {/* Gib die Daten und Funktionen an untergeordnete Komponenten weiter */}
      <ProductList products={products} onAdd={addToCart} />
      <Cart cart={cart} onRemove={removeFromCart} />
    </div>
  );
}
