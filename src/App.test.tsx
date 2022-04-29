import React from 'react';
import { render, screen } from '@testing-library/react';
import { Editor } from './App';

test('renders learn react link', () => {
  render(<Editor />);
  const linkElement = screen.getByText(/Enter some text.../i);
  expect(linkElement).toBeInTheDocument();
});
