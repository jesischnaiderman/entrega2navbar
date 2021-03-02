import React from "react";
export const CartContext = React.createContext();
export const useCartContext = () => React.useContext(CartContext);

export const CartProvider = props => {
  const [list, setList] = React.useState([]);
  const [cantidadItems, setCantidad] = React.useState(0);

  const productDelete = idProducto =>{

    if (list.find(item => item.id === idProducto)) {

  
      }
    }
  const listDelete = ( ) =>{
    setList([]);
    setCantidad(0);

}


  const productsAdd = itemCount => {
    list.map(item => {
        let suma=(parseFloat( cantidadItems) + parseFloat(item.count))
          setCantidad(suma );
        console.log('cantidadItems')
        console.log(cantidadItems)

})
    if (list.find(item => item.id === itemCount.id)) {

      const newCartItem = list.map(item => {


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
