import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import estilos from "./itemdetail.module.css";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({Product}) => {
 
	const [contador, setContador] = useState(0)

	const { addItem, getProductQuantity } = useContext(CartContext)

	const onAdd = (contador) => { 	
		console.log(contador)
		setContador(contador)
		addItem(Product, contador)
	}

	const cantidad = getProductQuantity(Product.id)

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
					{contador === 0 ? <ItemCount stock={Product.stock} initial={cantidad} onAdd={onAdd}/> : <Link to='/cart' className={estilos.linkCarrito}>Ir al carrito</Link>}
				</div>
			</div>
        </div>  
    )
};

export default ItemDetail;

