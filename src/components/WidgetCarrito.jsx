// src/components/WidgetCarrito.jsx
import React from 'react';

function WidgetCarrito() {
  // Por ahora es estático, luego conectaremos con el contexto del carrito
  const cantidadItems = 0;
  
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      {cantidadItems > 0 && (
        <span className="cart-count">{cantidadItems}</span>
      )}
    </div>
  );
}

export default WidgetCarrito;