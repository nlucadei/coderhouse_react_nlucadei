import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.js";

const App = () => {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <header>
          <Header/>
        </header>
        <main>
          <Main/>   
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
