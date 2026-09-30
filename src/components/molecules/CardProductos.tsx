import Boton from "../atoms/Boton";

function CardProducto(){
    return(
        <div className="card"  style={{width: '18rem'}}>
            <img 
            src="public/img/notebook-img.jpg"
            className="card-img-top"
            alt="imagen notebook" />

            <div className="card-body">
                <h5 className="card-title">
                    NoteBook
                </h5>
                <p className="card-text">
                    NoteBook de ultima generacion 32G de RAM,
                    ideal para estudiar
                </p>
                <Boton/>
            </div>
        </div>


    )
}
export default CardProducto;