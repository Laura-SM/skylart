import actionTypes from '../actions/actionTypes';

function categoryReducer(details = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CATEGORY:
      return [...details, action.detail];
    default:
      return details;
  }
}

export default categoryReducer;
