import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, quantity)
        } else {
            setCart([...cart, {...item, quantity}])
        }
    }

    const removeItem = (id) => {
        const carritoFiltrado = cart.filter((product) => product.id !== id)
        setCart(carritoFiltrado)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return (
            cart.some((product) => product.id === id)
        )
    }

    const sumarCantidad = (item, quantity) => {
        const carritoActualizado = cart.map((product) => {
            if (product.id === item.id) {
                const productoActualizado = {
                    ...product,
                    quantity: product.quantity + quantity,
                }
                return productoActualizado
            } else {
                return product
            }
        })
        setCart(carritoActualizado)
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;