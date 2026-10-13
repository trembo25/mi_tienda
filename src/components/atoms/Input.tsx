type Props = {
    tipo: string;
    nombre: string;
    valor: string; // valor actual del input
    alCambiar: (valor: string) => void; // funcion para actualizar el valor del input en el componente padre
};

function Input({ tipo, nombre , valor , alCambiar}: Props) {
    return (
        <input
            type={tipo}
            name={nombre}
            className="form-control"
            value={valor} // establecer el valor actual del input
            onChange={(e) => alCambiar(e.target.value)} // actualizar el valor del input en el componente padre
        />
    );
}
export default Input;