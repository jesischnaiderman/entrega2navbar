import React, { useState, createContext ,useContext} from "react";
export const cartContex = createContext();
function CartContext({children}) {
    const [product, setProduct] = useState([]);

    const addCart = (producto,contador) => {
        if (isInCart(producto.producto.id)){
            
            alert("ya esta en el carrito")
        }else{
            setProduct([...product, producto,contador])
            console.log(product);


        }
    }
    const isInCart = (id) => {
        console.log(product);
        console.log(product.length==0);

        const search = obj => obj.id === id;
        if(product.length!==0){
        console.log(product.findIndex(search))
        return product.findIndex(search);
        }
    }
    function clearCart() {
        if(product.length!==0){
        setProduct('')
        alert("ya esta eliminado  el carrito")}else{ alert("vacio  el carrito")}
        console.log(product);

    }
    const clearItem = (id) => {
            
        console.log('Eliminar item')
        
    }
    return (
        <>
                <cartContex.Provider value={[
                    product,
                    addCart,
                    clearCart,
                    clearItem
                ]}>
                    {children}
                </cartContex.Provider>
            </>
        )
        
}

export default CartContext