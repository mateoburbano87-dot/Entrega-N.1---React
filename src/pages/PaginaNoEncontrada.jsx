// src/pages/PaginaNoEncontrada.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function PaginaNoEncontrada() {
  return (
    <div className="page-container not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>¡Página no encontrada!</h2>
        <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
        <Link to="/" className="btn-volver">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default PaginaNoEncontrada;