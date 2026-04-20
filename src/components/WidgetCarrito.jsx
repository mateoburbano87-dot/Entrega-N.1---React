// src/components/WidgetCarrito.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function WidgetCarrito() {
  const { totalItems } = useContext(CartContext);
  
  return (
    <Link to="/carrito" className="cart-widget" aria-label="Ir al carrito">
      <span className="cart-icon">🛒</span>
      {totalItems > 0 && (
        <span className="cart-count">{totalItems}</span>
      )}
    </Link>
  );
}

export default WidgetCarrito;