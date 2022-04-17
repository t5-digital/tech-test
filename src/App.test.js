import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const ctaButton = screen.getByText(/Load bad guys/i);
  expect(ctaButton).toBeInTheDocument();
});
