import Buscador from "../molecules/Buscador";
import CardProducto from "../molecules/CardProductos";


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
            <CardProducto
                id={1}
                titulo="Producto destacado"
                descripcion="Descripción del producto destacado"
                precio={99.99}
                imagen="https://via.placeholder.com/150"
            />

        </header>
    );
}

export default Header;