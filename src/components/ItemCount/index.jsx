
const ItemCount = ({ countItems, onAdd, onSustract, stock}) => {
    return(
        <>
        <button onClick={()=>{onSustract()}} >-</button>
        {countItems}
        <button onClick={()=>{onAdd(stock)}}  >+</button>  
        </>
    );
}
export default ItemCount;