import  {useCartContext}  from "../../context/CartContexto.jsx";
import { Cart } from 'react-bootstrap-icons';


import "./index.css";
const CardWidget = () => {
    const { cantidadItems}= useCartContext();
    return(
        <div className="carrito">
        <Cart/>
        <p>Carrito({cantidadItems})</p>
        </div>
    );

}
export default CardWidget;