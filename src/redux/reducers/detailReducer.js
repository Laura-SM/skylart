import actionTypes from '../actions/actionTypes';

function detailReducer(detail = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_DETAIL:
      return action.detail;
    default:
      return detail;
  }
}

export default detailReducer;
