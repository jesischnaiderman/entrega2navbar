import React, { useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from '../ItemCount';
const ItemDetail = ({producto}) => {
    const [irCart, setIrCart] = useState(false);
  
    const onAdd = (contador) => {
      console.log("Udselecciono ", contador);
      setIrCart(true);
    };
    return(
        <>
        <div  className='producto_id' >
           <img src={producto.foto} alt={producto.fotoAlt}/>
            <p className='item_nombre'>Producto: {producto.titulo}</p>
            <p className='item_descripcion'>Descripcion:{producto.descripcion}</p>
            <p className='item_precio'>Precio: {producto.precio}</p>
            <p className='item_stock'>Stock: {producto.stock}</p>
            </div>
        <div>
            {irCart ? <button ><Link to={'/carrito'}>Terminar compra</Link></button>  : <ItemCount stock={producto.stock} onAdd={onAdd} />}
        
        </div>
        </>
    );
}
export default ItemDetail;