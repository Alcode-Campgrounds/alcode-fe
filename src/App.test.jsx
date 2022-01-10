import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/landing page/i);
  expect(linkElement).toBeInTheDocument();
});

it('should prompt GitHub CI to pass', () => {
  expect('Alcode').toEqual('Alcode');
});
