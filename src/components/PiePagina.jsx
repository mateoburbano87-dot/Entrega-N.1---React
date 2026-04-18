import React from 'react';
import './PiePagina.css';

function PiePagina() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-pagina">
      <div className="pie-contenido">
        <span className="pie-marca">Tienda Tech</span>
        <span className="pie-separador">|</span>
        <span className="pie-texto">Todos los derechos reservados</span>
      </div>
      <div className="pie-derechos">{anioActual}</div>
    </footer>
  );
}

export default PiePagina;
