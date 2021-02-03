import "./ItemListContainer.css";
import ItemList from '../components/ItemList/itemList';
import ItemCount from '../components/ItemCount';
import React, { useState } from "react";
import listaProductos from "../array/lista_productos.jsx";

const ItemListContainer = ({greeting}) => {
 
    
const [productos, setProductos]=useState([]);
    
    React.useEffect(()=>{
        const lista = new Promise(
            (resolve)=>{
                setTimeout(() => {resolve (listaProductos) }, 2000);
            }
        );
       lista.then((resultado)=> setProductos(resultado)) 
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
        <ItemList productos={productos}/>
        <a className="greeting" href="#" >{greeting}</a>
        <br/>

        <ItemCount stock={'4'}  countItems={countItems} onSustract={onSustract} onAdd={onAdd}/>
        <br/>
        <button>Comprar</button>  
    </>
    );

}
export default ItemListContainer;