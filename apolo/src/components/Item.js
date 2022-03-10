import React from 'react'
import faker from 'faker'




const Item = props => {


    const lista = props.productos

    const list = lista.map((producto) =>{
      
        return (
        <div key={producto.id} className={props.class}> 
        <img alt="imagen de plato de comida" src={faker.image.food()}/>
        <a href='/'>
        <h3> {producto.name} </h3>
        </a>
        <p> {"$ " + producto.price} </p> 
        </div>
        )
    })

    return (
    <>{list}</>
  ) 
}

export default Item