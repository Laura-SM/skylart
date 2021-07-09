import axios from 'axios';
import actionTypes from './actionTypes';

export function loadCategoriesFromApi(url) {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_ARTWORKS,
        artwork: data.departments,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR',
      });
    }
  };
}

export function loadArtworksFromApi(categoryId) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${categoryId}`);
      dispatch({
        type: actionTypes.LOAD_ARTWORKS,
        artwork: data.objectIDs,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR',
      });
    }
  };
}

export function loadCategory(artworkId) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`);
      dispatch({
        type: actionTypes.LOAD_CATEGORY,
        detail: data,
        artworkId,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR',
      });
    }
  };
}

export function loadDetail(detail) {
  return {
    type: actionTypes.LOAD_DETAIL,
    detail,
  };
}

export function login(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user,
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
