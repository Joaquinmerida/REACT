import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="landing">
      <h2>Bienvenido al sitio web del Apollo XI</h2>
      <div className="landing__inner">
        <h3>Instrucciones:</h3>
        <ul>
          <li>{<Link to="/">Hacé click aqui para ver el menú</Link>}</li>
          <li>Elegí lo que mas te guste</li>
          <li>Finaliza tu pedido</li>
        </ul>
      </div>
      <p className="landing__footer">Somos un restaurante ubicado en la Ciudad de Canelones, Uruguay</p>
    </div>
  )
}

export default Landing