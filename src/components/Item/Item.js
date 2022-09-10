import React from "react";
import { Link } from "react-router-dom"; 
import estilos from "./item.module.css";

function Item ({id, title, image, description, price, stock, category}) {
	return (
		<div className={estilos.maquetadoCard}>
			<div className={estilos.card}>
				<div className={estilos.tituloCard}>
					<h2>{title}</h2>
				</div>
				<div className={estilos.recuadroImagenCard}>
					<img className={estilos.imagenCard} src={image} alt={title}></img>
				</div>
				<p className={estilos.descripcionCard}>{description}</p>
				<p className={estilos.descripcionCard}>Precio: ${price}</p>
				<p className={estilos.descripcionCard}>Stock: {stock} unidades</p>
				<Link to={`/detail/${id}`} className={estilos.MaquetadoBotonCard}>
					<button className={estilos.botonCard}>Ver Detalles</button>
				</Link>
			</div> 
		</div>
	)
}

export default Item;