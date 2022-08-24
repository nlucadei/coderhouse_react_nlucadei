import ItemCount from "./ItemCount.js";

const ItemListContainer = ({saludo}) => {
    return (
        <div>
            <h2>{saludo}</h2>
            <ItemCount stock={12} initial={0}/>
        </div>
    )
}

export default ItemListContainer;