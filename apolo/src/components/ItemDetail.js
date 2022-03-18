import React from 'react'
import faker from 'faker'


const ItemDetail = props => {
  
  
  return (
    <div className="item__detail">
        <div className="item__detailTitulo">
        <h2>{props.listaa.name}</h2>
        <img alt="imagen de plato de comida" src={faker.image.food()}/>
        </div>
        <div className="item__detailDescripcion">
            <p>{props.listaa.description}</p>
        <h4>${props.listaa.price}</h4>
        </div>
    </div>
  )
}

export default ItemDetail