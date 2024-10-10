import { click } from "@testing-library/user-event/dist/click";
import { createContext, useState } from "react";

const ManejarClickContext = createContext()


function ManejarClickProvider({children}) {

  const [clickAgregarIngreso,setClickAgregarIngreso] = useState(false);
  const [clickAgregarGasto,setClickAgregarGasto] = useState(false);
  const [clickVerTransacciones,setClickVerTransacciones] = useState(false);

  function handleClickAgregarIngreso() {
    setClickAgregarIngreso(!clickAgregarIngreso)
  } 

  function handleClickAgregarGasto() {
    setClickAgregarGasto(!clickAgregarGasto)
  } 

  

  return(
    <ManejarClickContext.Provider value={{
      //click en botones
      handleClickAgregarIngreso,
      handleClickAgregarGasto,

      clickAgregarIngreso,
      clickAgregarGasto,
      clickVerTransacciones,

      setClickAgregarGasto,
      setClickAgregarIngreso,
      setClickVerTransacciones
    }}>
      {children}
    </ManejarClickContext.Provider>
  )
}

export {ManejarClickContext,ManejarClickProvider}