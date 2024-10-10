import React from "react";
import '../estilos/Encabezado.css'

function Encabezado() {
  return (
    <header className="encabezado">
      <div className="encabezado__contenedor-left">
        <span className="encabezado-icono">💰</span>
        <h1 className="encabezado-logo">SaTriXFinanzas</h1>
      </div>
      <nav className="encabezado__nav">
        <li className="encabezado__nav-items"><a href="#" className="encabezado__nav-link">Inicio</a></li>
        <li className="encabezado__nav-items"><a href="#" className="encabezado__nav-link">Transacciones</a></li>
        <li className="encabezado__nav-items"><a href="#" className="encabezado__nav-link">Presupuesto</a></li>
        <li className="encabezado__nav-items"><a href="#" className="encabezado__nav-link">Reportes</a></li>
      </nav>
    </header>
  )
}

export default Encabezado