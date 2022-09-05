import NavBar from "../NavBar/NavBar.js";
import estilos from "./header.module.css";
import { Link } from "react-router-dom";

function Header () {
    return (
        <div className={estilos.header}>
            <Link to={`/`}>
                <img className={estilos.imagenHeader} src="https://res.cloudinary.com/dpcytaitx/image/upload/v1662359774/logo_i8ihf6.png" alt="logo"></img>
            </Link>
            <NavBar/>
        </div>
    )
}
	 
export default Header;
