import React from 'react'
import faker from 'faker'
import { Link } from 'react-router-dom'




const Item = props => {


    const lista = props.productos

    const list = lista.map((producto) =>{
      
        return (
        <div key={producto.id} className="catalogo"> 
        <img alt="imagen de plato de comida" src={faker.image.food()}/>
        <Link to={`/producto/:${producto.id}`}> <h3> {producto.name} </h3></Link>
        <p> {"$ " + producto.price} </p> 
        </div>
        )
    })

    return (
    <>{list}</>
  ) 
}

export default Item