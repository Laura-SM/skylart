import React from 'react';
import { useHistory } from 'react-router-dom';
import goBackArrow from '../../../assets/goBackArrow.svg';
import './GoBack.scss';

function GoBackButton() {
  const history = useHistory();
  return (
    <button onClick={() => history.goBack()} className="go-back-button" type="button">
      Go Back
      <img src={goBackArrow} alt="arrow" />
    </button>
  );
}

export default GoBackButton;
