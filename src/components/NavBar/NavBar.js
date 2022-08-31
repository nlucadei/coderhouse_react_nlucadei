import CartWidget from "../CartWidget/CartWidget.js";
import estilos from "./navbar.module.css"

function NavBar () {
	return (
		<nav className={estilos.Navbar}>
			<a href="www.google.com" className={estilos.categoriaNavbar}>Home</a>
			<a href="www.google.com" className={estilos.categoriaNavbar}>Productos</a>
			<a href="www.google.com" className={estilos.categoriaNavbar}>Nosotros</a>
			<a href="www.google.com" className={estilos.categoriaNavbar}>Contacto</a>
			<a href="www.google.com" className={estilos.categoriaNavbar}><CartWidget/></a>
		</nav>	
	)
}

export default NavBar;