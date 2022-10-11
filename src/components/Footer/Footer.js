import estilos from "./footer.module.css";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className={estilos.divFooter}>
            <div className={estilos.textoFooter}>
                <Link to={`/`}>
                    <img className={estilos.imagenFooter} src="https://res.cloudinary.com/dpcytaitx/image/upload/v1662359774/logo_i8ihf6.png" alt="logo"></img>
                </Link>
                <p>Copyright 2022 Velas América</p>
                <p>All Rights Reserved</p>
            </div>
            <div className={estilos.textoFooter}>
                <h3 className={estilos.titulosFooter}>Contacto</h3>
                <p>América 720</p>
                <p>CP 1706, Haedo, Morón</p>
                <p>Tel: (+549) 11 6019 4059</p>
                <p>Email: nadialucadei@gmail.com</p>
            </div>
            <div className={estilos.textoFooter}> 
                <h3 className={estilos.titulosFooter}>Navega</h3>
                <NavBar/>
            </div>
            <div>
                <h3 className={estilos.titulosFooter}>Siguenos</h3>
                <a href="https://www.instagram.com/nadpalu/"><img src="https://res.cloudinary.com/dpcytaitx/image/upload/v1665471896/Logo_Insta_jv8kzr.png" alt="Logo Instagram" /></a>
                <a href="https://www.linkedin.com/in/nadia-paola-lucadei/"><img src="https://res.cloudinary.com/dpcytaitx/image/upload/v1665471896/Logo_Linkedin_ffatry.png" alt="Logo Linkedin" /></a>
            </div>
        </div>
    )
}

export default Footer;