import { render, screen } from '@testing-library/react';
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

});