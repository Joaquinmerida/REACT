import React from 'react'
import ItemDetail from './ItemDetail';
import {useEffect , useState} from 'react';


const detailItem = {
    id : 1,
    name: "Nulla",
    price: 412,
    description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    cal: 1039,
    vegan: false,
    delivery: false
    }

const ItemDetailContainer = props => {

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState({})


useEffect (() => {

    const pedido = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(producto)
        },4000)
    })
    
    pedido
    .then((resultado)=>{
        setProductos(detailItem)
    })
    .catch((error)=>{
        console.log("Error al traer los productos" + {detailItem})
    })
    .finally(()=>{
        setLoading(false)
    })        

},)



if(loading){
    return <h2>Cargando...</h2>
}else{
    return(
    <ItemDetail producto={detailItem}/>
    )

}

}

export default ItemDetailContainer