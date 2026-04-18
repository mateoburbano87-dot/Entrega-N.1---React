// src/components/ItemCount.jsx
import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = function() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = function() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = function() {
    if (stock > 0 && cantidad <= stock) {
      onAdd(cantidad);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count-controles">
        <button 
          className="count-btn" 
          onClick={decrementar}
          disabled={cantidad <= 1}
        >
          -
        </button>
        <span className="count-numero">{cantidad}</span>
        <button 
          className="count-btn" 
          onClick={incrementar}
          disabled={cantidad >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="count-agregar"
        onClick={agregarAlCarrito}
        disabled={stock === 0}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
}

export default ItemCount;