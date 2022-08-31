import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import estilos from "./item.module.css";

function Item ({id, title, description, image, price, stock, category}) {
	return (
		<div className={estilos.maquetadoCard}>
			<div className={estilos.card}>
				<div className={estilos.tituloCard}>
					<h2>{title}</h2>
				</div>
				<div className={estilos.recuadroImagenCard}>
					<img className={estilos.imagenCard} src={image} alt="imagen producto"></img>
				</div>
				<p className={estilos.descripcionCard}>{description}</p>
				<p className={estilos.descripcionCard}>Precio: ${price}</p>
				<p className={estilos.descripcionCard}>Stock: {stock} unidades</p>
				<ItemCount stock={stock} initial={0} />
			</div>
		</div>
	)
}

export default Item;