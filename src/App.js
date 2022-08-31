import Header from "./components/Header/Header.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <ItemListContainer saludo="Hola"/>
      </main>
    </div>
  );
}

export default App;
