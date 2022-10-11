import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
	
        const { totalQuantity } = useContext(CartContext)

        return (
        <>
                <span className="material-symbols-outlined">shopping_cart</span>
	        <span>{totalQuantity() === 0 ? "" : totalQuantity()}</span>
        </>
        )
}

export default CartWidget;