import React, { useContext } from "react";
import '../estilos/Acciones.css'
import { ManejarClickContext } from "../contextos/ManejarClick";
import { ValorMonetarioContext } from "../contextos/ValorMonetario";


function Acciones() {
  //ValorMonetario context
  const {transacciones} =useContext(ValorMonetarioContext)

  function handleClickVerTransacciones() {
    setClickVerTransacciones(!clickVerTransacciones)
    console.log(transacciones)
  } 

  // Manejar click context 
  const 
  {
    handleClickAgregarIngreso,
    handleClickAgregarGasto,
    setClickVerTransacciones,
    clickVerTransacciones
  } = useContext(ManejarClickContext)

  return (
    <section className="principal__acciones">
      <h2 className="principal__acciones-titulo">Acciones Rapidas</h2>
      <hr/>
      <div className="principal__acciones-contenedor-botones">
        <button className="principal__acciones-boton botones" onClick={handleClickAgregarIngreso}>Agregar Ingreso</button>
        <button className="principal__acciones-boton botones" onClick={handleClickAgregarGasto}>Registrar Gasto</button>
        <button className="principal__acciones-boton botones" onClick={handleClickVerTransacciones}>Ver Transacciones</button>
      </div>
    </section>
  )
}


export default Acciones