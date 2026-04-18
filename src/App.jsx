// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import PiePagina from './components/PiePagina';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './pages/Contacto';
import PaginaNoEncontrada from './pages/PaginaNoEncontrada';
import './App.css';

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      
      <main className="main-content">
        <Routes>
          {/* Ruta principal - muestra todos los productos */}
          <Route path="/" element={<ItemListContainer />} />
          
          {/* Ruta de productos por categoría */}
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          
          {/* Ruta alternativa de productos (redirige a categoría? o muestra todos) */}
          <Route path="/productos" element={<ItemListContainer />} />
          
          {/* Ruta de detalle de producto */}
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          
          {/* Ruta de contacto */}
          <Route path="/contacto" element={<Contacto />} />
          
          {/* Ruta 404 - página no encontrada */}
          <Route path="*" element={<PaginaNoEncontrada />} />
        </Routes>
      </main>
      
      <PiePagina />
    </div>
  );
}

export default App;