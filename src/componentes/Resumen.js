import React, { useContext, useEffect, useState } from "react";
import '../estilos/Resumen.css'
import { ValorMonetarioContext } from "../contextos/ValorMonetario";

function Resumen() {

  const {transacciones} = useContext(ValorMonetarioContext)

  // variables que guardan los valores 
  const [totalIngresos , setTotalIngresos] = useState(0);
  const [totalGastos , setTotalGastos] = useState(0);
  const [totalBalance , setTotalBalance] = useState(0);

  useEffect(()=> {
    //calcular ingresos y gastos
    const ingresos = transacciones
    .filter(transaccion => transaccion.tipo === 'ingreso')
    .reduce((total , transaccion) => total + parseFloat(transaccion.valor),0)

    const gastos = transacciones
    .filter(transaccion => transaccion.tipo === 'gasto')
    .reduce((total ,transaccion) => total + parseFloat(transaccion.valor),0)

    setTotalIngresos(ingresos);
    setTotalGastos(gastos);
    setTotalBalance(ingresos - gastos);

  },[transacciones])

  return (
    <section className="principal__resumen">
      <h2 className="principal__resumen-titulo">Resumen del mes</h2>
      <hr/>
      <div className="principal__resumen-contenedor-info">
        <p>Ingresos: ${totalIngresos.toFixed(2)}</p>
        <p>Gastos: ${totalGastos.toFixed(2)}</p>
        <p>Balance: ${totalBalance.toFixed(2)}</p>
      </div>
      <button className="principal__resumen-boton botones">Ver Detalles</button>
    </section>
  )
}


export default Resumen