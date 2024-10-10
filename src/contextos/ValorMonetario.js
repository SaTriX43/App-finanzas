import { createContext, useEffect, useState } from "react";

const ValorMonetarioContext = createContext()

function ValorMonetarioProvider({children}) {

  //variables para guardar la informacion del formulario
  const [valorIngreso , setValorIngreso] = useState('');
  const [valorGasto , setValorGasto] = useState('');
  const [categoriaIngresos, setCategoriaIngresos] = useState('');
  const [categoriaGastos, setCategoriaGastos] = useState('');
  const [fecha , setFecha] = useState('');
  const [descripcion , setDescripcion] = useState('')

  const [transacciones , setTransacciones] = useState(() => {
    const transaccionesGuardadas = localStorage.getItem(('transacciones'));
    return transaccionesGuardadas ? JSON.parse(transaccionesGuardadas) : [];
  })


  // Guardar las transacciones 
  useEffect(()=> {
    localStorage.setItem('transacciones',JSON.stringify(transacciones))
  },[transacciones])


  // funcion para agregar una transaccion al array 
  function agregarTransaccion(e) {
    e.preventDefault()

    alert('transaccion guradada con exito')

    const nuevaTransaccion = {
      id: Date.now(),
      tipo: valorIngreso ? 'ingreso' : 'gasto',
      valor: valorIngreso || valorGasto,
      categoria: valorIngreso ? categoriaIngresos : categoriaGastos,
      fecha,
      descripcion
    }
    //creamos un nuevo arreglo y guardamos la nueva transaccion
    setTransacciones((prevTransacciones)=> [...prevTransacciones , nuevaTransaccion])

    // Reiniciar valores 
    setValorGasto('')
    setValorIngreso('')
    setCategoriaGastos('')
    setCategoriaIngresos('')
    setFecha('')
    setDescripcion('')
  }

  return (
    <ValorMonetarioContext.Provider value={{
      valorGasto, 
      valorIngreso,
      categoriaIngresos,
      categoriaGastos,
      fecha,
      descripcion,
      transacciones,

      setValorIngreso,
      setValorGasto,
      setCategoriaIngresos,
      setCategoriaGastos,
      setFecha,
      setDescripcion,

      agregarTransaccion,
    }}>
      {children}
    </ValorMonetarioContext.Provider>
  )
}

export {ValorMonetarioContext, ValorMonetarioProvider}