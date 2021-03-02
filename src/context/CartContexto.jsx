import React from "react";
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartProvider = props => {
  const [list, setList] = React.useState([]);
  const [cantidadItems, setCantidad] = React.useState([1]);

  const productDelete = idProducto =>{

    if (list.find(item => item.producto.id === idProducto)) {

  
      }
    }
  const listDelete = ( ) =>{
    setList([]);

}

const productoCant = ( ) =>{
    list.maplist.map(item => {

        setCantidad( item.contador++);
})
console.log()
}
  const productsAdd = itemCount => {

    if (list.find(item => item.id === itemCount.id)) {

      const newCartItem = list.map(item => {
        setCantidad( item.contador++);

        if (item.id === itemCount.id) {
          return { ...item, count: itemCount.count + item.count };
        }
        return  item;

      });

      setList(newCartItem);

    } else {
      setList(state => {
        return [...state, itemCount];
      });
    }
    console.log(list)
  };

  return (
    <CartContext.Provider value={{ list, productsAdd, productDelete, listDelete, cantidadItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
