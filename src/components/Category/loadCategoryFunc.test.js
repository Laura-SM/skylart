/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Category from './index';
import { render } from '../../utils/test-utils';
import { loadCategory } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('For a Category action function', () => {
  test('should call loadCategory ', () => {
    loadCategory.mockReturnValue(jest.fn());
    render(<Category />, {
      initialState: {
        artworks: [23, 456],
        category: [
          {
            primaryImageSmall: 'hola',
          },
        ],
      },
    });
    expect(loadCategory).toHaveBeenCalled();
  });
});
