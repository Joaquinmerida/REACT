import React from 'react'
import ItemCount from './ItemCount';
import Item from './Item';
import faker from "faker"



const Main = () => {

  return (
    
    <div className='main__texto'>
        <ItemCount/>
        <h2>Elegí tu plato favorito:</h2>
        <div className='main__items'>
          <Item imagen={faker.image.food()} class="catalogo"/>
        </div>
    </div>
  )
}

export default Main;