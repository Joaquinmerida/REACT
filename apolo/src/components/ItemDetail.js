import faker from 'faker'
import React from 'react'



const ItemDetail = props => {

  return (
    <div className="item__detail">
        <div className="item__detailTitulo">
        <h2>{props.producto.name}</h2>
        <img alt="imagen de plato de comida" src={faker.image.food()}/>
        </div>
        <div className="item__detailDescripcion">
            <p>{props.producto.description}</p>
        <h4>${props.producto.price}</h4>
        </div>
    </div>
  )
}

export default ItemDetail