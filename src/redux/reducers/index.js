import { combineReducers } from 'redux';
import artworks from './artworksReducer';
import category from './categoryReducer';
import detail from './detailReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  artworks,
  detail,
  category,
  auth,
});

export default rootReducer;
