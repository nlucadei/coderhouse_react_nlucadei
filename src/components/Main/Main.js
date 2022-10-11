import Cart from "../Cart/Cart.js";
import ItemListContainer from "../ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.js";
import { Routes, Route } from "react-router-dom";

function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:categoryName' element={<ItemListContainer/>} />
                <Route path='/detail/:idProd' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
            </Routes>
        </div>
    )
}

export default Main;
   