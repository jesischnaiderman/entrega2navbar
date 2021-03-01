import React from "react";
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartProvider = props => {
  const [list, setList] = React.useState([]);

  const productsAdd = itemCount => {

    console.log(itemCount)

    if (list.find(item => item.producto.id === itemCount.producto.id)) {
        console.log(list)

      const newCartItem = list.map(item => {

        if (item.producto.id === itemCount.producto.id) {
          return { ...item, contador: itemCount.contador + item.contador };
        }
        return item;
      });
      console.log(newCartItem)

      setList(newCartItem);
    } else {
      setList(state => {
        return [...state, itemCount];
      });
    }
    console.log(list)
  };

  return (
    <CartContext.Provider value={{ list, productsAdd }}>
      {props.children}
    </CartContext.Provider>
  );
};
