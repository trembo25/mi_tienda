// @vitest-enviorenment jsdom
import {test, expect, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import FormularioContacto from '../components/organisms/FormularioContacto';

test("muestra un alert cuando el nombre esta vacio",()=>{

    // 1. Asignamos una función simulada directamente
        window.alert = vi.fn();

    // simulamos la funcion alert del navegador
    const alerta = vi.spyOn(window, "alert").mockImplementation(()=>{});

    //Mostramos el formulario
    render(<FormularioContacto/>);

    // simulamos que el usuario presiona enter

    fireEvent.click(
        screen.getByRole("button", {name: "Enviar"}));

    // comprobamos el mensaje de validaciom
    expect(alerta).toHaveBeenCalledWith("Por favor ingrese su nombre");


    // restauramos la funcion alert del navegador
    alerta.mockRestore();
})