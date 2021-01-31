import "./ItemListContainer.css";
import ItemCount from '../components/ItemCount';
import React, { useState } from "react";
const ItemListContainer = ({greeting}) => {
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
        <a className="greeting" href="#" >{greeting}</a>
        <br/>
        <ItemCount stock={'4'}  countItems={countItems} onSustract={onSustract} onAdd={onAdd}/>
        <br/>
        <button>Comprar</button>  
    </>
    );

}
export default ItemListContainer;