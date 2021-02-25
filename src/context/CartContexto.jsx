import React, { useState, createContext ,useContext} from "react";
export const cartContex = createContext();
function CartContext({children}) {
    const [product, setProduct] = useState([{'producto':[]}]);
    const [cantidad, setcantidad] = useState([{'cantidad':0}]);

    const addCart = (producto,contador) => {

console.log(producto.producto.id);
        if (isInCart(producto.producto.id==='-1')){
        setProduct({'producto':producto,'cantidad':contador})

        console.log('hol');
        console.log(product);

        }else{alert("ya esta en el carrito")}

    }
    const isInCart = (id) => {
            
        const search = obj => obj.id === id;
        console.log(product.findIndex(search))
        return product.findIndex(search);
        
    }
    function clearCart() {
        if(product.length>0){
        setProduct([{}])
        alert("ya esta eliminado  el carrito")}else{ alert("vacio  el carrito")}
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