import Boton from "../atoms/Boton";

function Buscador(){
    const id = 1;

    return(
        <div>
            <input type="text"
            placeholder="Buscar Producto" />

            <Boton id={id} />
        </div>
    );
}


export default Buscador;
