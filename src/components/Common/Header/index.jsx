import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import Login from '../../LogIn';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="container__left-elements">
          <Link to="/"><img src={logo} alt="logo" /></Link>
          <li className="left-elements"><Link to="/">Home</Link></li>
          <li className="left-elements">
            Category
            {' '}
            <span className="arrow-category">▼</span>
            <ul className="left-elements__list">
              <li className="left-elements__item"><Link to={`/category/${10}`}>Egyptian Art</Link></li>
              <li className="left-elements__item"><Link to={`/category/${6}`}>Asian Art</Link></li>
              <li className="left-elements__item"><Link to={`/category/${5}`}>Arts of Africa, Oceania and America</Link></li>
              <li className="left-elements__item"><Link to={`/category/${11}`}>European paintings</Link></li>
              <li className="left-elements__item"><Link to={`/category/${13}`}>Greek and Roman</Link></li>
              <li className="left-elements__item"><Link to={`/category/${1}`}>The American Wing</Link></li>
            </ul>
          </li>
        </ul>
        <ul className="container__right-elements">
          <Login />
        </ul>
      </div>
    </header>
  );
}

export default Header;
