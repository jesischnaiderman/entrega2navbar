import "./ItemListContainer.css";
import ItemList from '../components/ItemList/itemList';
import React, { useState } from "react";
import listaProductos from "../array/lista_productos.jsx";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getFirestore } from "../firebase";
function ItemListContainer({ greeting }) {

    const { idCategoria } = useParams();

    const [productos, setProductos] = useState([]);
/*React.useEffect(() => {//conexion
        const bd = getFirestore();
        //guardamos coleccion
        const itemsColection = bd.collection('items');
        //Tomo los datos
        itemsColection.get().then((value)=>{
           let aux = value.docs.map(element => { return { ...element.data(), id:element.id}}
            )
            console.log(aux);
            setProductos(aux);
        })

    }, [idCategoria]);*/

    React.useEffect(() => {
        let listaProductosCategory = listaProductos;

        if (idCategoria !== 'all' && idCategoria!==undefined) {
                listaProductosCategory = listaProductos.filter((element) => {
                return element.categoryId === idCategoria;
            });
        } else { 
            listaProductosCategory = listaProductos;

        }
        setProductos(listaProductosCategory);
    }, [idCategoria]);

    return (
        <>
            <p className="greeting" >hola {greeting}</p>
            <br />
            <ItemList productos={productos} />


        </>
    );

}
export default ItemListContainer;