import FormularioContacto from "../../components/organisms/FormularioContacto";

// import Navbar from "../../components/organisms/Navbar";

function Contactos() {
  return (
    <div className="container mt-4">
      <h1 className="mb-3">Contactos</h1>
      <p className="text-muted">
        Dirección: Av. Américo Vespucio 123
        <br />
        Horario: 24/7
      </p>

      {/* Fila centradora de la grilla */}
      <div className="row justify-content-center mt-4">
        
        {/* Columna responsiva con las clases solicitadas */}
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow p-4 mb-5 bg-body rounded">
            <h2 className="h4 text-center mb-3">Formulario de contacto</h2>
            <FormularioContacto />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contactos;