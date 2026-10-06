import Boton from "../atoms/Boton";

function Buscador(){

    return(
        <div>
            <input type="text"
            placeholder="Buscar Producto" />

            <Boton id={id} />
        </div>
    );
}


export default Buscador;
