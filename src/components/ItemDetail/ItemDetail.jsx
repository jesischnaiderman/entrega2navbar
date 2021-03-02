import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount';
import  {useCartContext}  from "../../context/CartContexto.jsx";

const ItemDetail = ({producto}) => {
const {productsAdd, productDelete, listDelete}= useCartContext();

    const [irCart, setIrCart] = useState(false);
    
    const onAdd = (count) => {
      setIrCart(false);
console.log(count)
      productsAdd({ id: producto.id, name: producto.titulo, count });
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