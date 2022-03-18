import React from 'react'
import {useEffect , useState} from 'react';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = props => {

    const detailItem = props.listaa

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState({})


useEffect (() => {

    const pedido = new Promise((res,rej)=>{

        setTimeout(()=>{
            res(producto)
        },2000)
    })
    
    pedido
    .then((resultado)=>{
        setProductos(detailItem)
    })
    .catch((error)=>{
        console.log("Error al traer los productos")
    })
    .finally(()=>{
        setLoading(false)
    })        

},)

console.log(detailItem)

    if(loading){
        return <h2>Cargando...</h2>
    }else{
        return(
            <ItemDetail listaa={detailItem}/>
            )
    }

}

export default ItemDetailContainer