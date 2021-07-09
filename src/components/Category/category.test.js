/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Category from './index';
import { render, screen } from '../../utils/test-utils';

describe('For a Category component', () => {
  test('should contain <img> ', () => {
    render(<Category />, {
      initialState: {

        category: [
          {
            primaryImageSmall: 'hola',
          },
        ],
      },
      urlParam: '/:categoryId',
    });
    expect(screen.getByAltText('hola')).toBeInTheDocument();
  });
});
