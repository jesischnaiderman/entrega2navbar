import React, { useState } from "react";
import Producto from "../array/lista_productos.jsx";
import ItemDetail from '../components/ItemDetail/ItemDetail.jsx';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {    
    const [producto, setProducto] = useState([]);
    const { idProducto } =  useParams();
    React.useEffect(()=>{
       

        let productoSelected = Producto.filter((element)=>{
               return element.id==idProducto
        });

    setProducto(productoSelected[0]);

    },[]);

    return(
    <>
        <ItemDetail key={producto.id}  producto={producto}/>
    </>
    );

}
export default ItemDetailContainer;