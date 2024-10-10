import React from "react";
import '../estilos/Gastos.css'

function Gastos() {
  return (
    <section className="principal__gastos">
      <h2 className="principal__gastos-titulo">Gastos por Categoria</h2>
      <hr/>
      <div className="principal__gastos-contenedor-grafico">
        <p>Grafico de torta</p>
      </div>
    </section>
  )
}


export default Gastos