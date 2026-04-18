// src/containers/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import productosData from '../data/productosData';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(function() {
    Promise.resolve().then(function() {
      setCargando(true);
    });
    
    // Simulamos llamada asíncrona a una API
    const timer = setTimeout(function() {
      const productoEncontrado = productosData.find(function(p) {
        return p.id === parseInt(id);
      });
      
      setProducto(productoEncontrado || null);
      setCargando(false);
    }, 600);
    
    return function() {
      clearTimeout(timer);
    };
  }, [id]);

  const formatearPrecio = function(precio) {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(precio);
  };

  const onAdd = function(cantidad) {
    alert(`Agregaste ${cantidad} ${producto.nombre}(s) al carrito`);
    // Aquí después implementaremos la lógica del carrito
  };

  if (cargando) {
    return (
      <div className="item-detail-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando detalles del producto...</p>
        </div>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="item-detail-container">
        <div className="producto-no-encontrado">
          <h2>Producto no encontrado</h2>
          <p>El producto que buscas no existe o ha sido removido.</p>
          <a href="/productos" className="volver-btn">Ver todos los productos</a>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="item-detail-info">
          <h1 className="detail-nombre">{producto.nombre}</h1>
          <p className="detail-categoria">{producto.categoria}</p>
          <p className="detail-precio">{formatearPrecio(producto.precio)}</p>
          <p className="detail-descripcion">{producto.descripcion}</p>
          
          <div className="detail-especificaciones">
            <h3>Especificaciones técnicas:</h3>
            <ul>
              {producto.especificaciones.map(function(esp, index) {
                return <li key={index}>{esp}</li>;
              })}
            </ul>
          </div>
          
          <p className="detail-stock">Stock disponible: {producto.stock} unidades</p>
          
          <ItemCount 
            stock={producto.stock} 
            initial={1} 
            onAdd={onAdd} 
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;