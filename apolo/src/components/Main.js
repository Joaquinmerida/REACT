import React from 'react'

const Main = () => {

    const persona = {
        nombre : "Marcelo"
    }

  return (
    <div className='main__texto'>
        <span class="material-icons" id='error'> error_outline</span>
        <h1>Bienvenido al Apollo XI</h1>
        <p>Hola {persona.nombre}, actualmente nuestro sitio web se encuentra en mantenimiento</p>
    </div>
  )
}

export default Main