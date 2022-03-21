import React from 'react'
import faker from 'faker'
import ItemCount from './ItemCount'
import { useState } from "react";

const ItemDetail = props => {
  
  
  const onAdd = (cantidad) =>  {
    console.log(cantidad)
    setPedido(cantidad)
  } 

  const [pedido, setPedido] = useState(0)

  console.log(pedido) 

  return (
    <div className="item__detail">
        <div className="item__detailTitulo">
        <h2>{props.listaa.name}</h2>
        <img alt="imagen de plato de comida" src={faker.image.food()}/>
        <ItemCount onAdd={onAdd} stock="5" precio={props.listaa.price}/>
        </div>
        <div className="item__detailDescripcion">
            <p>{props.listaa.description}</p>
        <h4>${props.listaa.price}</h4>
        </div>
    </div>
  )
}

export default ItemDetail