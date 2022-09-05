import CartWidget from "../CartWidget/CartWidget.js";
import estilos from "./navbar.module.css";
import { Link } from "react-router-dom";

function NavBar () {
	return (
		<nav className={estilos.Navbar}>
			<Link to='/category/basicos' className={estilos.categoriaNavbar}>Básicos</Link>
			<Link to='/category/aromaticas' className={estilos.categoriaNavbar}>Aromáticas</Link>
			<Link to='/cart' className={estilos.categoriaNavbar}><CartWidget/></Link>
		</nav>	
	)
};

export default NavBar;