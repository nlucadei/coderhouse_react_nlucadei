import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "./itemdetail.module.css";

const ItemDetail = ({Product}) => {
 
	const [contador, setContador] = useState(0)

	const onAdd = (contador) => {
		alert ("Se ha agregado " + contador + " producto(s) al carrito.") 	
		console.log(contador)
		setContador(contador)
	}

    return (
        <div className={estilos.itemDetail}>
            <div className={estilos.itemDetailTitulo}>
				<h2>{Product.title}</h2>
			</div>
			<div className={estilos.itemDetailContainer}>
				<div className={estilos.itemDetailImageContainer}>
					<img className={estilos.itemDetailImage} src={Product.image} alt={Product.title}></img>
					<img className={estilos.itemDetailImage} src={Product.image2} alt={Product.title}></img>
				</div>
				<div>
					<p className={estilos.itemDetailDescription}>{Product.description}</p>
					<p className={estilos.itemDetailDescription}>Precio: ${Product.price}</p>
					<p className={estilos.itemDetailDescription}>Stock: {Product.stock} unidades</p>
					{contador === 0 ? <ItemCount stock={Product.stock} initial={0} onAdd={onAdd}/> : <Link to='/cart' className={estilos.linkCarrito}>Ir al carrito</Link>}
				</div>
			</div>
        </div>  
    )
};

export default ItemDetail;

