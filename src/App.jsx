import React from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import ContenedorListaItems from './components/ContenedorListaItems';
import './App.css';

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <ContenedorListaItems 
        mensajeBienvenida="¡Bienvenidos a Mi Tienda! Los mejores productos al mejor precio" 
      />
    </div>
  );
}

export default App;