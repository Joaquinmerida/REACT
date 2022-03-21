import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = (props) => {

  const stock = props.stock;
  const [estado, setEstado] = useState(0);


  const sumarPlato = () => {
    if (estado < stock) {
      setEstado(estado + 1);
    }
  };

  const restarPlato = () => {
    if (estado > 0) {
      setEstado(estado - 1);
    }
  };

  const agregarPedido = () => {
    props.onAdd(estado)
  };



return (
    <>
    <div className="counter">
        <div className="contador">
        <div className="contador__inside">
            <p>Platos pedidos:</p>
            <button onClick={sumarPlato}>+</button>
            <h2 id="counter__count">{estado}</h2>
            <button onClick={restarPlato}>-</button>
        </div>
        <div className="contador__insideDos">
            <button onClick={agregarPedido}>Agregar al carrito</button>
            <Link to="/cart">Finalizar compra</Link>
            <p id="stock">Platos disponibles: {stock - estado}</p>
            </div>
        </div>
    </div>
    </>
  );
};

export default ItemCount;
