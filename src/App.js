import React from 'react'
import './css/estilos.css'

const App = () => {

    const saludo = "React - INTECAP"
    const nombre ="Byron Mauricio Palencia Blanco"


  return (
    <>
        <h1 className='titulo'>{saludo} <br /> {nombre}</h1>
    
    </>

  )
}

export default App