import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import estilos from "./cart.module.css";

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice, totalQuantity } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className={estilos.itemDetail}>
                <h2>Carrito vacío</h2>
                <Link to={`/`}><button className={estilos.botonCart}>Volver al Home</button></Link>
            </div>
        )
    }

    return (
        <div className={estilos.itemDetail}>
            <div className={estilos.itemDetailMuestra}>
                {cart.map((product) => (
                    <div key={product.id}>
                        <img className={estilos.itemDetailImage} src={product.image} alt={product.title}></img>
                        <div>
                            <h2>{product.title}</h2>
                            <h3>Cantidad seleccionada: {product.quantity}</h3>
                            <h3>Precio unitario: ${product.price}</h3>
                        </div>
                        <button onClick={() => removeItem(product.id)} className={estilos.botonCart}>Eliminar Producto</button>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={clearCart} className={estilos.botonCart}>Limpiar Carrito</button>
                <h3>Total de artiículos agregados al carrito: {totalQuantity()}</h3>
                <h3>Total de la compra: ${totalPrice()}</h3>
                <button className={estilos.botonCart}>Terminar compra</button>
            </div>
        </div>
    )
}
	 
export default Cart;
