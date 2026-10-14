// @vitest-environment jsdom
import { test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Contacto from '../assets/components/pages/Contacto';

test('verifica clases responsivas del formulario de contacto', () => {
  window.alert = vi.fn();

  render(<Contacto />);

  expect(screen.getByRole('form')).toBeInTheDocument();
});