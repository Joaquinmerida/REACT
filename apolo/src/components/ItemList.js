import React from "react";
import Item from "./Item";
import {useEffect , useState} from 'react';


const ItemList = props => {


    const listaa = props.producto

        const [loading, setLoading] = useState(true)
        const [lista, setProductos] = useState([])


    useEffect (() => {
    
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(listaa)
            },1500)
        })
        
        pedido
        .then((resultado)=>{
            setProductos(listaa)
        })
        .catch((error)=>{
            console.log("Error al traer los productos")
        })
        .finally(()=>{
            setLoading(false)
        })        

},)



if(loading){
    return <h2>Cargando...</h2>
}else{
    return( 
    <>
    <Item productos={lista} />
    </>
    )
}


}

export default ItemList;
