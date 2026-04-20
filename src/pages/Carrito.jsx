// src/pages/Carrito.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Pages.css';

function Carrito() {
  const { items, removeItem, clear, totalPrice } = useContext(CartContext);

  const formatearPrecio = function(precio) {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(precio);
  };

  if (items.length === 0) {
    return (
      <div className="page-container">
        <h1 className="page-title">Carrito</h1>
        <div className="not-found-content">
          <p>Tu carrito esta vacio por ahora.</p>
          <Link to="/productos" className="btn-volver">
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Carrito</h1>
      <div className="cart-list">
        {items.map(function(item) {
          return (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="cart-item-imagen" />
              <div className="cart-item-info">
                <h3>{item.nombre}</h3>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: {formatearPrecio(item.precio)}</p>
                <p>Subtotal: {formatearPrecio(item.precio * item.cantidad)}</p>
              </div>
              <button
                className="cart-remove"
                onClick={function() {
                  removeItem(item.id);
                }}
              >
                Quitar
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart-resumen">
        <span className="cart-total">Total: {formatearPrecio(totalPrice)}</span>
        <div className="cart-actions">
          <button className="cart-clear" onClick={clear}>
            Vaciar carrito
          </button>
          <Link to="/productos" className="btn-volver">
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
