/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Detail from './index';
import { render, screen } from '../../utils/test-utils';
import { loadDetail } from '../../redux/actions/actionCreators';

describe('For a Detail component', () => {
  test('should containt "rights" ', () => {
    render(<Detail />, {
      initialState: {
        detail: {
          title: 'hello world',
        },
      },
      urlParam: ':artworkId',
    });
    expect(screen.getByText(/hello/i).toBeInTheDocument());
  });

  test('should call loadDetail', () => {
    render(<Detail />, {
      initialState: {
        detail: {
          title: 'hello world',
          objectID: 10,
        },
      },
      urlParam: ':artworkId',
    });
    expect(loadDetail).toHaveBeenCalled();
  });
});
