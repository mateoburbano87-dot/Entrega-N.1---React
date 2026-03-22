import React from 'react';
import './ContenedorListaItems.css';

function ContenedorListaItems(props) {
  const mensajeBienvenida = props.mensajeBienvenida;
  
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
    { id: 4, nombre: 'Producto 4', precio: 400 },
  ];

  return (
    <main className="item-list-container">
      <div className="welcome-message">
        <h1>{mensajeBienvenida}</h1>
      </div>

      <div className="products-grid">
        {productos.map(function(producto) {
          return (
            <div key={producto.id} className="product-card">
              <img 
                src={`https://via.placeholder.com/200x200?text=${producto.nombre}`} 
                alt={producto.nombre}
              />
              <h3>{producto.nombre}</h3>
              <p>Precio: ${producto.precio}</p>
              <button>Ver detalle</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default ContenedorListaItems;