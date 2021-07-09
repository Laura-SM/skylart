/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from './App';

const { getComputedStyle } = global.window;
test('App component should be called', async () => {
  window.crypto = jest.fn();
  window.crypto.getRandomValues = jest.fn();
  window.getComputedStyle = (eletm, select) => getComputedStyle(eletm, select);
  render(<App />);
  const linkElement = screen.getByText(/category/);
  expect(linkElement).toBeInTheDocument();
});
