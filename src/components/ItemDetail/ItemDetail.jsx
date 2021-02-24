import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount';
import  {cartContex}  from "../../context/CartContexto";

const ItemDetail = ({producto}) => {
const [ product,addCart]= useContext(cartContex);

    const [irCart, setIrCart] = useState(false);
    const onAdd = (contador) => {
      setIrCart(true);

      addCart({producto});

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