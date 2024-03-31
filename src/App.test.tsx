import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quiz Page', () => {
  render(<App />);
  const quizElement = screen.getByText(/Please Answer the Following Questions/i);
  expect(quizElement).toBeInTheDocument();
});
