import Input from "../atoms/Input";

type Props ={
    etiqueta: string;
    nombre: string;
    tipo: string;
    valor: string; // valor actual del input
    alCambiar: (valor: string) => void; // funcion para actualizar el valor del input en el componente padre
};

function CampoFormulario({ etiqueta, nombre, tipo , valor, alCambiar}: Props) {
    return (
        <div className="mb-3">
            <label className= "from-label">
                {etiqueta}
            </label>

            <Input 
            tipo={tipo} 
            nombre={nombre}
            valor={valor} // valor actual del input
            alCambiar={alCambiar} // funcion para actualizar el valor del input en el componente padre
            />
        </div>
    );
}
export default CampoFormulario;