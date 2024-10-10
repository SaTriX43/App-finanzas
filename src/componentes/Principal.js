import React, { useContext } from "react";
import '../estilos/Principal.css'
import Resumen from "./Resumen";
import Gastos from "./Gastos";
import Acciones from "./Acciones";
import { ManejarClickContext } from "../contextos/ManejarClick";
import Form from "./Form";

function Principal() {

  const {clickAgregarIngreso , clickAgregarGasto} = useContext(ManejarClickContext)

  return (
    <main className="principal">
      <Resumen/>
      <Gastos/>
      <Acciones/>

      {clickAgregarGasto || clickAgregarIngreso ?
        (
          <Form/>
        ):
        (
          ''
        )
      } 
    </main>
  )
}


export default Principal