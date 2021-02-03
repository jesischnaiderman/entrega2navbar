
import "./item.css";

const Item = ({producto}) => {
    return(
        <>
        <div  className='producto_id' >
            <p className='item_nombre'>Producto: {producto.titulo}</p>
            <a className='item_url'href={producto.url}>Link</a>
            <img className='item_img'></img>
            <p className='item_precio'>Precio: {producto.precio}</p>

        </div>
        </>
    );
}
export default Item;