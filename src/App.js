import Header from "./components/Header/Header.js";
import Cart from "./components/Cart/Cart.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryName' element={<ItemListContainer/>} />
          <Route path='/detail/:idProd' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
