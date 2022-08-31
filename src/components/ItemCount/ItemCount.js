import {useState} from "react";
import estilos from "./itemcount.module.css";

const ItemCount = ({stock, initial, onAdd}) => {
	
	const [contador, setContador] = useState(initial)

	const aumentarContador = () => {
		(contador < stock) ? setContador(contador+1) : alert ("No hay stock suficiente.")
	}

	const bajarContador = () => {
		(contador > 0) ? setContador(contador-1) : alert ("Error.")
	}

	const confirmarContador = () => {
		if (contador >initial && contador <=stock) {
			alert ("Se ha agregado " + contador + " producto(s) al carrito.");
			onAdd(contador);
		} else {
			alert ("Error.")
		 }
	}

	return (
		<div className={estilos.contadorCarrito}>
			<div className={estilos.buaContador}>
				<button onClick={bajarContador} className={estilos.botonContador}>-</button>
				<span className={estilos.unidadesContador}>Unidades: {contador}</span>
				<button onClick={aumentarContador} className={estilos.botonContador}>+</button>
			</div>
			<button onClick={confirmarContador} className={estilos.botonAgregarCarrito}>Agregar al carrito</button>
		</div>
	)
}

export default ItemCount;