import actionTypes from '../actions/actionTypes';

function artworksReducer(artworks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_ARTWORKS:
      return action.artwork;
    default:
      break;
  }
  return artworks;
}

export default artworksReducer;
