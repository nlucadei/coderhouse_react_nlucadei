import NavBar from "./NavBar.js";

function Header () {
    return (
        <div className="header">
            <img className="imagenHeader" src="assets/img/logo.png" alt="logo"></img>
            <NavBar/>
        </div>
    )
}
	 
export default Header;
