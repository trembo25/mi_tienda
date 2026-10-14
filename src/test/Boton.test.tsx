// @vitest-environment jsdom
import {test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Boton from '../components/atoms/Boton';

test("el boton muestra el texto de Ver productos",()=>{
    render(
        <MemoryRouter>
            <Boton id = {1}/>
        </MemoryRouter>
    );
    const boton = screen.getByText("ver producto");
    expect (boton.textContent).toBe("ver producto");
});
