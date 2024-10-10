import React, { useContext } from "react";
import '../estilos/Form.css'
import { ManejarClickContext } from "../contextos/ManejarClick";
import { ValorMonetarioContext } from "../contextos/ValorMonetario";
import { click } from "@testing-library/user-event/dist/click";

function Form() {
  // contextos 

  // Manejar click context 
  const {
    clickAgregarIngreso , 
    setClickAgregarIngreso , 
    setClickAgregarGasto
  } = useContext(ManejarClickContext)

  //ValorMonetario context
  const {     
    valorIngreso, 
    valorGasto, 
    categoriaIngresos, 
    categoriaGastos,
    fecha,
    descripcion,

    setValorIngreso, 
    setValorGasto,
    setCategoriaGastos,
    setCategoriaIngresos,
    setFecha,
    setDescripcion,

    agregarTransaccion
  } = useContext(ValorMonetarioContext)

  //funcion para retroceder
  function handleRetroceser() {
    setClickAgregarGasto(false)
    setClickAgregarIngreso(false)
  }

  // funcion para actualizar el valor del monto 
  function handleMontoCambio(e) {
    const valor = e.target.value

    if(clickAgregarIngreso) {
      setValorIngreso(valor)
    }else {
      setValorGasto(valor)
    }
  }

  // Funcion para actualizar el valor de categoria 
  function handleCategoriaCambio(e) {
    const valor = e.target.value;

    if(clickAgregarIngreso) {
      setCategoriaIngresos(valor)
    }else {
      setCategoriaGastos(valor)
    }
  }

  // Funcion para actualizar el valor de fecha 
  function handleFechaCambio(e) {
    setFecha(e.target.value)
  }

  // Funcion para actualizar el valor de Descripcion 
  function handleDescripcionCambio(e) {
    setDescripcion(e.target.value)
  }


  return(
    <section className="principal__seccion-form">
      <div className="principal__form-fondo"></div>
      <form className="principal__form">
        <div className="principal__form-retroceder" onClick={handleRetroceser}>X</div>
        <h1>{clickAgregarIngreso ? 'Agregar Ingreso' : 'Agregar Gasto'}</h1>

        <div className="principal__form-contenedor-items">
          <label htmlFor="monto">Monto</label>
          <input required
            type="number" 
            id="monto" 
            name="monto" 
            className="form__input"
            value={clickAgregarIngreso ? valorIngreso : valorGasto}
            onChange={handleMontoCambio}
          />
        </div>

        <div className="principal__form-contenedor-items">
          <label htmlFor="categoria">Categoria</label>
          {clickAgregarIngreso ? (
            <select 
              name="categoria-ingresos" 
              value={categoriaIngresos} 
              onChange={handleCategoriaCambio}
              id="categoria" 
              required 
              className="form__input"
            >
              <option value>Seleccione una Categoria</option>
              <option value="salario">Salario</option>
              <option value="freelance">Trabajo Freelance</option>
              <option value="inversiones">Inversiones</option>
              <option value="otros">Otros</option>
            </select>
          ): (
            <select 
              name="categoria-gastos" 
              id="categoria" 
              value={categoriaGastos} 
              onChange={handleCategoriaCambio}
              required 
              className="form__input"
            >
              <option value>Seleccione una Categoria</option>
              <option value="alimentacion">Alimentacion</option>
              <option value="gastos personales">Gastos personales</option>
              <option value="deudas">Deudas</option>
              <option value="otros">Otros</option>
            </select>
          )}
        </div>

        <div className="principal__form-contenedor-items">
          <label htmlFor="fecha">Fecha</label>
          <input 
            type="date" 
            id="fecha" 
            name="fecha" 
            required 
            className="form__input"
            value={fecha}
            onChange={handleFechaCambio}
          />
        </div>

        <div className="principal__form-contenedor-items">
          <label htmlFor="descripcion">Descripcion (opcional)</label>
          <textarea 
            aria-expanded='false' 
            name="descripcion" 
            id="descripcion" 
            className="form__placeholder" 
            placeholder="descripcion........"
            value={descripcion}
            onChange={handleDescripcionCambio}
          ></textarea>
        </div>

        <button className="form__boton botones" onClick={agregarTransaccion}>Guardar Ingreso</button>
      </form>
    </section>
  )
}

export default Form