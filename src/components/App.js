import Header from "./Header.js";
import ItemListContainer from "./ItemListContainer.js";

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
