import { Link } from "react-router-dom";


function BotonVolver(){
    return(
        <Link 
        to={`/productos`}
        className = "btn btn-danger"
        >
        vovlver
        </Link>
    );
}
export default BotonVolver; 