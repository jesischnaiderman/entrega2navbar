import "./ItemListContainer.css";
import ItemList from '../components/ItemList/itemList';
import React, { useState } from "react";
import listaProductos from "../array/lista_productos.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
 
const { idCategoria } = useParams();
     
const [productos, setProductos ]=useState([]);
    
    React.useEffect(()=>{
        let listaProductosCategory 
        if(idCategoria!=='all'){
             listaProductosCategory = listaProductos.filter((element)=>{
        return element.categoryId === idCategoria
        });
        }else{ 
             listaProductosCategory = listaProductos
            
        }
        setProductos(listaProductosCategory);
    },[productos,idCategoria]);
    
    return(
    <>
        <a className="greeting" href="#" >{greeting}</a>
        <br/>
        <ItemList productos={productos}/>

 
    </>
    );

}
export default ItemListContainer;