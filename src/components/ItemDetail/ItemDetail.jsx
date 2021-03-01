import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount';
import  {useCartContext}  from "../../context/CartContexto.jsx";

const ItemDetail = ({producto}) => {
const {productsAdd, clearCart, clearItem}= useCartContext();

    const [irCart, setIrCart] = useState(false);
    
    const onAdd = (contador) => {
      setIrCart(false);
console.log(contador)
      productsAdd({producto,contador});
    };
    const eliminar = () => {
      
  
        clearCart();
        setIrCart(false);
      };

    const eliminarItem = () => {
      
  
        clearItem(producto.id);
        setIrCart(false);
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
            <button onClick={()=>{eliminar()}}>Eliminar compra</button>
            <button onClick={()=>{eliminarItem()}}>Eliminar item del carrito</button>

        </div>
        </>
    );
}
export default ItemDetail;