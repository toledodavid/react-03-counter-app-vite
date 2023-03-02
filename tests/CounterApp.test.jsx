import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Test for <CounterApp />', () => {

  const initialValue = 100;

  test('should match with the snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('should show an inital value of 100', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(initialValue.toString());
  });

  test('should increment with the button +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('should decrement with the button -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
  });

  test('should reset the value to the initial value', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

});