

const ItemDetail = ({producto}) => {
    return(
        <>
        <div  className='producto_id' >
           <img src={producto.foto} alt={producto.fotoAlt}/>
            <p className='item_nombre'>Producto: {producto.titulo}</p>
            <p className='item_descripcion'>Descripcion:{producto.descripcion}</p>
            <p className='item_precio'>Precio: {producto.precio}</p>

        </div>
        </>
    );
}
export default ItemDetail;