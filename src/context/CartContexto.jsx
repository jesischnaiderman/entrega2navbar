import React, { useState, createContext ,useContext} from "react";
export const cartContex = createContext();
function CartContext({children}) {
    const [product, setProduct] = useState([{id: 0}]);
    
    const addCart = (producto) => {

console.log(producto.producto.id);
        if (isInCart(producto.producto.id==-1)){
        setProduct({...product,producto})
        console.log(product);

        }

    }
    const isInCart = (id) => {
       
  const search = obj => obj.id === id;
  console.log(product.findIndex(search))
  return product.findIndex(search);
  
    }
    function addToCart(item, qnt) {
      if (product.length !== 0) {
             }
    }
    function removeFromCart(itemID, qnt) {
    }
    function clearCart() {
    }
    return (
        <>
                <cartContex.Provider value={[
                    product,
                    addCart,
                ]}>
                    {children}
                </cartContex.Provider>
            </>
        )
        
}

export default CartContext