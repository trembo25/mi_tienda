import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand bg-primary">
            <div className="container">
                <samp className="navbar-brand text-white">
                    Mitienda
                </samp>

                <div className="navbar-nav">
                    <Link className="nav-link text-white" to="/">
                    Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                    Productos
                    </Link>

                     <Link className="nav-link text-white" to="/contactos">
                    Contactos
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar