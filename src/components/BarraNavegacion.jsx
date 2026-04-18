// src/components/BarraNavegacion.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import WidgetCarrito from './WidgetCarrito';
import './BarraNavegacion.css';

function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = function() {
    setMenuAbierto(!menuAbierto);
  };

  const categorias = [
    { nombre: 'Computadores', ruta: '/categoria/computadores' },
    { nombre: 'Componentes', ruta: '/categoria/componentes' },
    { nombre: 'Accesorios', ruta: '/categoria/accesorios' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💻</span>
          <span className="logo-text">TechStore</span>
        </Link>

        {/* Botón menú hamburguesa (mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menú de navegación */}
        <ul className={`nav-menu ${menuAbierto ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" end>
              Inicio
            </NavLink>
          </li>
          
          {/* Dropdown de categorías */}
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle">Productos ▼</span>
            <ul className="dropdown-menu">
              {categorias.map(function(cat) {
                return (
                  <li key={cat.ruta}>
                    <Link to={cat.ruta} className="dropdown-item">
                      {cat.nombre}
                    </Link>
                  </li>
                );
              })}
              <li><Link to="/productos" className="dropdown-item">Todos los productos</Link></li>
            </ul>
          </li>
          
          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link">
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Widget del carrito */}
        <WidgetCarrito />
      </div>
    </nav>
  );
}

export default BarraNavegacion;