import CampoFormulario from "../molecules/CampoFormulario";
import { useState, type FormEvent } from "react";

function FormularioLogin() {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const mensajeFormulario = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // evita que se recargue la página al enviar el formulario
        
        if (email.trim() === "") {
            alert("Por favor ingrese su email");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Por favor ingrese un email válido");
            return;
        }
        if (password.trim() === "") {
            alert("Por favor ingrese su contraseña");
            return;
        }
        if (password.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }
        alert (`Bienvenido, ${email}. Has iniciado sesión correctamente.`);
    };

    return (
        <form onSubmit={mensajeFormulario} noValidate>
            <CampoFormulario
                etiqueta="Email"
                nombre="email"
                tipo="email"
                valor={email}
                alCambiar={setEmail}
            />
            
            <CampoFormulario
                etiqueta="Contraseña"
                nombre="password"
                tipo="password"
                valor={password}
                alCambiar={setPassword}
            />
            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
        );

}
export default FormularioLogin;