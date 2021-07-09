/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './index';
import { render, screen } from '../../utils/test-utils';
import { login } from '../../redux/actions/actionCreators';

jest.mock('@auth0/auth0-react');
jest.mock('../../redux/actions/actionCreators');

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234',
};

describe('Login Component', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
    login.mockReturnValue(jest.fn);
  });

  test('when isAuthenticated && user, login should be called', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: { name: 'ComStas' },
        },
      },
    });
    expect(login).toHaveBeenCalled();
  });
});

describe('Given a Login Component', () => {
  test('when logged in render should contain HolaQTal', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: { name: 'HolaQTal' },
        },
      },
    });

    expect(screen.getByText(/HolaQTal/i)).toBeInTheDocument();
  });
  test('when logged out render should contain "Log In"', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: false,
        },
      },
    });

    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });
});
