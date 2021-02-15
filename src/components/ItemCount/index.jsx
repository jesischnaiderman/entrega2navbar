

import React, { useState } from "react";

const ItemCount = ({stock,onAdd}) => {
    
    const [countItems, setCountItems]= useState(1);
  

    const sumar = (stock) =>{
            if (stock<=countItems){
                alert('supero el stock de '+ stock)
            }else{
                setCountItems(countItems+1)
            }
        }
    const restar = () =>{
            if (countItems<=1){
                return(<b>'no puedes comprar negativo o cero'</b>)
            }else{
                setCountItems(countItems-1)
            }
        }
    const irCarrrito = () => {
            onAdd(countItems);
          };
        return(
        <>
        <button onClick={()=>{restar()}} >-</button>
        {countItems}
        <button onClick={()=>{sumar(stock)}}  >+</button>  
        <br></br>
        <button onClick={()=>{irCarrrito()}}>Comprar</button> 
        </>
    );
}
export default ItemCount;