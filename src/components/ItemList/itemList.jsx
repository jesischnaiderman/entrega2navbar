import Item from "../Item/item";
const ItemList = ({productos}) => {

return(
    <div className="ItemList">
        {productos.map((producto) => {
            
            return (
            <Item key={producto.id} producto={producto} />
            
            )

            }
            )

        }    
    </div>
        );

};
export default ItemList;