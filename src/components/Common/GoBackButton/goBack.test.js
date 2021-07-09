/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import GoBackButton from './index';

describe('GoBackButton Component', () => {
  test('should contain "right"', () => {
    render(<GoBackButton />);
    expect(screen.getByText(/back/i)).toBeInTheDocument();
  });
});
