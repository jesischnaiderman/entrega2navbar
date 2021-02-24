import {
    Link
  } from "react-router-dom";
import "./item.css";

const Item = ({producto}) => {
    return(
        <>
        <div  className='producto_id' >
            <p className='item_nombre'>Producto: {producto.titulo}</p>
            <img src={producto.foto} alt={producto.fotoAlt}/>
            <p className='item_precio'>Precio: {producto.precio}</p>
            <Link to={'/producto/'+producto.id}>ver +</Link>

        </div>
        </>
    );
}
export default Item;