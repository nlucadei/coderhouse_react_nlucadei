import React from "react";
import Item from "../Item/Item.js";

function ItemList({ProductList}) {
	return (
				ProductList.map (p =>
				<Item
				id={p.id}
				title={p.title}
				image={p.image}
				description={p.description}
				price={p.price}
				stock={p.stock}
				category={p.category}
				/>
			)
	)
}

export default ItemList;