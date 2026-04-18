// src/data/productosData.js
// Simulamos una base de datos de productos de tecnología

const productosData = [
  // COMPUTADORES
  {
    id: 1,
    nombre: "Gaming PC Ultra",
    categoria: "computadores",
    precio: 1299900,
    stock: 5,
    imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300",
    descripcion: "PC Gamer con Intel i7, 16GB RAM, RTX 3060 y 1TB SSD. Ideal para gaming y trabajo pesado.",
    especificaciones: ["Intel Core i7-12700K", "16GB DDR4", "RTX 3060 12GB", "1TB SSD NVMe"]
  },
  {
    id: 2,
    nombre: "Laptop Pro 15\"",
    categoria: "computadores",
    precio: 899900,
    stock: 8,
    imagen: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300",
    descripcion: "Laptop para profesionales con Ryzen 7, 16GB RAM y 512GB SSD.",
    especificaciones: ["AMD Ryzen 7 5800H", "16GB DDR4", "512GB SSD", "Pantalla 15.6\" IPS"]
  },
  {
    id: 3,
    nombre: "MacBook Air M2",
    categoria: "computadores",
    precio: 1399900,
    stock: 3,
    imagen: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300",
    descripcion: "MacBook Air con chip M2, 8GB RAM y 256GB SSD. Batería todo el día.",
    especificaciones: ["Apple M2", "8GB RAM unificada", "256GB SSD", "13.6\" Liquid Retina"]
  },

  // TARJETAS GRÁFICAS
  {
    id: 4,
    nombre: "RTX 4070 Ti",
    categoria: "componentes",
    precio: 899900,
    stock: 2,
    imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300",
    descripcion: "Tarjeta gráfica NVIDIA RTX 4070 Ti con 12GB GDDR6X. Ray Tracing de última generación.",
    especificaciones: ["12GB GDDR6X", "7680 Cores CUDA", "Ray Tracing Gen 3", "DLSS 3"]
  },
  {
    id: 5,
    nombre: "RX 7800 XT",
    categoria: "componentes",
    precio: 749900,
    stock: 4,
    imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300",
    descripcion: "AMD Radeon RX 7800 XT con 16GB GDDR6. Perfecta para gaming 1440p.",
    especificaciones: ["16GB GDDR6", "3840 Stream Processors", "Ray Accelerators", "FidelityFX"]
  },

  // PROCESADORES
  {
    id: 6,
    nombre: "Intel i9-13900K",
    categoria: "componentes",
    precio: 649900,
    stock: 6,
    imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300",
    descripcion: "Intel Core i9-13900K, 24 núcleos, 32 hilos. Máximo rendimiento.",
    especificaciones: ["24 Núcleos (8P+16E)", "32 Hilos", "Hasta 5.8GHz", "36MB Caché"]
  },
  {
    id: 7,
    nombre: "Ryzen 7 7800X3D",
    categoria: "componentes",
    precio: 499900,
    stock: 7,
    imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300",
    descripcion: "AMD Ryzen 7 7800X3D con tecnología 3D V-Cache. El mejor para gaming.",
    especificaciones: ["8 Núcleos", "16 Hilos", "Hasta 5.0GHz", "96MB L3 Caché"]
  },

  // ACCESORIOS
  {
    id: 8,
    nombre: "Monitor 27\" 144Hz",
    categoria: "accesorios",
    precio: 299900,
    stock: 10,
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300",
    descripcion: "Monitor curvo 27 pulgadas, 144Hz, 1ms. Ideal para gaming.",
    especificaciones: ["27\" Curvo", "144Hz", "1ms", "Full HD", "FreeSync"]
  },
  {
    id: 9,
    nombre: "Teclado Mecánico RGB",
    categoria: "accesorios",
    precio: 89900,
    stock: 15,
    imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
    descripcion: "Teclado mecánico con switches rojos, RGB y reposamuñecas.",
    especificaciones: ["Switches Rojos", "RGB Personalizable", "Anti-Ghosting", "USB-C"]
  },
  {
    id: 10,
    nombre: "Mouse Gamer Pro",
    categoria: "accesorios",
    precio: 49900,
    stock: 20,
    imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300",
    descripcion: "Mouse gamer con sensor óptico 16000 DPI, 8 botones programables.",
    especificaciones: ["16000 DPI", "8 Botones", "RGB", "Software Configurable"]
  }
];

export default productosData;