// src/pages/Contacto.jsx
import React, { useState } from 'react';
import './Pages.css';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    // Simulamos envío
    setTimeout(function() {
      setEnviado(true);
      setFormulario({ nombre: '', email: '', mensaje: '' });
      setTimeout(function() {
        setEnviado(false);
      }, 3000);
    }, 500);
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Contacto</h1>
      
      <div className="contacto-container">
        <div className="contacto-info">
          <h2>TechStore</h2>
          <p>📍 Av. Tecnológica 123, Santiago, Chile</p>
          <p>📞 +56 2 1234 5678</p>
          <p>✉️ contacto@techstore.cl</p>
          <p>⏰ Lunes a Viernes: 9:00 - 19:00</p>
          <p>🕒 Sábados: 10:00 - 14:00</p>
          
          <div className="redes-sociales">
            <h3>Síguenos</h3>
            <p>📱 Instagram: @techstore_cl</p>
            <p>📘 Facebook: /techstorechile</p>
            <p>🐦 Twitter: @techstore</p>
          </div>
        </div>

        <div className="contacto-formulario">
          <h2>Envíanos un mensaje</h2>
          {enviado && (
            <div className="mensaje-exito">
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </div>
          )}
          <form onSubmit={manejarEnvio}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formulario.email}
                onChange={manejarCambio}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formulario.mensaje}
                onChange={manejarCambio}
                required
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;