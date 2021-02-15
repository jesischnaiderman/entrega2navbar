import React, { useState } from "react";
import Producto from "../array/lista_productos.jsx";
import ItemDetail from '../components/ItemDetail/ItemDetail.jsx';
import { useParams } from "react-router-dom";
import ItemCount from '../components/ItemCount';
const ItemDetailContainer = () => {    
    const [producto, setProducto] = useState([]);
    const { idProducto } =  useParams();
    React.useEffect(()=>{
       

        let productoSelected = Producto.filter((element)=>{
               return element.id==idProducto
        });

    setProducto(productoSelected[0]);

    },[]);
    const [countItems, setCountItems]= useState(1);
    const onAdd = (stock) =>{
            if (stock<=countItems){
                alert('supero el stock de '+ stock)
            }else{
                setCountItems(countItems+1)
            }
        }
    const onSustract = () =>{
            if (countItems<=1){
                return(<b>'no puedes comprar negativo o cero'</b>)
            }else{
                setCountItems(countItems-1)
            }
        }
    return(
    <>
        <ItemDetail key={producto.id}  producto={producto}/>
        <ItemCount stock={producto.stock}   countItems={countItems} onSustract={onSustract} onAdd={onAdd}/>
        <br/>
        <button>Comprar</button> 
    </>
    );

}
export default ItemDetailContainer;