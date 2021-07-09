/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  test('should contain "right"', () => {
    render(<Footer />);
    expect(screen.getByText(/rights/i)).toBeInTheDocument();
  });
});
