import CampoFormulario from "../molecules/CampoFormulario";
import { useState, type FormEvent } from "react";

function FormularioContacto() {
  // estados para guardar datos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  // funcion para que se guarde el valor del input en el componente padre
  const mensajeFormulario = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita que se recargue la página al enviar el formulario

    if (nombre.trim() === "") {
      alert("Por favor ingrese su nombre");
      return;
    }

    if (email.trim() === "") {
      alert("Por favor ingrese su email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor ingrese un email válido");
        return;
        }

    if (mensaje.trim() === "") {
      alert("Por favor ingrese su mensaje");
      return;
    }
    alert (`Gracias por contactarnos, ${nombre}. Hemos recibido tu mensaje: "${mensaje}". Te responderemos a la brevedad al correo ${email}.`);
  };

  return (
    <form onSubmit={mensajeFormulario}>
      <CampoFormulario
        etiqueta="Nombre"
        nombre="nombre"
        tipo="text"
        valor={nombre}
        alCambiar={setNombre}
      />

      <CampoFormulario
        etiqueta="Email"
        nombre="email"
        tipo="email"
        valor={email}
        alCambiar={setEmail}
      />

      <CampoFormulario
        etiqueta="Mensaje"
        nombre="mensaje"
        tipo="text"
        valor={mensaje}
        alCambiar={setMensaje}
      />

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
}

export default FormularioContacto;
