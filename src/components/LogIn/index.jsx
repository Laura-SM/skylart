import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { login } from '../../redux/actions/actionCreators';
import './LogIn.scss';
import iconLogin from '../../assets/iconLogin.svg';

function LogIn({ auth, actions }) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      actions.login(user);
    }
  }, [isAuthenticated, user]);

  const loggedInTemplate = () => (
    <>
      <div className="right-elements">
        <p className="user-text">
          Welcome
          {' '}
          {auth?.user?.name}
          ,
        </p>
        <img src={iconLogin} className="logout-icon" alt="logout" />
        <button type="button" className="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>LOG OUT</button>
      </div>
    </>
  );
  const loggedOutTemplate = () => (
    <>
      <div className="right-elements">
        <button type="button" className="login-button" onClick={() => loginWithRedirect()}>Log In</button>
        <img src={iconLogin} className="login-icon" alt="login" />
      </div>
    </>
  );

  return (
    <>
      {auth.isLoggedIn
        ? loggedInTemplate()
        : loggedOutTemplate()}
    </>
  );
}

LogIn.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,

  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
