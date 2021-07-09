/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Home from './index';
import { render, screen } from '../../utils/test-utils';

describe('For a Home component', () => {
  test.only('should contain "American" ', () => {
    render(<Home />, {
      initialState: {
        artworks: [
          {
            departmentId: 1,
            displayName: 'American Decorative Arts',
          },
          {
            departmentId: 3,
            displayName: 'Ancient Near Eastern Art',
          },

        ],
      },
      urlParam: '/:categoryId',
    });
    expect(screen.getByText(/American/i)).toBeInTheDocument();
  });
});
