import FormularioContacto from "../../components/organisms/FormularioContacto";

// import Navbar from "../../components/organisms/Navbar";

function Contactos() {
  return (
    <div className="container mt-4">
      <h1>Contactos</h1>
      <p>
        Direccion av. Americo Vespucio 123
        <br />
        horario 24/7
      </p>

      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <h2>Formulario de contacto</h2>
             <FormularioContacto />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Contactos;