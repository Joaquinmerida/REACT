import React from 'react'
import { useState } from 'react'



const ItemCount = () => {


    const stock = 10

    const [estado, setEstado] = useState(0)

    const [precio, setPrecio] = useState(0)

    const sumarPlato = () => {
        if (estado < stock) {
            setEstado(estado + 1)
        }
    }

    const restarPlato = () => {
        if (estado > 0) {
            setEstado(estado - 1)
        }
    }

    const agregarPedido = () => {
        setPrecio(200 * estado)
    }


    return (
        <>
            <div className='contador'>
                <div className='contador__inside'>
                    <p>Platos pedidos:</p>
                    <button onClick={sumarPlato}>+</button>
                    {estado}
                    <button onClick={restarPlato}>-</button>
                </div>
                <div className='contador__insideDos'>
                <button onClick={agregarPedido}>Agregar pedido</button>
                <p>Total a pagar: ${precio}</p>
                </div>
            </div>
            <p id='stock'>Platos disponibles: {stock - estado}</p>
        </>
    )
}

export default ItemCount