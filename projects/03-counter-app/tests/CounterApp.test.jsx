import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../src/CounterApp';

describe('Pruebas en el <CounterApp />', () => {
  const initialValue = 10;

  test('debe de hacer match con el snapshot', () => {
    const {container} = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
    const value = 100;
    render(
      <CounterApp 
        value={value}
      />
    );
    expect(screen.getByText(100)).toBeTruthy();
    // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')
  });

  test('debe incrementar con el botón +1', () => {
    render(
      <CounterApp 
        value={initialValue}
      />
    );
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('debe decrementar con el botón -1', () => {
    render(
      <CounterApp 
        value={initialValue}
      />
    );
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('debe de funcionar el botón de reset', () => {
    render(
      <CounterApp 
        value={initialValue}
      />
    );
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    expect(screen.getByText('10')).toBeTruthy();
  });
});