import Buscador from "../molecules/Buscador";

function Header() {
    return (
        <header className="bg-dark text-white py-3 mb-4 shadow-sm">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                
                {/* 1. Título / Logo */}
                <h1 className="h3 m-0 text-center text-md-start">Mi Tienda</h1>

                {/* 2. Menú de Navegación */}
                <nav className="d-flex gap-3 align-items-center">
                    <a href="#" className="text-white text-decoration-none">Inicio</a>
                    <a href="#" className="text-white text-decoration-none">Productos</a>
                    <a href="#" className="text-white text-decoration-none">Contacto</a>
                    <a href="#" className="btn btn-outline-light btn-sm ms-2">Login</a>
                </nav>

                {/* 3. Buscador */}
                <div className="w-100 w-md-auto">
                    <Buscador />
                </div>

            </div>
        </header>
    );
}

export default Header;