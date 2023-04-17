import { render, screen } from '@testing-library/react';
import App from './App';

test('App should render', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find Your Movie/i);
  expect(linkElement).toBeInTheDocument();
});
