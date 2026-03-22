import React from 'react';
import WidgetCarrito from './WidgetCarrito';
import './BarraNavegacion.css';

function BarraNavegacion() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img 
              src="https://via.placeholder.com/50x50" 
              alt="Mi Tienda Logo"
              className="logo"
            />
            <span>Mi Tienda</span>
          </a>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/productos" className="nav-link">Productos</a>
          </li>
          <li className="nav-item">
            <a href="/ofertas" className="nav-link">Ofertas</a>
          </li>
          <li className="nav-item">
            <a href="/contacto" className="nav-link">Contacto</a>
          </li>
        </ul>

        <WidgetCarrito />
      </div>
    </nav>
  );
}

export default BarraNavegacion;