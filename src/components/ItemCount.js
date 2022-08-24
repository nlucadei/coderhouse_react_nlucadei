import {useState} from "react";

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
		<div className="contadorCarrito">
            <span className="unidadesContador">Unidades: {contador}</span>
			<button onClick={bajarContador} className="botonContador">-</button>
			<button onClick={aumentarContador} className="botonContador">+</button>
			<button onClick={confirmarContador} className="botonContador">Agregar al carrito</button>
		</div>
	)
}

export default ItemCount;