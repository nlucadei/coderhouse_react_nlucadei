import NavBar from "../NavBar/NavBar.js";
import estilos from "./header.module.css";

function Header () {
    return (
        <div className={estilos.header}>
            <img className={estilos.imagenHeader} src="assets/img/logo.png" alt="logo"></img>
            <NavBar/>
        </div>
    )
}
	 
export default Header;
