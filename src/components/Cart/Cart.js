import { useContext, useState } from "react";
import Form from "../Form/Form.js";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../FirebaseConfig/firebaseConfig";
import estilos from "./cart.module.css";

const Cart = () => {
    const { cart, removeItem, clearCart, totalPrice, totalQuantity } = useContext(CartContext)

    const [idCompra, setIdCompra] = useState("")

    const total = totalPrice()

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (event) => {
        const reducedCart = cart.map((product) => {
            return {
                quantity: product.quantity,
                id: product.id
            }
        })
        event.preventDefault()
        const order = {
            buyer:{
                nombre: nombre,
                email: email,
                phone: phone,
            },
            items: reducedCart,
            total: total,
            date: serverTimestamp(),
        }
            
        const orderCollection = collection(db, "orders")
    
        addDoc(orderCollection, order).then((response) => {
            setIdCompra(response.id)
            clearCart()
        })
    }

    const handleChangeNombre = (event) => {
        setNombre(event.target.value)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangeEmail2 = (event) => {
        setEmail2(event.target.value)
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value)
    }

    if (idCompra !== "") {
        return <h2 className={estilos.textoCheckout}>Gracias por tu compra {nombre}, tu número de orden es: {idCompra}</h2>
    }
    
    return (
        <>
            {cart.length === 0 ? (
                <div className={estilos.itemDetail}>
                    <h2>Carrito vacío</h2>
                    <Link to={`/`}><button className={estilos.botonCart}>Volver al Home</button></Link>
                </div>
        ) : (
            <div className={estilos.itemDetail}>
                <div className={estilos.itemDetailMuestra}>
                    {cart.map((product) => (
                        <div key={product.id}>
                            <img className={estilos.itemDetailImage} src={product.image} alt={product.title}></img>
                            <div>
                                <h2>{product.title}</h2>
                                <h3>Cantidad seleccionada: {product.quantity}</h3>
                                <h3>Precio unitario: ${product.price}</h3>
                                <h3>Subtotal de la compra: ${product.price*product.quantity}</h3>
                            </div>
                            <button onClick={() => removeItem(product.id)} className={estilos.botonCart}>Eliminar Producto</button>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={clearCart} className={estilos.botonCart}>Limpiar Carrito</button>
                    <h3>Total de artiículos agregados al carrito: {totalQuantity()}</h3>
                    <h3>Total de la compra: ${total}</h3>
                </div>
                <div>
                    <Form 
                        handleChangeNombre={handleChangeNombre} 
                        handleChangeEmail={handleChangeEmail}
                        handleChangeEmail2={handleChangeEmail2}
                        handleChangePhone={handleChangePhone}
                        handleSubmit={handleSubmit}
                        nombre={nombre}
                        email={email}
                        email2={email2}
                        phone={phone}
                    />
                </div>
            </div>
        )}
    </>
    )
}
	 
export default Cart;
