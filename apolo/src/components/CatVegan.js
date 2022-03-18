import React from 'react'
import ItemList from './ItemList';
import { Link } from 'react-router-dom';

const CatVegan = props => {

    const listaa = props.listaa

    let nuevoArray = []

    for(let i=0; i < listaa.length; i++){
        if(listaa[i].vegan === true){
            nuevoArray.push(listaa[i]);
        }
    }
    
    console.table(nuevoArray)
    


  return (<div className="landing">
    <h2>Platos {props.categoria}</h2>
    <div className="main__items">
    <ItemList class="catalogo"  producto={nuevoArray}/>
    </div>
    <div className="main__categorias">
            <Link to="/categoria/light"> Bajas Calorias </Link>
            <Link to="/categoria/delivery"> Envio Gratis </Link>
            <Link to="/categoria/vegan"> Platos vegetarianos </Link>
            </div>
    </div>
  )
}

export default CatVegan