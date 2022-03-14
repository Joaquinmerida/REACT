import React from 'react'
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer'


const Main = () => {
  

  return (<>
    <div className="main__items">
    <ItemList/>
    </div>
    <ItemDetailContainer/>
    </>
    )
}

export default Main;