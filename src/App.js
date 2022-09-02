import Header from "./components/Header/Header.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

const App = () => {

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <ItemListContainer/>
        <ItemDetailContainer/>
      </main>
    </div>
  );
}

export default App;
