import { useParams } from "react-router-dom"

const productos = [
            {
                id:1,
                titulo:"NoteBook",
                descripcion:"NoteBook ideal para estudiar ",
                precio:10000000,
                imagen:"public/img/notebook-img.jpg"
                
            },

            {  
                
                id:2,
                titulo:"Mouse",
                descripcion:"ideal para el NoteBook ",
                precio:10000,
                imagen:"public/img/mause-img.jpg"
                
            },
                
            {
                id:3,
                titulo:"Teclado",
                descripcion:"ideal para el NoteBook ",
                precio:100000000000000000,
                imagen:"public/img/teclado-img.jpg"
                
            }   
    ]   
function DetalleProducto(){

    const {id} = useParams()

    const producto = productos.find(
        producto => producto.id === Number(id)
    )
    return(
        <div>
            <h1> Detalle del Producto</h1>
            <img 
            src={producto?.imagen}
            alt={producto?.titulo} 
            style={{width: '30px'}}
            />

            <h2> {producto?.titulo}</h2>
            <p>{producto?.descripcion}</p>
            <p>{producto?.precio}</p>
        </div>
    )
           
}

             


export default DetalleProducto