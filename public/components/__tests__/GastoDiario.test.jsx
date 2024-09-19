// src/components/__tests__/GastoDiario.test.jsx
import { render, screen } from '@testing-library/react';
import GastoDiario from '../GastoDiario';
import { vi } from 'vitest';
import { useTranslation } from 'react-i18next';


vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, params) => {
      const translations = {
        day_expense: `Gasto del día: ${params.dia}`,
        expense: `Gasto: ${params.amount} €`,
        difference: `Diferencia: ${params.diferencia}%`,
      };
      return translations[key];
    },
  }),
}));

describe('GastoDiario component', () => {
  test('renders correctly when a day is selected', () => {
    render(<GastoDiario dia="Lunes" amount={250} diferencia={10} />);   
    expect(screen.getByText('Gasto del día: Lunes')).toBeInTheDocument();
    expect(screen.getByText('Gasto: 250 €')).toBeInTheDocument();
    expect(screen.getByText('Diferencia: 10.00%')).toBeInTheDocument();
  });

  test('does not render anything if no day is selected', () => {
    const { container } = render(<GastoDiario dia={null} amount={0} diferencia={null} />);
    
    // Check que no renderiza nada cuando dia es null
    expect(container.firstChild).toBeNull();
  });

  test('renders correctly without difference when it is null', () => {
    render(<GastoDiario dia="Lunes" amount={250} diferencia={null} />);
    
    // Se muestra la información correctamente pero sin la diferencia
    expect(screen.getByText('Gasto del día: Lunes')).toBeInTheDocument();
    expect(screen.getByText('Gasto: 250 €')).toBeInTheDocument();
    expect(screen.queryByText(/Diferencia/)).toBeNull(); // No debería mostrar diferencia
  });
});
