import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import estilos from "./cart.module.css";

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext)

    return (
        <div className={estilos.itemDetail}>
            {cart.map((product) => (
                <div key={product.id}>
                    <img className={estilos.itemDetailImage} src={product.image} alt={product.title}></img>
                    <h2>{product.title}</h2>
                    <h3>Cantidad seleccionada: {product.quantity}</h3>
                    <button onClick={() => removeItem(product.id)} className={estilos.botonCart}>Eliminar Producto</button>
                </div>
            ))}
            <button onClick={clearCart} className={estilos.botonCart}>Limpiar Carrito</button>
        </div>
    )
}
	 
export default Cart;
