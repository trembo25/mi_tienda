import Buscador from "../molecules/Buscador";


function Header(){
    return(
        <header>
            <h1> Mi tienda</h1>

            <nav>
                <a href="#">Inicio</a> |{" "}
                <a href="#">Productos</a> |{" "}
                <a href="#">Contacto</a>
            </nav>
            <br />
            <Buscador/>

        </header>
    );
}

export default Header;