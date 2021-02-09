import React, { useState } from "react";
import Producto from "../array/producto.jsx";
import ItemDetail from '../components/ItemDetail/ItemDetail.jsx';
const ItemDetailContainer = () => {
 
    
const [producto, setProducto]=useState([]);
    
    React.useEffect(()=>{
        const detalle = new Promise(
            (resolve)=>{
                setTimeout(() => {resolve (Producto) }, 2000);
            }
        );
       detalle.then((resultado)=> setProducto(resultado)) 
    },[]);
     return(
    <>
        <ItemDetail key={producto.id}  producto={producto}/>
    </>
    );

}
export default ItemDetailContainer;