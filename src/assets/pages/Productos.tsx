import CardProducto from "../../components/molecules/CardProductos";

function Productos() {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Productos</h1>
            
            {/* Contenedor Grid responsivo */}
            <div className="row g-3">

                {/* Producto 1 */} {/* el d-flex align-items-stretch
                                     hace que las tarjetas tengan la misma altura */}
                <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch">
                    <CardProducto
                        id={1}
                        titulo="Notebook"
                        descripcion="Notebook ideal para estudiar"
                        precio={1000000}
                        imagen="/img/notebook-img.jpg"
                    />
                </div>

                {/* Producto 2 */}
                <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch">
                    <CardProducto
                        id={2}
                        titulo="Mouse"
                        descripcion="Ideal para el Notebook"
                        precio={10000}
                        imagen="/img/mause-img.jpg"
                    />
                </div>

                {/* Producto 3 */}
                <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch">
                    <CardProducto
                        id={3}
                        titulo="Teclado"
                        descripcion="Ideal para el Notebook"
                        precio={25000}
                        imagen="/img/teclado-img.jpg"
                    />
                </div>

                {/* Producto 4 */}
                <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch">
                    <CardProducto
                        id={4}
                        titulo="Audífonos"
                        descripcion="Ideal para el Notebook"
                        precio={15000}
                        imagen="/img/audifono.jpg"
                    />
                </div>

            </div>
        </div>
    );
}

export default Productos;