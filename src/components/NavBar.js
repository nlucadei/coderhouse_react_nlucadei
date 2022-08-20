import CartWidget from "./CartWidget.js";

function NavBar () {
	return (
		<nav className="Navbar">
			<a href="www.google.com" className="categoriaNavbar">Home</a>
			<a href="www.google.com" className="categoriaNavbar">Productos</a>
			<a href="www.google.com" className="categoriaNavbar">Nosotros</a>
			<a href="www.google.com" className="categoriaNavbar">Contacto</a>
			<a href="www.google.com" className="categoriaNavbar"><CartWidget/></a>
		</nav>	
	)
}

export default NavBar;