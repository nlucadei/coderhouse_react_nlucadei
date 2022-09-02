import React from "react";
import Item from "../Item/Item";
import estilos from "./itemdetail.module.css";

const ItemDetail = ({Product}) => {
 
    return (
        <div className={estilos.itemDetail}>
            <Item
				id={Product.id}
				title={Product.title}
				image={Product.image}
				description={Product.description}
				price={Product.price}
				stock={Product.stock}
				category={Product.category}
				/>
        </div>  
    )
};

export default ItemDetail;

