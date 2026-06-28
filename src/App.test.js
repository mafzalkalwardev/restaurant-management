import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Fast Ease landing route', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /welcome to fast ease restaurant/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /menu/i })).toBeInTheDocument();
});
