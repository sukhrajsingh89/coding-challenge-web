import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const MaleList = screen.getByTestId('male-list')
  expect(MaleList).toBeInTheDocument();
  const FemaleList = screen.getByTestId('female-list')
  expect(FemaleList).toBeInTheDocument();
});
