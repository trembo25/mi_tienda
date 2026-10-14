import FormularioLogin from "../../components/organisms/FormularioLogin";

function Login(){
    return (
        <div className="container mt-4">
            <h1>Inicio de Sesion </h1>

            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                    <div className="card shadow p-3 mb-5 bg-body rounded">
                        <h2>Formulario Login</h2>
                        <FormularioLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;