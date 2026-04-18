// src/containers/ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import productosData from '../data/productosData';
import './ItemListContainer.css';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { categoriaId } = useParams();

  useEffect(function() {
    Promise.resolve().then(function() {
      setCargando(true);
    });
    
    // Simulamos llamada asíncrona a una API con setTimeout
    const timer = setTimeout(function() {
      let productosFiltrados = [];
      
      if (categoriaId) {
        // Filtrar por categoría
        productosFiltrados = productosData.filter(function(producto) {
          return producto.categoria === categoriaId;
        });
      } else {
        // Mostrar todos los productos
        productosFiltrados = [...productosData];
      }
      
      setProductos(productosFiltrados);
      setCargando(false);
    }, 800); // Retardo para simular carga de red
    
    return function() {
      clearTimeout(timer);
    };
  }, [categoriaId]); // Dependencia: cuando cambia la categoría, se vuelve a ejecutar

  // Función para obtener título según categoría
  const obtenerTitulo = function() {
    if (categoriaId) {
      const categorias = {
        computadores: 'Computadores',
        componentes: 'Componentes',
        accesorios: 'Accesorios'
      };
      return categorias[categoriaId] || categoriaId;
    }
    return 'Todos los productos';
  };

  if (cargando) {
    return (
      <div className="item-list-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h1 className="item-list-titulo">{obtenerTitulo()}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;